export type work = {
  title: string;
  url: string;
  imgSrc: string;
  description: string;
  techStack: Array<string> /*deviconのurlにそのまま変換するため、devicon上の名前を参照する*/;
  isTeam: boolean;
  type: string;
};