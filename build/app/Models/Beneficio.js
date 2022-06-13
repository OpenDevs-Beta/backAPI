"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const AppBaseModel_1 = __importDefault(require("./AppBaseModel"));
const Oferta_1 = __importDefault(require("./Oferta"));
class Beneficio extends AppBaseModel_1.default {
}
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Beneficio.prototype, "nombre", void 0);
__decorate([
    (0, Orm_1.manyToMany)(() => Oferta_1.default, { pivotTimestamps: true }),
    __metadata("design:type", Object)
], Beneficio.prototype, "ofertas", void 0);
exports.default = Beneficio;
//# sourceMappingURL=Beneficio.js.map