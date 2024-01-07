import { Module } from '@nestjs/common';
import { TweetsModule } from './module/tweets/tweets.module';

@Module({
  imports: [TweetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
