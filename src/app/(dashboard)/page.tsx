import { UserButton } from "@clerk/nextjs";

type DashboardPageProps = {};

const DashboardPage = ({}: DashboardPageProps) => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
