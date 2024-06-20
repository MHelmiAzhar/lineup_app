import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './schema/player.schema';
import { Model } from 'mongoose';
import { saveImageToLocal } from '../util/save.image';
import { deleteFile } from '../util/delete.image';

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel(Player.name)
    private playerModel: Model<Player>,
  ) {}
  async create(createPlayerDto: CreatePlayerDto, image: any) {
    const checkNameExist = await this.playerModel.findOne({
      name: createPlayerDto.name,
    });
    if (checkNameExist) throw new BadRequestException('Name already exist');

    let payload = { ...createPlayerDto };
    if (image) {
      const saveImage = await saveImageToLocal(
        image.buffer,
        image.originalname,
      );
      payload.img_url = saveImage;
    }
    return await this.playerModel.create(payload);
  }

  async findAll() {
    return await this.playerModel.find();
  }

  async findOne(id: string) {
    const res = await this.playerModel.findById(id);
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async findPlayerPosition(position: string) {
    const res = await this.playerModel.find({ position });
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async update(id: string, updatePlayerDto: UpdatePlayerDto, image: any) {
    let payload = { ...updatePlayerDto };
    if (image) {
      const findData = await this.playerModel.findById(id);
      await deleteFile(findData.img_url);

      const saveImage = await saveImageToLocal(
        image.buffer,
        image.originalname,
      );
      payload.img_url = saveImage;
    }
    const res = await this.playerModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
    if (!res) throw new NotFoundException('Data Not Found');
    return res;
  }

  async remove(id: string) {
    const res = await this.playerModel.findByIdAndDelete(id);
    if (!res) throw new NotFoundException('Data Not Found');
    const findData = await this.playerModel.findById(id);
    await deleteFile(findData?.img_url);
    return res;
  }
}
