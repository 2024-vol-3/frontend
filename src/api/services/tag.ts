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
export const useFetchUserAllService = () => {
  return useFetchUserAllRepository();
};

export const useFetchUserByIdService = (user_id: number) => {
  return useFetchUserByIdRepository(user_id);
};

export const useCreateUserService = async (
  user_id: number | null,
  new_user: CreateUserRequest
) => {
  const user = await useFetchUserByIdRepository(user_id!);
  if (user.user) {
    return createUserRepository(new_user);
  }
  return;
};

export const useUpdateUserService = async (
  user_id: number,
  user: UpdateUserRequest
) => {
  return updateUserRepository(user_id, user);
};

export const useDeleteUserService = async (user_id: number) => {
  return deleteUserRepository(user_id);
};
