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

// DTO for Aspect
class AspectDto {
  @ApiProperty()
  @IsObject()
  target: Record<string, any>; // Adding target property

  @ApiProperty()
  @IsObject()
  criteria: Record<string, any>;
}

// DTO for Assessment
export class AssessmentCreateDto {
  @ApiProperty()
  @IsEnum(Position)
  posisi: Position;

  @ApiProperty()
  @IsString()
  player_name: string;

  @ApiProperty()
  @IsString()
  aspect_name: string;

  @ApiProperty({ type: [AspectDto] }) // Ensuring aspect is an array of AspectDto
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AspectDto)
  aspect: AspectDto[];
}
