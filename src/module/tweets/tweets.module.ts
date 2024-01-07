import { Module } from '@nestjs/common';
import { TweetsRepository } from './tweets.repository';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TweetsRepository],
})
export class TweetsModule {}
