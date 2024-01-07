import { Injectable } from '@nestjs/common';
import { Tweet, User } from '@prisma/client';
import { TweetsRepository } from './tweets.repository';

@Injectable()
export class TweetsService {
  constructor(private repository: TweetsRepository) {}

  async createTweet(params: { content: Tweet['content']; userId: User['id'] }) {
    const { content, userId } = params;

    // Call repository layer
    const tweet = await this.repository.createTweet({
      data: { content, user: { connect: { id: userId } } },
    });

    // Do other things in the service layer... e.g. send email of tweet
    return tweet;
  }

  async getTweets() {
    const tweets = await this.repository.getTweets({});
    return tweets;
  }
}
