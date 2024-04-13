import { UpdateTagRequest } from "@/api/interface/tagInterface";

export const updateTagRepository = async (
  tag_id: number,
  tag: UpdateTagRequest,
  group_id: number,
  issue_id: number
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/groups/${group_id}/issues/${issue_id}/tags/${tag_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tag),
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const deleteTagRepository = async (
  tag_id: number,
  group_id: number,
  issue_id: number
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/groups/${group_id}/issues/${issue_id}/tags/${tag_id}`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    console.error(error);
  }
};
