import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('about')
@Controller('about')
export class AboutController {
  @Get()
  @ApiOperation({ summary: 'Get About Page', description: 'Returns the static HTML About page for the Garage Sale Marketplace API.' })
  @ApiResponse({ status: 200, description: 'About HTML page', content: { 'text/html': {} } })
  getAboutPage(@Res() res: Response) {
    const filePath = join(process.cwd(), 'public', 'about.html');
    return res.sendFile(filePath);
  }
}