import { ajax } from "rxjs";

export class AuthorizedHttpClient {
  get = url => {
    return ajax({ method: "GET" });
  };

  post = url => {
    return ajax({ method: "POST" });
  };
}
