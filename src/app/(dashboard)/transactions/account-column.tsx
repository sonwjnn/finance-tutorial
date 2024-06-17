import { cn } from "@/lib/utils";
import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

type AccountColumnProps = {
  id: string;
  account: string;
  accountId: string;
};

export const AccountColumn = ({
  id,
  account,
  accountId,
}: AccountColumnProps) => {
  const { onOpen: onOpenAccount } = useOpenAccount();

  const onClick = () => {
    onOpenAccount(accountId);
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center cursor-pointer hover:underline"
    >
      {account}
    </div>
  );
};
