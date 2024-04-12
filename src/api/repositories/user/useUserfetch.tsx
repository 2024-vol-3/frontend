"use client";
import useSWR from "swr";
import { GETRequestFetcher } from "../../fetcher/SWRfetcher";
import type {
  CreateUserRequest,
  fetchUserResponse,
  UpdateUserRequest,
} from "../../interface/userInterface";

export const useFetchUserAllRepository = () => {
  const { data, error, isLoading } = useSWR("/users", GETRequestFetcher);
  return {
    user: data,
    isLoading: isLoading,
    isError: error,
  };
};

export const useFetchUserByIdRepository = (user_id: number) => {
  const { data, error, isLoading } = useSWR(
    `/users/${user_id}`,
    GETRequestFetcher
  );
  return {
    user: data,
    isLoading: isLoading,
    isError: error,
  };
};
