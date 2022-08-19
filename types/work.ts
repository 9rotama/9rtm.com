export type tech = {
  tech: string;
}

export type work = {
  title: string;
  url: string;
  imgSrc: {
    url: string
  };
  description: string;
  techStack: Array<tech> /*deviconのurlにそのまま変換するため、devicon上の名前を参照する*/;
  isTeam: boolean;
  type: string;
};