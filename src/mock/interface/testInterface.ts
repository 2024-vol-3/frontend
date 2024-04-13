// /usersのGETリクエストで返ってくるデータの型
export interface fetchIssueResponse {
  issue_id: number;
  title: string;
  contents: string;
  paper_num: number;
}

export interface fetchGroupResponse {
  group_id: number;
  group_name: string;
  group_description: string;
  issue_count: number;
}
