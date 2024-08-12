import { post } from "@/services/requestHelpers"

export const requestSendEmail = async (
	emailData: IEmailData
): Promise<
	| {
			emailData: IEmailData
			status: number
	  }
	| IErrorResponse
> => {
	return await post<
		| {
				emailData: IEmailData
				status: number
		  }
		| IErrorResponse
	>("/email", emailData)
}
