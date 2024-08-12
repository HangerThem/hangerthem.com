import {
	successResponse,
	optionsResponse,
	badRequestResponse,
	tooManyRequestsResponse,
	internalServerErrorResponse,
} from "@/helpers/apiHelper"
import { NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/utils/emailUtils"
import rateLimit from "express-rate-limit"

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100,
	message: "Too many requests, please try again later.",
})

export async function POST(req: NextRequest, res: NextResponse) {
	if (process.env.NODE_ENV !== "development") {
		await new Promise((resolve, reject) => {
			limiter(req, res, (result: any) => {
				if (result instanceof Error) {
					return tooManyRequestsResponse()
				}
				resolve(result)
			})
		})
	}

	try {
		const { email, name, message, recaptchaToken } = await req.json()

		if (!email || !name || !message || !recaptchaToken) {
			return badRequestResponse("Missing required fields")
		}

		const recaptchaResponse = await fetch(
			`https://www.google.com/recaptcha/api/siteverify`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
			}
		)
		const recaptchaData = await recaptchaResponse.json()

		if (!recaptchaData.success) {
			return badRequestResponse("reCAPTCHA verification failed")
		}

		await sendEmail({
			to: process.env.CONTACT_EMAIL as string,
			subject: `New message from ${name} - ${email}`,
			text: message,
		})

		return successResponse("Email sent successfully")
	} catch (e) {
		console.error(e)
		return internalServerErrorResponse()
	}
}

export async function OPTIONS() {
	return optionsResponse({
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "POST, OPTIONS",
	})
}
