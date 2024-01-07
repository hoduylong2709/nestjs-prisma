import { Module } from '@nestjs/common';
import { TweetsModule } from 'src/module/tweets/tweets.module';
import { ApiController } from './api.controller';

@Module({
  imports: [TweetsModule],
  controllers: [ApiController],
})
export class ApiModule {}
