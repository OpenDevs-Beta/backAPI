"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
const TipoExperiencia_1 = global[Symbol.for('ioc.use')]("App/Models/Contracts/TipoExperiencia");
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'ofertas';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('nombre').notNullable();
            table.text('descripcion').notNullable();
            table.string('ubicacion');
            table
                .enu('experiencia', Object.values(TipoExperiencia_1.TipoExperiencia))
                .defaultTo(TipoExperiencia_1.TipoExperiencia.JUNIOR)
                .notNullable();
            table.integer('empresa_id').unsigned().references('empresas.id').index();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1654722997628_ofertas.js.map