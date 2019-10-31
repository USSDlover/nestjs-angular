import * as path from 'path';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { ROUTE_PREFIX } from './routes';

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

const resolvePath = (file: string) => path.resolve(`./public/${file}`);

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: () => void): Promise<any> {
    const url = req.baseUrl;
    if (url.indexOf(ROUTE_PREFIX) === 1) {
      next();
    } else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
      res.sendFile(resolvePath(url));
    } else {
      res.sendFile(resolvePath('index.html'));
    }
  }
}
