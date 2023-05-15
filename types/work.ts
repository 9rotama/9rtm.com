export type tech = {
  tech: string;
};

export type work = {
  title: string;
  url: string;
  imgSrc: {
    url: string; //オブジェクトからurlのみ受け取る
  };
  description: string;
  techStack: Array<tech>; //アイコンのURL(文字列)の配列
  isTeam: boolean;
  type: string;
};
