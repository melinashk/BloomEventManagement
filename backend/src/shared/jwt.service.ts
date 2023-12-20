/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtTokenService {
  constructor(
    private jwtService: JwtService
  ){}

  async refreshTokenService(user) {
    const payload = { sub: user.userId, username: user.email };
    const refreshToken = await this.jwtService.signAsync(payload, { expiresIn: '7d'})
    return refreshToken
  }

  async accessTokenService(user) {
    const payload = { sub: user.userId, username: user.email };
    const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '7d'})
    return accessToken
  }
}