import { MainLayout } from "components/Layouts/MainLayout";
import { UsersTable } from "./UsersTable";

export const UsersPage = () => {
  return (
    <MainLayout heading="User Profile">
      <UsersTable />
    </MainLayout>
  );
};
