import EditCategoryForm from "@/components/DashboardComponents/CategoriesTable/EditCategoryForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalle Categoría",
};

export default async function CategoryDetailPage({ params }) {
  const { id } = await params;
  return (
    <div>
      <EditCategoryForm categoryId={id} />
    </div>
  );
}
