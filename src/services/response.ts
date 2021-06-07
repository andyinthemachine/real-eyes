
interface iSuccess {
    success: boolean,
    data: any,
    code: number,
}
const successResponse = (data: any, code = 200): iSuccess => {
    return {
        success: true,
        data,
        code
    }
}

export {
    successResponse,
}