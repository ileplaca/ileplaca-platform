import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './modules/companies/companies.module';
import { SalariesDataModule } from './modules/salaries-data/salaries-data.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv'
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService?.get('POSTGRES_URL') || process.env.POSTGRES_URL,
        entities: [__dirname + './modules/**/*.entity.ts'],
        synchronize: true,
        ssl: {
          rejectUnauthorized: false
        }
      }),
    }),
    CompaniesModule,
    SalariesDataModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
