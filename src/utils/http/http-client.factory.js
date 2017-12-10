import { AuthorizedHttpClient } from "./authorized-http.client";
import { UnAuthorizedHttpClient } from "./unauthorized-http.client";

export class HttpClientFactory {
  createAuthorizedHttpClient = () => {
    return new AuthorizedHttpClient();
  };

  createUnAuthorizedHttpClient = () => {
    return new UnAuthorizedHttpClient();
  };
}
