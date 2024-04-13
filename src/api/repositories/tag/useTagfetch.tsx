"use client";
import useSWR from "swr";
import { GETRequestFetcher } from "../../fetcher/SWRfetcher";

export const useFetchTagAllRepository = (
  group_id: number,
  issue_id: number
) => {
  const { data, error, isLoading } = useSWR(
    `/groups/${group_id}/issues/${issue_id}/tags`,
    GETRequestFetcher
  );
  return {
    tags: data,
    isLoading: isLoading,
    isError: error,
  };
};

export const useFetchTagByIdRepository = (
  group_id: number,
  issue_id: number,
  tag_id: number
) => {
  const { data, error, isLoading } = useSWR(
    `/groups/${group_id}/issues/${issue_id}/tags/${tag_id}`,
    GETRequestFetcher
  );
  return {
    tag: data,
    isLoading: isLoading,
    isError: error,
  };
};
