import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ListingService } from './listing.service';
import { ListingRequestDto } from './dto/listing-request.dto';
import { ListingResponseDto } from './dto/listing-response.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('listings')
@Controller('listings')
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new listing' })
  @ApiResponse({ status: 201, description: 'Listing created', type: ListingResponseDto })
  @ApiBody({ type: ListingRequestDto })
  async create(@Body() dto: ListingRequestDto): Promise<ListingResponseDto> {
    return this.listingService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all listings or filter by userId' })
  @ApiQuery({ name: 'userId', required: false, type: Number, description: 'Filter by user ID' })
  @ApiResponse({ status: 200, description: 'List of listings', type: [ListingResponseDto] })
  async findAll(@Query('userId') userId?: number): Promise<ListingResponseDto[]> {
    if (userId) {
      return this.listingService.findByUserId(userId);
    }
    return this.listingService.findAll();
  }
}
