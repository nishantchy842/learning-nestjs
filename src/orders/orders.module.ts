import { Module } from '@nestjs/common';
import { Feature1Module } from 'src/feature1/feature1.module';

@Module({
  imports: [Feature1Module],
})
export class OrdersModule {
  constructor() {
    console.log('order module');
  }
}
