import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as schemaObject } from 'mongoose';
import { Position, TypeCriteria } from '../../enum/position.enum';

@Schema({
  collection: 'criteria',
  strict: 'throw',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Criteria extends Document {
  @Prop()
  posisi: Position;
  @Prop()
  assessment_aspect: string;
  @Prop()
  criteria: string;
  @Prop()
  target: string;
  @Prop()
  criteria_type: TypeCriteria;
}

export type CriteriaDocument = HydratedDocument<Criteria>;

export const CriteriaSchema = SchemaFactory.createForClass(Criteria);
