import { Global, Module } from '@nestjs/common';
import { PaginationService } from './pagination.service';

@Global()
@Module({
  providers: [PaginationService],
  exports: [PaginationService],
  imports: [],
})
export class PaginationModule {}
