import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { JwtTokenService } from 'src/shared/jwt.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userModel } from 'src/user/user.model';

@Module({
  imports: [
    // eslint-disable-next-line prettier/prettier
    MongooseModule.forFeature([{name: User.name, schema: userModel}])
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtTokenService],
})
export class AuthModule {}
