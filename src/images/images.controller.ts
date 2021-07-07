import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';

@Controller('images')
export class ImagesController {
  // all
  @Get()
  getAll() {
    return 'getAll images';
  }

  // one by id
  @Get(':id')
  getOne(@Param('id') id) {
    return 'getOne' + id;
  }

  // create one
  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return `Title: ${createImageDto.title} Url: ${createImageDto.url}`;
  }
}
