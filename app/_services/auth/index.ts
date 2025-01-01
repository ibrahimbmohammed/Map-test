import Api from '@/app/_lib/api';
import { ApiResponse } from '@/app/_lib/types/auth';

const AUTH_API_BASE = 'auth';

export interface UserEmail {
  email: string;
}
export interface VerifyOTP {
  email: string;
  code: string;
}

export interface PasswordResetCode {
  token: string;
}

export interface PasswordResetConfirm {
  password: string;
  token: string;
}
export interface UserAdditionalInfo {
  first_name: string;
  last_name: string;
  email: string;
  user_type: string;
  // password: string;
  // confirm_password: string;
}
export interface UserLoginData {
  email: string;
  password: string;
}

export interface RegisterUser {
  email: string;
  password: string;
  phone_number: string;
  full_name: string;
  profile: {
    has_trading_experience: boolean;
    ref_id: string;
    amount_range_to_trade_with: string;
  };
}

export const loginUser = async (data: UserLoginData) => {
  const res: ApiResponse = await Api.post(`${AUTH_API_BASE}/login/`, data);
  // await saveAuthToken(res?.data?.token);
  return res;
};

export const sendVerificationCode = async <T>(data: UserEmail): Promise<T> => {
  const res = await Api.post<T>(`${AUTH_API_BASE}/send-verification-code/`, data);
  return res;
};

export const sendPasswordResetCode = async <T>(data: UserEmail): Promise<T> => {
  const res = await Api.post<T>(`${AUTH_API_BASE}/password-reset/`, data);
  return res;
};

export const verifyUserEmail = async <T>(data: VerifyOTP): Promise<T> => {
  const res = await Api.post<T>(`${AUTH_API_BASE}/verify/`, data);
  return res;
};

export const validatePasswordResetCode = async <T>(data: PasswordResetCode): Promise<T> => {
  const res = await Api.post<T>(`${AUTH_API_BASE}/password-reset/validate-token/`, data);
  return res;
};

export const confirmPasswordReset = async <T>(data: PasswordResetConfirm): Promise<T> => {
  const res = await Api.post<T>(`${AUTH_API_BASE}/password-reset/confirm/`, data);
  return res;
};

export const registerUser = async <T>(data: RegisterUser): Promise<T> => {
  const res = await Api.post<T>(`${AUTH_API_BASE}/register/`, data);
  return res;
};

export const userAdditionalInfo = async <T>(data: UserAdditionalInfo): Promise<T> => {
  const res = await Api.put<T>(`${AUTH_API_BASE}/signup/`, data);
  return res;
};

export const getAllReciepients = async () => {
  const res = await Api.get(`${AUTH_API_BASE}/recipient`);
  return res;
};
