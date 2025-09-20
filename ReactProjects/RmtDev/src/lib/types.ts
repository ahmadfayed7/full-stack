type jobItem = {
  id: number;
  title: string;
  badgeLetters: string;
  company: string;
  relevanceScore: number;
  daysAgo: number;
};
type jobItemExtended = jobItem & {
companyURL: string;
coverImgURL : string;
description: string;
duration: string;
location: string;
qualifications: string[];
relevanceScore: number;
reviews:string[];
salary: string;
}
export type { jobItem ,jobItemExtended};