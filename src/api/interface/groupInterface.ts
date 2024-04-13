export interface fetchGroupResponse {
  group_id: number;
  group_name: string;
}

export interface CreateGroupRequest {
  group_name: string;
}

export interface UpdateGroupRequest {
  group_name: string;
}
