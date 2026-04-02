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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicensesController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const licenses_service_1 = require("./licenses.service");
const activate_dto_1 = require("./dto/activate.dto");
const generate_dto_1 = require("./dto/generate.dto");
let LicensesController = class LicensesController {
    licensesService;
    configService;
    constructor(licensesService, configService) {
        this.licensesService = licensesService;
        this.configService = configService;
    }
    activate(dto) {
        return this.licensesService.activate(dto.key, dto.machineId);
    }
    verify(dto) {
        return this.licensesService.verify(dto.key, dto.machineId);
    }
    deactivate(dto) {
        return this.licensesService.deactivate(dto.key, dto.machineId);
    }
    generate(dto, apiKey) {
        this.validateAdmin(apiKey);
        return this.licensesService.generate(dto.email, dto.maxMachines ?? 2);
    }
    listAll(apiKey) {
        this.validateAdmin(apiKey);
        return this.licensesService.listAll();
    }
    revoke(key, apiKey) {
        this.validateAdmin(apiKey);
        return this.licensesService.revoke(key);
    }
    validateAdmin(apiKey) {
        const expected = this.configService.get('ADMIN_API_KEY');
        if (!apiKey || apiKey !== expected) {
            throw new common_1.UnauthorizedException('Invalid admin API key');
        }
    }
};
exports.LicensesController = LicensesController;
__decorate([
    (0, common_1.Post)('activate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [activate_dto_1.ActivateDto]),
    __metadata("design:returntype", void 0)
], LicensesController.prototype, "activate", null);
__decorate([
    (0, common_1.Post)('verify'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [activate_dto_1.ActivateDto]),
    __metadata("design:returntype", void 0)
], LicensesController.prototype, "verify", null);
__decorate([
    (0, common_1.Post)('deactivate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [activate_dto_1.ActivateDto]),
    __metadata("design:returntype", void 0)
], LicensesController.prototype, "deactivate", null);
__decorate([
    (0, common_1.Post)('admin/generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('x-api-key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_dto_1.GenerateDto, String]),
    __metadata("design:returntype", void 0)
], LicensesController.prototype, "generate", null);
__decorate([
    (0, common_1.Get)('admin/list'),
    __param(0, (0, common_1.Headers)('x-api-key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LicensesController.prototype, "listAll", null);
__decorate([
    (0, common_1.Post)('admin/revoke/:key'),
    __param(0, (0, common_1.Param)('key')),
    __param(1, (0, common_1.Headers)('x-api-key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], LicensesController.prototype, "revoke", null);
exports.LicensesController = LicensesController = __decorate([
    (0, common_1.Controller)('licenses'),
    __metadata("design:paramtypes", [licenses_service_1.LicensesService,
        config_1.ConfigService])
], LicensesController);
//# sourceMappingURL=licenses.controller.js.map