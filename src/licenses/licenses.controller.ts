import {
  Controller,
  Post,
  Get,
  Body,
  Headers,
  UnauthorizedException,
  Param,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LicensesService } from './licenses.service';
import { ActivateDto } from './dto/activate.dto';
import { GenerateDto } from './dto/generate.dto';

@Controller('licenses')
export class LicensesController {
  constructor(
    private licensesService: LicensesService,
    private configService: ConfigService,
  ) {}

  // ── Public endpoints (called by the Flutter app) ──────────────

  @Post('activate')
  activate(@Body() dto: ActivateDto) {
    return this.licensesService.activate(dto.key, dto.machineId);
  }

  @Post('verify')
  verify(@Body() dto: ActivateDto) {
    return this.licensesService.verify(dto.key, dto.machineId);
  }

  @Post('deactivate')
  deactivate(@Body() dto: ActivateDto) {
    return this.licensesService.deactivate(dto.key, dto.machineId);
  }

  // ── Admin endpoints (protected by API key) ────────────────────

  @Post('admin/generate')
  generate(@Body() dto: GenerateDto, @Headers('x-api-key') apiKey: string) {
    this.validateAdmin(apiKey);
    return this.licensesService.generate(dto.email, dto.maxMachines ?? 2);
  }

  @Get('admin/list')
  listAll(@Headers('x-api-key') apiKey: string) {
    this.validateAdmin(apiKey);
    return this.licensesService.listAll();
  }

  @Post('admin/revoke/:key')
  revoke(@Param('key') key: string, @Headers('x-api-key') apiKey: string) {
    this.validateAdmin(apiKey);
    return this.licensesService.revoke(key);
  }

  private validateAdmin(apiKey: string) {
    const expected = this.configService.get<string>('ADMIN_API_KEY');
    if (!apiKey || apiKey !== expected) {
      throw new UnauthorizedException('Invalid admin API key');
    }
  }
}
