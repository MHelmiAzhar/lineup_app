import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as schemaObject } from 'mongoose';

@Schema({
  collection: 'player',
  strict: 'throw',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Player extends Document {
  @Prop({ unique: true })
  name: string;
  @Prop()
  position: string;
  @Prop()
  jersey_number: number;
  @Prop()
  img_url: string;
}

export type PlayerDocument = HydratedDocument<Player>;

export const PlayerSchema = SchemaFactory.createForClass(Player);
