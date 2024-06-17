import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssassmentService } from './assassment.service';
import { AssessmentCreateDto } from './dto/create-assessment.dto';
import { AssessmentUpdateDto } from './dto/update-assessment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Assessment')
@Controller('assassment')
export class AssassmentController {
  constructor(private readonly assassmentService: AssassmentService) {}

  @Post()
  create(@Body() createAssassmentDto: AssessmentCreateDto) {
    return this.assassmentService.create(createAssassmentDto);
  }

  @Get()
  findAll() {
    return this.assassmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assassmentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssassmentDto: AssessmentUpdateDto,
  ) {
    return this.assassmentService.update(id, updateAssassmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assassmentService.remove(id);
  }
}
