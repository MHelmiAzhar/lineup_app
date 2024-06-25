import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Statistic } from './schema/statistic.schema';
import { Model } from 'mongoose';

@Injectable()
export class StatisticService {
  constructor(
    @InjectModel(Statistic.name)
    private statisticModel: Model<Statistic>,
  ) {}
  async create(createStatisticDto: CreateStatisticDto) {
    return await this.statisticModel.create(createStatisticDto);
  }

  async findAll() {
    return await this.statisticModel.find();
  }

  async findOne(id: string) {
    const res = await this.statisticModel.findById(id);
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async findByName(name: string) {
    const res = await this.statisticModel.findOne({ player_name: name });
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async update(id: string, updateStatisticDto: UpdateStatisticDto) {
    const res = await this.statisticModel.findByIdAndUpdate(
      id,
      updateStatisticDto,
      {
        new: true,
      },
    );
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async remove(id: string) {
    const res = await this.statisticModel.findByIdAndDelete(id);
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }
}
