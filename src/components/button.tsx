import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

const buttonVariants = cva(
  "hover:bg-input hover:bg-input p-3 rounded-md relative",
  {
    variants: {
      variant: {
        rounded: "rounded-full",
      },
      buttonType: {
        icon: `
        [&_svg]:w-[20px]
        [&_svg]:h-[20px]
        `,
      },
      hover: {
        rounded: `
        hover:bg-transparent
        after:content-[""]
        after:block after:absolute 
        after:transition-[opacity,transform] after:z-[1] 
        after:top-[-10px] after:bottom-[-10px] after:left-[-10px] after:rounded-full
        after:w-[40px] after:h-[40px]
        after:opacity-[0]
        after:scale-[0]
        hover:after:opacity-[1]
        hover:after:scale-[1]
        hover:after:bg-hovered
  `,
        "rounded-dark": `
        bg-white
        hover:bg-transparent
        after:content-[""]
        after:block after:absolute 
        after:transition-[opacity,transform] after:z-[1] 
        after:top-[-12px] after:bottom-[-12px] after:left-[-12px] after:rounded-full
        after:w-[40px] after:h-[40px]
        after:opacity-[0]
        after:scale-[0]
        hover:after:opacity-[1]
        hover:after:scale-[1]
        hover:after:bg-hovered-dark`,
      },
      size: {
        sm: "p-0",
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, hover, buttonType, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, hover, buttonType }))}
        {...props}
      />
    );
  }
);

export { Button };
