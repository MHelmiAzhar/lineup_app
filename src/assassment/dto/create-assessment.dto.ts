import {
  IsString,
  IsArray,
  ValidateNested,
  IsEnum,
  IsObject,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Position } from '../../enum/position.enum';
import { ApiProperty } from '@nestjs/swagger';

// DTO untuk Aspect
class AspectDto {
  @ApiProperty()
  @IsString()
  aspect_name: string;

  @ApiProperty()
  @IsObject()
  core_factor: Record<string, any>;

  @ApiProperty()
  @IsObject()
  secondary_factor: Record<string, any>;
}

// DTO untuk Assessment
export class AssessmentCreateDto {
  @ApiProperty()
  @IsEnum(Position)
  posisi: Position;

  @ApiProperty()
  @IsString()
  player_name: string;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AspectDto)
  aspect: AspectDto[];
}
