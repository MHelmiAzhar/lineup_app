import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  name: string;
  @IsString()
  position: string;
  @IsString()
  jersey_number: number;

  @IsString()
  @IsOptional()
  img_url?: string;
}
