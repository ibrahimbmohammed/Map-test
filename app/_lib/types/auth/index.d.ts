export type ApiResponse = {
  data: {
    success: boolean;
    message: string;
    result: {
      user: {
        username: string;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
      };
      tokens: {
        refresh: string;
        access: string;
      };
    };
  };
  status: number;
  statusText: string;
  headers: {
    [key: string]: string;
  };
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: string;
    transformRequest: null[];
    transformResponse: null[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: {};
    headers: {
      Accept: string;
      'Content-Type': string;
    };
    baseURL: string;
    method: string;
    url: string;
    data: string;
  };
  request: {};
};
