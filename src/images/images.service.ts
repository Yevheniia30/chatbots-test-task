// СЕРВИС (ЗДЕСЬ ПИШЕМ ЛОГИКУ)

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateImageDto } from './dto/create-image.dto';
import { Image, ImageDocument } from './schemas/image.schema';
import { Model } from 'mongoose';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel(Image.name) private imageModel: Model<ImageDocument>,
  ) {}

  // получить все
  async getAll(): Promise<Image[]> {
    return this.imageModel.find().exec();
  }

  // создать и добавить в базу
  async create(imageDto: CreateImageDto): Promise<Image> {
    const newImage = new this.imageModel(imageDto);
    return newImage.save();
  }

  // найти одну
  //   getById(id: string) {
  //     return this.images.find((i) => i.id === id);
  //   }
}
