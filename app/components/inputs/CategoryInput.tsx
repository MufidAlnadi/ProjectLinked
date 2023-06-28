import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  name: string;
  selected?: boolean;
  onClick: (value: string) => void;
}
 
const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  name,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(name)}
      className={`rounded-xl border-2  border-solid p-4 flex flex-col items-center justify-center gap-3 hover:border-blue-500 transition cursor-pointer justify-items 
    ${selected ? "border-blue-500" : "border-neutral-300"}
  `}
    >
      <Icon size={30} />
      <div className="font-semibold">{name}</div>
    </div>
  );
};
 
export default CategoryInput;