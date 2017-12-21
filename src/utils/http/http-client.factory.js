import { AuthorizedHttpClient } from "./authorized-http.client";
import { UnAuthorizedHttpClient } from "./unauthorized-http.client";

export class HttpClientFactory {

  /**
   * Create an instance of authorized http client
   */
  static createAuthorizedHttpClient = () => {
    return new AuthorizedHttpClient();
  };

  /**
   * Create an instance of unauthorized http client
   */
  static createUnAuthorizedHttpClient = () => {
    return new UnAuthorizedHttpClient();
  };

}
