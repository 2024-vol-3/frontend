"use client";
import useSWR from "swr";
import { GETRequestFetcher } from "../../fetcher/SWRfetcher";

export const useFetchDayByIdRepository = (
  group_id: number,
  issue_id: number,
  tag_id: number,
  day_id: number
) => {
  const { data, error, isLoading } = useSWR(
    `/groups/${group_id}/issues/${issue_id}/tags/${tag_id}/days/${day_id}`,
    GETRequestFetcher
  );
  return {
    day: data,
    isLoading: isLoading,
    isError: error,
  };
};
