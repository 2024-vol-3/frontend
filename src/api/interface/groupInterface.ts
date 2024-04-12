export interface fetchGroupResponse {
  group_id: number;
  group_name: string;
  group_icon: string;
}

export interface CreateGroupRequest {
  group_name: string;
  group_icon: string;
}

export interface UpdateGroupRequest {
  group_name: string;
  group_icon: string;
}
