"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Beneficio_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Beneficio"));
class BeneficiosController {
    async index({ response }) {
        const beneficios = await Beneficio_1.default.query();
        response.ok({ data: beneficios });
    }
}
exports.default = BeneficiosController;
//# sourceMappingURL=BeneficiosController.js.map