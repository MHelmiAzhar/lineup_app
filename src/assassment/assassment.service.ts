import { Injectable, NotFoundException } from '@nestjs/common';
import { AssessmentCreateDto } from './dto/create-assessment.dto';
import { AssessmentUpdateDto } from './dto/update-assessment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Assessment } from './schema/assessment.schema';
import { Model } from 'mongoose';

@Injectable()
export class AssassmentService {
  constructor(
    @InjectModel(Assessment.name)
    private assessmentModel: Model<Assessment>,
  ) {}
  async create(createAssassmentDto: AssessmentCreateDto) {
    return await this.assessmentModel.create(createAssassmentDto);
  }

  async findAll() {
    return await this.assessmentModel.find();
  }

  async findOne(id: string) {
    const res = await this.assessmentModel.findById(id);
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async update(id: string, updateAssassmentDto: AssessmentUpdateDto) {
    const res = await this.assessmentModel.findByIdAndUpdate(
      id,
      updateAssassmentDto,
      {
        new: true,
      },
    );
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async remove(id: string) {
    const res = await this.assessmentModel.findByIdAndDelete(id);
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }
}
