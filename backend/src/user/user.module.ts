import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userModel } from './user.model';
import { AuthService } from 'src/auth/auth.service';
import { JwtTokenService } from 'src/shared/jwt.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userModel }]),
  ],
  providers: [UserService, AuthService, JwtTokenService],
  controllers: [UserController],
})
export class UserModule {}
