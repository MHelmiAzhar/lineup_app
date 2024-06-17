import { Module } from '@nestjs/common';
import { AssassmentService } from './assassment.service';
import { AssassmentController } from './assassment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Assessment, AssessmentSchema } from './schema/assessment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Assessment.name, schema: AssessmentSchema },
    ]),
  ],
  controllers: [AssassmentController],
  providers: [AssassmentService],
})
export class AssassmentModule {}
