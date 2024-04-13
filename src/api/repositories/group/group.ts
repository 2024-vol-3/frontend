import {
  CreateGroupRequest,
  UpdateGroupRequest,
} from "@/api/interface/groupInterface";

export const createGroupRepository = async (group: CreateGroupRequest) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/groups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(group),
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateGroupRepository = async (
  group: UpdateGroupRequest,
  group_id: number
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/groups/${group_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(group),
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const deleteGroupRepository = async (group_id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/groups/${group_id}`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    console.error(error);
  }
};
