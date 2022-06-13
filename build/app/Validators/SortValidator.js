"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class SortValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            sort_by: Validator_1.schema.enum.optional(['id', 'nombre', 'createdAt', 'updatedAt']),
            order: Validator_1.schema.enum.optional(['asc', 'desc']),
        });
        this.messages = {};
    }
}
exports.default = SortValidator;
//# sourceMappingURL=SortValidator.js.map