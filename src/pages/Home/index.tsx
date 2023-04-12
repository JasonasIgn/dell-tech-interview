import { Header } from "components/Header/Header";
import { Route, Switch } from "react-router-dom";
import { appRoutes } from "config";
import { UsersPage } from "pages/Users";
import { NewUserPage } from "pages/NewUser";
import { useOrderedUsers, useUsers } from "./hooks";
import { useState } from "react";
import { UsersSortParams } from "./types";

export const HomePage = () => {
  const [sortParams] = useState<UsersSortParams>({
    type: "name",
    order: "desc",
  });
  const { users, setUsers } = useUsers();
  const orderedUsers = useOrderedUsers(users, sortParams);
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route
          path={appRoutes.users}
          exact
          render={() => <UsersPage users={orderedUsers} />}
        />
        <Route
          path={appRoutes.newUser}
          exact
          render={() => <NewUserPage users={users} setUsers={setUsers} />}
        />
      </Switch>
    </div>
  );
};
