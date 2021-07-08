// СЕРВИС (ЗДЕСЬ ПИШЕМ ЛОГИКУ)

import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';

@Injectable()
export class ImagesService {
  // модификатор private
  private images = [];

  // получить все
  getAll() {
    return this.images;
  }

  // найти одну
  getById(id: string) {
    return this.images.find((i) => i.id === id);
  }

  // создать и добавить в базу
  create(imageDto: CreateImageDto) {
    return this.images.push({
      ...imageDto,
      id: Date.now().toString(),
    });
  }
}
