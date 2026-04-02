import { IsEmail, IsInt, IsOptional, Max, Min } from 'class-validator';

export class GenerateDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(10)
  maxMachines?: number = 2;
}
