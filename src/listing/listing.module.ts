import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Listing } from './listing.entity';
import { ListingService } from './listing.service';
import { ListingController } from './listing.controller';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Listing, User])],
  providers: [ListingService],
  controllers: [ListingController],
})
export class ListingModule {}
