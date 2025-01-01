type Video = {
  uuid: string;
  title: string;
  description: string;
  videoLink: string;
  thumbnail: string | null;
};

export type VideosResponse = {
  success: boolean;
  message: string;
  result: Video[];
};
