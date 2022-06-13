"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    async login({ request, response, auth }) {
        const { email, password } = request.all();
        try {
            const token = await auth.attempt(email, password);
            return { token: token, data: auth.user };
        }
        catch (error) {
            return response.badRequest('Error credenciales');
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map