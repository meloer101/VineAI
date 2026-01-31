import blackArrow from "@/assets/blackArrow.svg";
import whitearrow from "@/assets/whitearrow.svg";

interface ArrowDownProps {
  variant?: "white" | "black";
  className?: string;
}

export default function ArrowDown({ variant = "white", className = "" }: ArrowDownProps) {
  return (
    <img
      src={variant === "white" ? whitearrow : blackArrow}
      alt=""
      className={`h-8 w-auto object-contain md:h-10 ${className}`}
    />
  );
}
