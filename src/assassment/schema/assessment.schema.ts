import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as schemaObject } from 'mongoose';
import { Position, TypeCriteria } from '../../enum/position.enum';

@Schema({
  collection: 'assessment',
  strict: 'throw',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Assessment extends Document {
  @Prop()
  posisi: Position;
  @Prop()
  player_name: string;
  @Prop()
  aspect_name: string;
  @Prop({ type: [schemaObject.Types.Mixed], required: true })
  aspect: Record<string, any>[];
}

export type AssessmentDocument = HydratedDocument<Assessment>;

export const AssessmentSchema = SchemaFactory.createForClass(Assessment);
