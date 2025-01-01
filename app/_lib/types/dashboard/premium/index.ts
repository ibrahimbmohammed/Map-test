type Promo = {
  uuid: string;
  name: string;
};

type PremiumPlan = {
  promos: Promo[];
  uuid: string;
  name: string;
  yearlyPrice: string;
  description: string;
  isActive: boolean;
  isSpecial: boolean;
  buttonCta: string | null;
};

export type PremiumPlansResponse = {
  success: boolean;
  message: string;
  result: PremiumPlan[];
};
