import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsObject, IsString } from 'class-validator';
import { Position } from '../../enum/position.enum';

export class CreateStatisticDto {
  @ApiProperty()
  @IsEnum(Position)
  posisi: Position;

  @ApiProperty()
  @IsString()
  player_name: string;

  @ApiProperty()
  @IsObject()
  physic: Record<string, any>;

  @ApiProperty()
  @IsObject()
  defence: Record<string, any>;

  @ApiProperty()
  @IsObject()
  attack: Record<string, any>;

  @ApiProperty()
  @IsObject()
  agility: Record<string, any>;

  @ApiProperty()
  @IsObject()
  ball_skill: Record<string, any>;

  @ApiProperty()
  @IsObject()
  passing: Record<string, any>;
}
