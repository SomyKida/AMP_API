import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { AuthServiceConfig } from "angularx-social-login";
import { ConstantsService } from 'src/app/init/constants.service';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(new ConstantsService().googleClientId)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(new ConstantsService().fbAppId)
  },
]);

export function provideConfig() {
  return config;
}
