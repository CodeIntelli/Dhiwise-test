import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[64px]",
  h2: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h3: "font-bold sm:text-[32px] md:text-[34px] text-[36px]",
  h4: "sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "font-semibold text-[20px]",
  h6: "font-semibold text-[18px]",
  body1: "font-normal text-[16px]",
  body2: "font-semibold text-[15px]",
  body3: "text-[14px]",
  body4: "font-normal text-[13px]",
  body5: "text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
