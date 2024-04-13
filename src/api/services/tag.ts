import { CreateTagRequest, UpdateTagRequest } from "../interface/tagInterface";

import {
  useFetchTagByIdRepository,
  useFetchTagAllRepository,
} from "../repositories/tag/useTagfetch";

import {
  createTagRepository,
  updateTagRepository,
  deleteTagRepository,
} from "../repositories/tag/tag";
export const useFetchUserAllService = (group_id: number, issue_id: number) => {
  return useFetchTagAllRepository(group_id, issue_id);
};

export const useFetchUserByIdService = (
  tag_id: number,
  group_id: number,
  issue_id: number
) => {
  return useFetchTagByIdRepository(tag_id, group_id, issue_id);
};

export const useUpdateUserService = async (
  tag_id: number,
  tag_count: UpdateTagRequest
) => {
  return updateTagRepository(tag_id);
};

export const useDeleteUserService = async (user_id: number) => {
  return deleteTagRepository(user_id);
};
