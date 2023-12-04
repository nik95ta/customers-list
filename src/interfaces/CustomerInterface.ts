import { ProjectInterface } from '../interfaces';

export interface CustomerInterface {
  id: string;
  isActive: boolean;
  company: string;
  industry: string;
  projects: ProjectInterface[];
  about: string;
}
