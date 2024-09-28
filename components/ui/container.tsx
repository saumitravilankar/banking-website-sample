import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`${cn("mx-auto max-w-7xl max-2xl:px-6", className)}`}>{children}</div>
  );
};

export default Container;
