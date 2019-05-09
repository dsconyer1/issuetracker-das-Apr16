
export interface DefectListItem {
  id: string;
  title: string;
  dateSubmitted: Date;
  description: string;
  status: string;
  developerId?: string;
  fixCommit: string;
}
