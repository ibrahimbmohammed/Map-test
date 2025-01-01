import Api from '@/app/_lib/api';
import { ApiResponse } from '@/app/_lib/types/auth';

const EDUCATION_API_BASE = 'education';

export interface Post {
  path: string;
}
export interface VerifyOtp {
  path: string;
  code: string;
}

const getAllAcademyVideos = async () => {
  const res: ApiResponse = await Api.get(`${EDUCATION_API_BASE}/academy-video/`);
  return res?.data;
};
const getSingleAcademyVideos = async (uuid: string) => {
  const res = await Api.get(`${EDUCATION_API_BASE}/academy-video/${uuid}/`);
  return res;
};
const getAllAcademyWebinars = async () => {
  const res = await Api.get(`${EDUCATION_API_BASE}/webinar/`);
  return res;
};
const getSingleAcademyWebinars = async (uuid: string) => {
  const res = await Api.get(`${EDUCATION_API_BASE}/webinar/${uuid}/`);
  return res;
};
export {
  getAllAcademyVideos,
  getSingleAcademyVideos,
  getAllAcademyWebinars,
  getSingleAcademyWebinars,
};
