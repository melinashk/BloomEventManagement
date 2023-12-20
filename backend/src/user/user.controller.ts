/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { UserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService) {}

  @Post('/signup')
  async createUser(@Body() user: UserDto) {
    return await this.userService.createUserService(user);                                                                    
  }
}
