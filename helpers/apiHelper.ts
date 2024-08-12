function jsonResponse(status: number, data?: any) {
	const response = new Response(JSON.stringify({ status, ...data }), {
		status,
		headers: {
			"Content-Type": "application/json",
		},
	})
	return response
}

export function downloadResponse(status: number, data: any) {
	const response = new Response(data, {
		status,
		headers: {
			"Content-Type": "application/json",
			"Content-Disposition": 'attachment; filename="user_data.json"',
		},
	})
	return response
}

export function optionsResponse(headers: { [key: string]: string }) {
	const response = new Response(null, {
		status: 204,
		headers,
	})

	return response
}

export function successResponse(data: any) {
	return jsonResponse(200, data)
}

export function badRequestResponse(errorMessage?: string | {}) {
	return jsonResponse(400, { error: errorMessage ?? "Bad request" })
}

export function internalServerErrorResponse() {
	return jsonResponse(500, { error: "Internal server error" })
}
