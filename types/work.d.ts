type Tech = {
  name: string;
  icon: Image;
};

export type Work = {
  title: string;
  url: string;
  screenshot: Image;
  description: string;
  techStack: Array<Tech>;
  isTeam: boolean;
  type: string;
};
