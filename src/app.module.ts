import { Module } from '@nestjs/common';
import { GoogleAuthModule } from './google-auth/google-auth.module';
import { ConfigModule } from '@nestjs/config';

import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      cache: process.env.NODE_ENV === 'production',
      load: [configuration],
    }),
    GoogleAuthModule.forRoot(/* how to pass values from ConfigModule here? */),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
