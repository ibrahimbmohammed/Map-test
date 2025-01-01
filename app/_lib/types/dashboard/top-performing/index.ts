type BotInfo = {
  uuid: string;
  name: string;
  minInvestmentAmount: string;
  maxInvestmentAmount: string | null;
  performanceFee: string;
  overall: string;
  isActive: boolean;
  isTopPerforming: boolean;
};

export type BotListing = {
  bot: BotInfo;
  uuid: string;
  description: string;
  price: string;
  period: string;
};

export type BotListingResponse = {
  success: boolean;
  message: string;
  result: BotListing[];
};
