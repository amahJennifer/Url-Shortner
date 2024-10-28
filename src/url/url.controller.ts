import { Controller, Get, Param, Post, Body, Res, UseGuards, Req } from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';
import { ShortenUrlDto } from './dtos/shorten-url.dto';
import { GuestOrAuthGuard } from '../auth/guards/guest-or-auth.guard';

@Controller('/')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @UseGuards(GuestOrAuthGuard)
  @Post('shorten')
  async shortenUrl(@Req() req, @Body() shortenUrlDto: ShortenUrlDto) {
    const userId = req.user?.sub || null;
    return this.urlService.shortenUrl(userId, shortenUrlDto);
  }

  @Get(':shortUrl')
  async redirect(@Param('shortUrl') shortUrl: string, @Res() res: Response) {
    return this.urlService.getLongUrl(shortUrl,res);
  }
}
