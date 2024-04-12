// /usersのGETリクエストで返ってくるデータの型
export interface fetchIssueResponse {
  issue_id: number;
  title: string;
  contents: string;
  day_fragment: boolean;
}

// /usersのPOSTリクエストで送るデータの型
export interface CreateIssueRequest {
  title: string;
  contents: string;
  day_fragment: boolean;
}

// /usersのPOSTリクエストで返ってくるデータの型
export interface UpdateIssueRequest {
  title: string;
  contents: string;
  day_fragment: boolean;
}
