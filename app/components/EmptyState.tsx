"use client";
import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}
const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Empty State",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div className="h-screen">
    <div
      className=" 
        h-[60vh]
        flex 
        flex-col
        gap-2
        justify-center
        items-center
        "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4  ">
        {showReset && (
          <Button
            outline
            label="Choose different category"
            onClick={() => router.push("/categories")}
          />
        )}
 
      </div>
    </div>
    </div>
  );
};

export default EmptyState;
