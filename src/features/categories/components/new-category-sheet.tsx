import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useNewCategory } from "@/features/categories/hooks/use-new-category";
import { CategoryForm } from "./category-form";
import { insertCategorySchema } from "@/db/schema";
import { z } from "zod";
import { useCreateCategory } from "@/features/categories/api/use-create-category";

type NewCategorySheetProps = {};

const formSchema = insertCategorySchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

export const NewCategorySheet = ({}: NewCategorySheetProps) => {
  const { isOpen, onClose } = useNewCategory();
  const mutation = useCreateCategory();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Category</SheetTitle>
          <SheetDescription>
            Create a new category to track your transactions.
          </SheetDescription>
        </SheetHeader>

        <CategoryForm
          onSubmit={onSubmit}
          disabled={mutation.isPending}
          defaultValue={{ name: "" }}
        />
      </SheetContent>
    </Sheet>
  );
};
