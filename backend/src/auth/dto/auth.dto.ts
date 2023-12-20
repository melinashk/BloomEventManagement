/* eslint-disable prettier/prettier */
import { HttpStatus } from '@nestjs/common';
import { IsString, IsNotEmpty } from 'class-validator';

export class Token {
  status: HttpStatus
  
  @IsString()
  @IsNotEmpty()
  readonly accessToken: string;

  @IsString()
  @IsNotEmpty()
  readonly refreshToken: string;
}

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
