export type WorkExperience = {
  startDate: Date;
  endDate: Date | 'Currently working here';
  description: string;
  tags: Array<string>;
  company: string;
  role: string;
};
