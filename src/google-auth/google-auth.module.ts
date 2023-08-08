import { DynamicModule, Module, Provider } from '@nestjs/common';
import { Auth, google } from 'googleapis';

@Module({})
export class GoogleAuthModule {
  static forRoot(options: Auth.GoogleAuthOptions): DynamicModule {
    const auth: Auth.GoogleAuth = new google.auth.GoogleAuth(options);

    const authProvider: Provider = {
      provide: 'GOOGLE_AUTH',
      useValue: auth,
    };

    return {
      module: GoogleAuthModule,
      providers: [authProvider],
      exports: [authProvider],
    };
  }
}
