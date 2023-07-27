import { Controller, Get, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Get('login')
  async login(@Res({ passthrough: true }) res) {
    const payload = { username: 'john', id: 1 };
    res.cookie('user_token', this.jwtService.sign(payload), {
      expires: new Date(Date.now() + 3600000),
    });
    return {};
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) res) {
    res.cookie('user_token', '', { expires: new Date(Date.now()) });
    return {};
  }
}
