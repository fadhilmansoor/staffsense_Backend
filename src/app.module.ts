import { MongooseModule } from '@nestjs/mongoose';
import { workers } from './Infrastucture/Database/Schema/Workers';
import { LoginModule } from './Infrastucture/Core/Login/Module/Login/Login.module';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { RegisterModule } from './Infrastucture/Core/HR/Module/HR.Module';
import { HrVerifyMiddleware } from './Infrastucture/Core/HR/Middillewire/Hr.middlewire';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { mongooseMiddlewareRepository } from './Infrastucture/Database/Repositers/moongoose.middlewire';
// import User from './Domain/Enitity/User.Enitiy';
dotenv.config();
const MONGO_SECRET_KEY = process.env.MONGO_SECRET_KEY;

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_SECRET_KEY),
    MongooseModule.forFeature([
      {
        name: 'Workers',
        schema: workers,
      },
    ]),
    RegisterModule,

    LoginModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [mongooseMiddlewareRepository],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HrVerifyMiddleware).forRoutes('Hr');
  }
}
