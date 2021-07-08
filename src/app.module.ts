import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import 'dotenv/config';

const uriDb = process.env.URI_DB;

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    ImagesModule,
    // MongooseModule.forRoot(
    //   'mongodb+srv://yevheniia30:yevheniia30@cluster0.tmjew.mongodb.net/images?retryWrites=true&w=majority',
    // ),
    MongooseModule.forRoot(uriDb),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
