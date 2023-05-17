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
  techStack: Array<Tech>; //アイコンのURL(文字列)の配列
  isTeam: boolean;
  type: string;
};
