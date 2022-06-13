"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Habilidad_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Habilidad"));
class HabilidadesController {
    async index({ response }) {
        const habilidades = await Habilidad_1.default.query();
        response.ok({ data: habilidades });
    }
}
exports.default = HabilidadesController;
//# sourceMappingURL=HabilidadesController.js.map