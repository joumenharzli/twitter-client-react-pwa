import { HttpClientFactory } from '../../../utils/http/http-client.factory';

/* https://dev.twitter.com/web/sign-in/implementing */
export class LoginService {

  constructor() {
    this.http = HttpClientFactory.createUnAuthorizedHttpClient();
  }

  getRequestToken = () => {
    return this.http.post('https://api.twitter.com/oauth/request_token');
  }

}
