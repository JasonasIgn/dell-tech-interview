import { apiRoutes } from "config";
import { useEffect, useState } from "react";
import { User } from "types";
import { UsersSortParams } from "./types";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const getUsers = async () => {
    const response = await fetch(apiRoutes.getUsers);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { users, setUsers };
};

export const useOrderedUsers = (users: User[], params: UsersSortParams) => {
  return users.sort((a, b) => a.name.localeCompare(b.name));
};
