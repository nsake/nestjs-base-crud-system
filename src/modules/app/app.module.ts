import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { typeormUseFactory } from 'src/infrastructure/config/typeorm';
import { configuration } from 'src/infrastructure/config/configuration';
import { NewsModule } from '../news/news.module';
import { LanguageModule } from '../languages/languages.module';
import { UsersModule } from '../users /users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: typeormUseFactory,
      inject: [ConfigService],
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),

    NewsModule,
    UsersModule,
    LanguageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
