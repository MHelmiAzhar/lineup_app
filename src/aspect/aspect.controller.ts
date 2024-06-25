import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AspectService } from './aspect.service';
import { CreateAspectDto } from './dto/create-aspect.dto';
import { UpdateAspectDto } from './dto/update-aspect.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Aspect')
@Controller('aspect')
export class AspectController {
  constructor(private readonly aspectService: AspectService) {}

  @Post()
  create(@Body() createAspectDto: CreateAspectDto) {
    return this.aspectService.create(createAspectDto);
  }

  @Get()
  findAll() {
    return this.aspectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aspectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAspectDto: UpdateAspectDto) {
    return this.aspectService.update(id, updateAspectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aspectService.remove(id);
  }
}
