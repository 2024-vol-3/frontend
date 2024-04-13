"use client";
import useSWR from "swr";
import { GETRequestFetcher } from "../../fetcher/SWRfetcher";

export const useFetchIssueAllRepository = (group_id: number) => {
  const { data, error, isLoading } = useSWR(
    `/groups/${group_id}/issues`,
    GETRequestFetcher
  );
  return {
    issues: data,
    isLoading: isLoading,
    isError: error,
  };
};

export const useFetchIssueByIdRepository = (
  group_id: number,
  issue_id: number
) => {
  const { data, error, isLoading } = useSWR(
    `/groups/${group_id}/issues/${issue_id}`,
    GETRequestFetcher
  );
  return {
    issue: data,
    isLoading: isLoading,
    isError: error,
  };
};
