import { Module } from '@nestjs/common';

import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

// создаем отдельній модуль по аналогии с App
@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
