import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "xl";
}

export const CTAButton = ({ children, className, size = "lg" }: CTAButtonProps) => {
  const handleClick = () => {
    window.open('https://api.whatsapp.com/send?phone=34674565394&text=Me%20interesa%20saber%20m%C3%A1s...', '_blank');
  };

  const sizeClasses = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg"
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "bg-restaurant-red hover:bg-restaurant-red-hover text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Button>
  );
};