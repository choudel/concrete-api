import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(params): string {
    return 'Hello World!'+params.id;
  }
}
