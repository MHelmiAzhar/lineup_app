import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCriterionDto } from './dto/create-criterion.dto';
import { UpdateCriterionDto } from './dto/update-criterion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Criteria } from './schema/criteria.schema';
import { Model } from 'mongoose';

@Injectable()
export class CriteriaService {
  constructor(
    @InjectModel(Criteria.name) private citeriaModel: Model<Criteria>,
  ) {}
  async create(createCriterionDto: CreateCriterionDto) {
    return await this.citeriaModel.create(createCriterionDto);
  }

  async findAll() {
    return await this.citeriaModel.find();
  }

  async findOne(id: string) {
    const res = await this.citeriaModel.findById(id);
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async update(id: string, updateCriterionDto: UpdateCriterionDto) {
    const res = await this.citeriaModel.findByIdAndUpdate(
      id,
      updateCriterionDto,
      { new: true },
    );
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async remove(id: string) {
    const res = await this.citeriaModel.findByIdAndDelete(id);
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }
}
