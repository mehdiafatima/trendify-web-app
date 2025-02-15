import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: Props) => {
  return (
    <h2 className={cn("text-2xl font-semibold mt-8", className)}>{children}</h2>
  );
};

export default Title;