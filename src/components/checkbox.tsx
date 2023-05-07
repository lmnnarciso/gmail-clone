import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

const checkboxVariants = cva("p-4", {
  variants: {
    hover: {
      rounded: `
        content-[""]
        absolute
        top-[-7px] bottom-[-7px] right-[-7px] left-[-7px]
        w-[40px] h-[40px]
        transition-[opacity,transform] z-[1] 
        rounded-full
        opacity-[0]
        hover:opacity-[1]
        scale-[1]
        bg-hovered
        
        `,
    },
  },
});

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        `h-4 w-4 rounded-sm border-2 border-secondary-gray hover:border-primary-gray relative
          translate-y-[3px]
        after:content-[""]
        after:absolute
        after:top-[-14px] after:bottom-[-7px] after:right-[-7px] after:left-[-14px]
        after:w-[40px] after:h-[40px]
        after:transition-[opacity,transform] after:z-[1] 
        after:rounded-full
        after:opacity-[0]
        after:hover:opacity-[1]
        after:scale-[1]
       after:bg-hovered
        
        `,
        className
      )}
      // {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

export { Checkbox };
