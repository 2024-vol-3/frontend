"use client";
import useSWR from "swr";
import { GETRequestFetcher } from "../../fetcher/SWRfetcher";

export const useFetchGroupAllRepository = () => {
  const { data, error, isLoading } = useSWR("/groups", GETRequestFetcher);
  return {
    groups: data,
    isLoading: isLoading,
    isError: error,
  };
};

export const useFetchGroupByIdRepository = (group_id: number) => {
  const { data, error, isLoading } = useSWR(
    `/groups/${group_id}`,
    GETRequestFetcher
  );
  return {
    group: data,
    isLoading: isLoading,
    isError: error,
  };
};
