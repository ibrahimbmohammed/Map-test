import Api from '@/app/_lib/api';

const TRADING_API_BASE = 'trading';

export interface Post {
  path: string;
}
export interface VerifyOtp {
  path: string;
  code: string;
}

export type ScheduleData = {
  name: string;
  email: string;
  phone_number: string;
  schedule_date: string;
  schedule_time: string;
  country: string;
  trading_capital_amount: string;
  has_trading_experience: boolean | string;
  previously_used_forex_broker: string;
};
export type HelpData = {
  name: string;
  email: string;
  message: string;
};

export type UpgradePaymentRequest = {
  subscription_plan_uuid: string;
};

const getAllTradingBots = async () => {
  const res = await Api.get(`${TRADING_API_BASE}/bots/`);
  return (res as any)?.data;
};
const getAllTradingBotsDetails = async () => {
  const res = await Api.get(`${TRADING_API_BASE}/copy-trading-guide/`);
  return (res as any)?.data;
};
const getSingleBots = async (uuid: string) => {
  const res = await Api.get(`${TRADING_API_BASE}/bots/${uuid}/`);
  return res;
};
const getCopyTradingGuide = async () => {
  const res = await Api.get(`${TRADING_API_BASE}/copy-trading-guide/`);
  return res;
};
const getSingleCopyTradingGuide = async (uuid: string) => {
  const res = await Api.get(`${TRADING_API_BASE}/copy-trading-guide/${uuid}/`);
  return res;
};
const getTradingSubscription = async () => {
  const res = await Api.get(`${TRADING_API_BASE}/subscription-plans/`);
  return (res as any)?.data;
};
const getAllBotsInLab = async () => {
  const res = await Api.get(`${TRADING_API_BASE}/bot-lab-bots/`);
  return (res as any)?.data;
};
const getTopPerforming = async () => {
  const res = await Api.get(`${TRADING_API_BASE}/top-performing-bots/`);
  return (res as any)?.data;
};
const getSingleTradingSubscription = async (uuid: string) => {
  const res = await Api.get(`${TRADING_API_BASE}/subscription-plans/${uuid}/`);
  return res;
};
const postScreeningInfo = async (post: ScheduleData) => {
  const res = await Api.post(`${TRADING_API_BASE}/account-screening-request/`, post);
  return (res as any)?.data;
};
const postHelpSupport = async (post: HelpData) => {
  const res = await Api.post(`${TRADING_API_BASE}/help-support-request/`, post);
  return (res as any)?.data;
};
const postUpgradePaymentRequest = async (post: UpgradePaymentRequest) => {
  const res = await Api.post(`${TRADING_API_BASE}/account-upgrade-payment-request/`, post);
  return (res as any)?.data;
};
const checkAccountScreeningRequestApproval = async () => {
  const res = await Api.get(`${TRADING_API_BASE}/check-account-screening-request-approval/`);
  return (res as any)?.data;
};

export {
  getAllTradingBots,
  getSingleBots,
  getCopyTradingGuide,
  getSingleCopyTradingGuide,
  getTradingSubscription,
  getSingleTradingSubscription,
  postScreeningInfo,
  postHelpSupport,
  getAllBotsInLab,
  getTopPerforming,
  getAllTradingBotsDetails,
  postUpgradePaymentRequest,
  checkAccountScreeningRequestApproval,
};
