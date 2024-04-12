// /usersのGETリクエストで返ってくるデータの型
export interface fetchUserResponse {
  user_id: number;
  user_name: string;
  user_icon: string;
}

// /usersのPOSTリクエストで送るデータの型
export interface CreateUserRequest {
  user_name: string;
  user_icon: string;
}

// /usersのPOSTリクエストで返ってくるデータの型
export interface UpdateUserRequest {
  user_name: string;
  user_icon: string;
}
