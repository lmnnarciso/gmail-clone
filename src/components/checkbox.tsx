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
        `relative h-4 w-4 translate-y-[3px] rounded-sm border-2 border-secondary-gray
          after:absolute
        after:bottom-[-7px]
        after:left-[-14px]
        after:right-[-7px] after:top-[-14px] after:z-[1] after:h-[40px]
        after:w-[40px] after:scale-[1]
        after:rounded-full after:bg-hovered 
        after:opacity-[0]
        after:transition-[opacity,transform]
        after:content-[""]
        hover:border-primary-gray
       after:hover:opacity-[1]
        
        `,
        className
      )}
      {...props}
      onClick={(e) => {
        console.log({ e });
      }}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox };
