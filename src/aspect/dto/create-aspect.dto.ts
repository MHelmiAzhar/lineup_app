import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateAspectDto {
  @ApiProperty()
  @IsString()
  assessment_aspect: string;
  @ApiProperty()
  @IsNumber()
  percentage: number;
  @ApiProperty()
  @IsNumber()
  core_factor: number;
  @ApiProperty()
  @IsNumber()
  secondary_factor: number;
}
