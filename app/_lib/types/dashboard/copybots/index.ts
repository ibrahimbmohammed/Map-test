type Copier = {
  uuid: string;
  name: string;
  minInvestmentAmount: string;
  maxInvestmentAmount: string | null;
  performanceFee: string;
  overall: string;
  isActive: boolean;
  isTopPerforming: boolean;
};

export type CopiersResponse = {
  success: boolean;
  message: string;
  result: Copier[];
};

type BotInfo = {
  uuid: string;
  name: string;
  minInvestmentAmount: string;
  maxInvestmentAmount: string;
  performanceFee: string;
  overall: string;
  isActive: boolean;
  isTopPerforming: boolean;
};

type BotDescription = {
  bot: BotInfo;
  uuid: string;
  description: string;
};

export type BotDescriptionResponse = {
  success: boolean;
  message: string;
  result: BotDescription[];
};
