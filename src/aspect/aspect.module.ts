import { Module } from '@nestjs/common';
import { AspectService } from './aspect.service';
import { AspectController } from './aspect.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Aspect, AspectSchema } from './schema/aspect.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Aspect.name, schema: AspectSchema }]),
  ],
  controllers: [AspectController],
  providers: [AspectService],
})
export class AspectModule {}
