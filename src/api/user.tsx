"use client";
import useSWR from "swr";
import { GETRequestFetcher } from "../api/fetcher/SWRfetcher";
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

export const useCreateUser = async (user: CreateUserRequest) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    console.error(error);
  }
};

export const useUpdateUser = async (
  user_id: number,
  user: UpdateUserRequest
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/${user_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const useDeleteUser = async (user_id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/${user_id}`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    console.error(error);
  }
};
