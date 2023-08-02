import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { registerService } from './Services/Manager.Service';
import { ManagerDto } from '../../Login/Dto/ManagerRegisterDto';
import { Response } from 'express';

@Controller('Hr')
export class RegisterController {
  constructor(private RegisterService: registerService) {}
  @Post('Register')
  async postRegiseter(@Body() Manager: ManagerDto, @Res() res: Response) {
    const Response = await this.RegisterService.AddManager(Manager);
    return res.json({
      success: Response.success,
      message: Response.message,
      list: Response.list,
    });
  }
  @Get('GetManager')
  async getmanager(@Res() res: Response) {
    const response = await this.RegisterService.Getmanager();
    return res.json({ success: true, data: response });
  }
}
