import { Controller, Get } from '@nestjs/common';

@Controller('cafes')
export class CafesController {
  
  @Get()
  get() {
    return 'cafes '
  }
}
