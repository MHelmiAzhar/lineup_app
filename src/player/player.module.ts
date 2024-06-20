import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Player, PlayerSchema } from './schema/player.schema';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FILE_UPLOAD_DIR } from '../common/constants/file';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
    ServeStaticModule.forRoot({
      rootPath: FILE_UPLOAD_DIR, // Path ke direktori gambar
      serveRoot: '/image', // URL prefix untuk akses gambar
    }),
  ],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
