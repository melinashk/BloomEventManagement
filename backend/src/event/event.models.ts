/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true, type: String })
  password: string;

  @Prop({ required: true })
  termsAndConditions: boolean;
}

export const userModel = SchemaFactory.createForClass(User);
