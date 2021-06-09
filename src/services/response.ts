interface iSuccess {
    success: boolean,
    data: any,
    code: number,
}

interface iError {
    error: boolean,
    data: {
        message: string
    },
    code: number,
}

const successResponse = (data: any, code = 200): iSuccess => {
    return {
        success: true,
        data,
        code
    }
}

const errorResponse = (message: string, code = 400): iError => {
    return {
        error: true,
        data: { message },
        code
    }
}

export {
    successResponse,
    errorResponse
}