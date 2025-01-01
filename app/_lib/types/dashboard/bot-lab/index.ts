export type BotLabData = {
  uuid: string;
  name: string;
  nameOfBroker: string;
  serverName: string;
  investorLogin: string;
  investorPassword: string;
  terminal: string;
  testCommencementDate: string; // You might want to use a Date type if it represents a date
  isDelisted: boolean;
};

export type BotlabResponse = {
  success: boolean;
  message: string;
  result: BotLabData[];
};
