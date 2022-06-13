"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Oferta_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Oferta"));
class OfertasController {
    async index({ request, response }) {
        const page = request.input('page', 1) ?? 1;
        const limit = request.input('limit', 10) ?? 10;
        const ofertas = await Oferta_1.default.query()
            .preload('habilidades')
            .preload('beneficios')
            .preload('empresa', (query) => query.select('nombre', 'descripcion'))
            .paginate(page, limit);
        response.ok({ data: ofertas });
    }
}
exports.default = OfertasController;
//# sourceMappingURL=OfertasController.js.map