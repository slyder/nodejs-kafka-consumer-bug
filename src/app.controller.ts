import { Controller, UseInterceptors } from '@nestjs/common';
import { MessagePattern, Payload } from "@nestjs/microservices";
import { AppService } from './app.service';
import { LoggingInterceptor } from './logging.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('test-topic')
  // @UseInterceptors(LoggingInterceptor)
  async getHello(@Payload() message) {
    console.log(`>>>>>>`)
    // const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
    // console.log(`- ${prefix} ${message.key}#${message.value}`)
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(`<<<<`)
    // console.log(message.value);
    return 'Hello World';
  }
}
