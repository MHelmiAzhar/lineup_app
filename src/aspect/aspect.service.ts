import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAspectDto } from './dto/create-aspect.dto';
import { UpdateAspectDto } from './dto/update-aspect.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Aspect } from './schema/aspect.schema';
import { Model } from 'mongoose';

@Injectable()
export class AspectService {
  constructor(
    @InjectModel(Aspect.name)
    private aspectModel: Model<Aspect>,
  ) {}
  async create(createAspectDto: CreateAspectDto) {
    return await this.aspectModel.create(createAspectDto);
  }

  async findAll() {
    return await this.aspectModel.find();
  }

  async findOne(id: string) {
    const res = await this.aspectModel.findById(id);
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async update(id: string, updateAspectDto: UpdateAspectDto) {
    const res = await this.aspectModel.findByIdAndUpdate(id, updateAspectDto, {
      new: true,
    });
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async remove(id: string) {
    const res = await this.aspectModel.findByIdAndDelete(id);
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }
}
