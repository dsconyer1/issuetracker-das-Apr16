import { DeveloperListItem } from './developers';

export interface DefectListItem {
  id: string;
  title: string;
  dateSubmitted: Date;
  description: string;
  status: string;
  developerId?: DeveloperListItem;
  fixCommit: string;
}
