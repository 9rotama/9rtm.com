type Tech = {
  name: string;
  icon: string;
};

export type Work = {
  title: string;
  url: string;
  date: Date;
  screenshot: string;
  description: string;
  techStack: Array<Tech>;
  isTeam: boolean;
};
