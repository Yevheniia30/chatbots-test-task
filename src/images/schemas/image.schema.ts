import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ImageDocument = Image & Document;

@Schema()
export class Image {
  @Prop()
  title: string;

  @Prop()
  url: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
