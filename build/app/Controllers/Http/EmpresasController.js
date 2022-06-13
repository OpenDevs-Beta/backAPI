"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Empresa_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Empresa"));
const CreateEmpresaValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/CreateEmpresaValidator"));
const SortValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/SortValidator"));
const UpdateEmpresaValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdateEmpresaValidator"));
class EmpresasController {
    async index({ request, response }) {
        const page = request.input('page', 1) ?? 1;
        const limit = request.input('limit', 10) ?? 10;
        const validatedData = await request.validate(SortValidator_1.default);
        const sortBy = validatedData.sort_by || 'id';
        const order = validatedData.order || 'asc';
        const empresas = await Empresa_1.default.query()
            .preload('ofertas')
            .orderBy(sortBy, order)
            .paginate(page, limit);
        response.ok({ data: empresas });
    }
    async store({ request, response }) {
        const validatedData = await request.validate(CreateEmpresaValidator_1.default);
        const empresa = await Empresa_1.default.create(validatedData);
        return response.created({ data: empresa });
    }
    async update({ request, response, params: { id } }) {
        const empresa = await Empresa_1.default.findOrFail(id);
        const validatedData = await request.validate(UpdateEmpresaValidator_1.default);
        empresa.merge(validatedData);
        await empresa.save();
        return response.created({ data: empresa });
    }
    async destroy({ params: { id }, response }) {
        const empresa = await Empresa_1.default.findOrFail(id);
        await empresa.delete();
        return response.noContent();
    }
}
exports.default = EmpresasController;
//# sourceMappingURL=EmpresasController.js.map