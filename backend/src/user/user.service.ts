/* eslint-disable prettier/prettier */
import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { User } from './user.model';
import { CreateUserDto, UserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUserService(data: UserDto):Promise<CreateUserDto> {
    try {
      // Check if a user email already exists
      const existingUser = await this.findUserByEmailService(data.email)
  
      if (!existingUser) {
        // Hashing password
        const hashedPassword = await bcrypt.hash(data.password, 8);
    
        const createdUser = new this.userModel({
          ...data,
          password: hashedPassword,
        });

        await createdUser.save()

        return {
          status: HttpStatus.CREATED,
          message: "User created successfully",
          user: createdUser.toObject()
        }
      } else {
        throw new BadRequestException("Email already exists.")
      }
    } catch (error) {
     console.log({error})
      return {
        status: HttpStatus.BAD_REQUEST,
        message: error.message
      }
    }
  }

  async findUserByEmailService(email) {
    console.log({email})
    const userExists = await this.userModel.findOne({email: email})
    console.log({userExists})
    return userExists
  }
  
}
