type Webinar = {
  uuid: string;
  name: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
};

export type ApiResponseForWebinar = {
  success: boolean;
  message: string;
  result: Webinar[];
};
