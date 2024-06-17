import { IsEnum, IsString } from 'class-validator';
import { Position, TypeCriteria } from '../../enum/position.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCriterionDto {
  @ApiProperty()
  @IsEnum(Position)
  posisi: Position;

  @ApiProperty()
  @IsString()
  assessment_aspect: string;

  @ApiProperty()
  @IsString()
  criteria: string;

  @ApiProperty()
  @IsString()
  target: string;

  @ApiProperty()
  @IsEnum(TypeCriteria)
  @IsString()
  criteria_type: TypeCriteria;
}
