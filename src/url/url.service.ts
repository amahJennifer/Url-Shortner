import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Url } from './url.model';
import * as shortid from 'shortid';
import { Response } from 'express';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url) private urlModel: typeof Url) {}

  async shortenUrl(userId,urlData): Promise<string> {
    const shortUrl = urlData.customUrl ? urlData.customUrl : shortid.generate();
    const newUrl=await this.urlModel.create({ longUrl:urlData.longUrl, shortUrl,userId });
    return newUrl.shortUrl
  }

  async getLongUrl(shortUrl: string, res: Response): Promise<void> {
    const url = await this.urlModel.findOne({ where: { shortUrl } });
    if(url){
      await this.urlModel.increment('clickCount',{ where: { shortUrl }});
    }
    return res.redirect(url.longUrl);
  }
}
