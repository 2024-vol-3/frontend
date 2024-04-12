import {
  CreateUserRequest,
  UpdateUserRequest,
} from "@/api/interface/userInterface";

export const createUserRepository = async (user: CreateUserRequest) => {
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

export const updateUserRepository = async (
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

export const deleteUserRepository = async (user_id: number) => {
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
