import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TweetsRepository {
  constructor(private prisma: PrismaService) {}
}