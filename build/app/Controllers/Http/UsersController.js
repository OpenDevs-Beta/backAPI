"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const CreateUserValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/CreateUserValidator"));
const SortValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/SortValidator"));
const UpdateUserValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdateUserValidator"));
class UsersController {
    async index({ request, response }) {
        const page = request.input('page', 1) ?? 1;
        const limit = request.input('limit', 10) ?? 10;
        const validatedData = await request.validate(SortValidator_1.default);
        const sortBy = validatedData.sort_by || 'id';
        const order = validatedData.order || 'asc';
        const users = await User_1.default.query().orderBy(sortBy, order).paginate(page, limit);
        response.ok({ data: users });
    }
    async store({ request, response }) {
        const validatedData = await request.validate(CreateUserValidator_1.default);
        const user = await User_1.default.create(validatedData);
        return response.created({ data: user });
    }
    async update({ request, response, params: { id } }) {
        const user = await User_1.default.findOrFail(id);
        const validatedData = await request.validate(UpdateUserValidator_1.default);
        user.merge(validatedData);
        await user.save();
        return response.created({ data: user });
    }
    async destroy({ params: { id }, response }) {
        const user = await User_1.default.findOrFail(id);
        await user.delete();
        return response.noContent();
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map