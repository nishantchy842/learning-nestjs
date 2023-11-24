import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUser(userId) {
    return {
      name: 'Nishant chaudhary',
      email: 'nishantchaudhary842@gmail.com',
      ...userId,
    };
  }
}
