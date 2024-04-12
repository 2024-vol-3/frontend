import {
  CreateUserRequest,
  UpdateUserRequest,
} from "../interface/userInterface";

import {
  useFetchUserByIdRepository,
  useFetchUserAllRepository,
} from "../repositories/user/useUserfetch";

import {
  createUserRepository,
  updateUserRepository,
  deleteUserRepository,
} from "../repositories/user/user";
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
