import {
  CreateIssueRequest,
  UpdateIssueRequest,
} from "@/api/interface/issueInterface";

export const createIssueRepository = async (
  issue: CreateIssueRequest,
  group_id: number
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/groups/${group_id}/issues`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(issue),
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const updateIssueRepository = async (
  issue: UpdateIssueRequest,
  group_id: number,
  issue_id: number
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/groups/${group_id}/issues/${issue_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(issue),
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const deleteIssueRepository = async (
  group_id: number,
  issue_id: number
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/groups/${group_id}/issue/${issue_id}`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    console.error(error);
  }
};
