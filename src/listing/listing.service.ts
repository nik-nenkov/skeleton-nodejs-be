import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Listing } from './listing.entity';
import { ListingRequestDto } from './dto/listing-request.dto';
import { ListingResponseDto } from './dto/listing-response.dto';
import { User } from '../user/user.entity';

@Injectable()
export class ListingService {
  constructor(
    @InjectRepository(Listing)
    private listingRepo: Repository<Listing>,
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}

  async create(dto: ListingRequestDto): Promise<ListingResponseDto> {
    const user = await this.userRepo.findOne({ where: { id: dto.userId } });
    if (!user) throw new NotFoundException('User not found');
    
    const listing = this.listingRepo.create({ ...dto, user });
    const saved = await this.listingRepo.save(listing);
    return this.toResponseDto(saved);
  }

  async findAll(): Promise<ListingResponseDto[]> {
    const listings = await this.listingRepo.find({ relations: ['user'] });
    return listings.map(l => this.toResponseDto(l));
  }

  async findByUserId(userId: number): Promise<ListingResponseDto[]> {
    const listings = await this.listingRepo.find({ where: { user: { id: userId } }, relations: ['user'] });
    return listings.map(l => this.toResponseDto(l));
  }

  private toResponseDto(listing: Listing): ListingResponseDto {
    return {
      id: listing.id,
      title: listing.title,
      description: listing.description,
      price: listing.price,
      userId: listing.user?.id ?? (listing as any).userId, // fallback if relation not loaded
    };
  }
}
