type Tech = {
  name: string;
  iconUrl: string;
};

export type Work = {
  title: string;
  url: string;
  imgSrc: {
    url: string;
  };
  description: string;
  techStack: Array<Tech>;
  isTeam: boolean;
  type: string;
};
