class ApiResponse {
    constructor(statusCode, data , messge = "Success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = messge;
        this.success = statusCode < 400
    }
}

export {ApiResponse}