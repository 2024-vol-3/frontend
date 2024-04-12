"use client";
import useSWR from "swr";
import {
  GETRequestFetcher,
  POSTRequestFetcher,
} from "../api/fetcher/SWRfetcher";
import type {
  CreateUserRequest,
  fetchUserResponse,
  UpdateUserRequest,
} from "./interface/userInterface";

export const useFetchUserAll = () => {
  const { data, error, isLoading } = useSWR("/users", GETRequestFetcher);
  return {
    user: data,
    isLoading: isLoading,
    isError: error,
  };
};

export const useFetchUserById = (user_id: number) => {
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

export const useFetchUserByGroupId = (
  group_id: number,
  body: CreateUserRequest
) => {
  const { data, error, isLoading } = useSWR(
    `/users/group/${group_id}`,
    POSTRequestFetcher
  );
  return {
    user: data,
    isLoading: isLoading,
    isError: error,
  };
};
