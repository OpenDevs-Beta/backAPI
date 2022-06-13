"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateEmpresaValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nombre: Validator_1.schema.string({}, [
                Validator_1.rules.unique({
                    table: 'empresas',
                    column: 'nombre',
                }),
            ]),
            descripcion: Validator_1.schema.string({}),
            enlaceTwitter: Validator_1.schema.string.optional({}),
            enlaceLinkedin: Validator_1.schema.string.optional({}),
            numEmpleados: Validator_1.schema.string.optional({}),
            creacion: Validator_1.schema.number.optional(),
        });
        this.messages = {};
    }
}
exports.default = CreateEmpresaValidator;
//# sourceMappingURL=CreateEmpresaValidator.js.map