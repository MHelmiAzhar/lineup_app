import { Module } from '@nestjs/common';
import { CriteriaService } from './criteria.service';
import { CriteriaController } from './criteria.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Criteria, CriteriaSchema } from './schema/criteria.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Criteria.name, schema: CriteriaSchema },
    ]),
  ],
  controllers: [CriteriaController],
  providers: [CriteriaService],
})
export class CriteriaModule {}
