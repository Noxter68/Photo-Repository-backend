import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class ActivateDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/, {
    message: 'Invalid license key format',
  })
  key: string;

  @IsString()
  @IsNotEmpty()
  machineId: string;
}
