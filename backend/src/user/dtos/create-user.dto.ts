/* eslint-disable prettier/prettier */
import { HttpStatus } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsEmail, IsString, IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly gender: string;

  @IsString()
  readonly phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsBoolean()
  readonly termsAndCondition: boolean;
}

export class CreateUserDto {
  status: HttpStatus

  @IsOptional()
  @IsString()
  message: string;

  @Type(() => UserDto)
  @IsOptional()
  user?: UserDto;
}