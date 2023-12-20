/* eslint-disable prettier/prettier */
import { NotFoundException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { JwtTokenService } from 'src/shared/jwt.service';
import { Token } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtTokenService: JwtTokenService
  ){}

  async loginService(data): Promise<Token> {
    console.log(data.email, data.password)
    const user = await this.userService.findUserByEmailService(data.email)
    console.log({user})
    if(!user) {
      throw new NotFoundException("User not found.")
    }

    const isMatch = await bcrypt.compare(data.password, user.password);
    if(!isMatch) {
      throw new NotFoundException("User or Password incorrect.")
    }

    const refreshToken = await this.jwtTokenService.refreshTokenService(user)
    const accessToken = await this.jwtTokenService.refreshTokenService(user)

    return {
      status:HttpStatus.ACCEPTED, 
      refreshToken, 
      accessToken }
  }
}
