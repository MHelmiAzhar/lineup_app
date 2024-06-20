import { Module } from '@nestjs/common';
import configs from './common/configs';
import { PlayerModule } from './player/player.module';
import { AspectModule } from './aspect/aspect.module';
import { CriteriaModule } from './criteria/criteria.module';
import { AssassmentModule } from './assassment/assassment.module';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { FILE_UPLOAD_DIR } from './common/constants/file';
import { MongooseModule } from '@nestjs/mongoose';
import { StatisticModule } from './statistic/statistic.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configs,
      ignoreEnvFile: false,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
    }),
    PlayerModule,
    AspectModule,
    CriteriaModule,
    AssassmentModule,
    MulterModule.register({
      dest: FILE_UPLOAD_DIR,
      limits: { fieldSize: 1000 * 1000 * 2 },
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    StatisticModule,
  ],
})
export class AppModule {}
