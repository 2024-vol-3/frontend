// /usersのGETリクエストで返ってくるデータの型
export interface fetchTagResponse {
  tag_id: number;
  tag_count: number;
}

// /usersのPOSTリクエストで返ってくるデータの型
export interface UpdateTagRequest {
  tag_count: number;
}
