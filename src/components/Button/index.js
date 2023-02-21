import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder18: "rounded-radius18",
  icbCircleBorder24: "rounded-radius24",
  icbRoundedBorder8: "rounded-radius8",
  RoundedBorder8: "rounded-radius8",
};
const variants = {
  icbOutlineCyan4003d: "bg-cyan_400 shadow-bs",
  icbFillDeeporange600: "bg-deep_orange_600",
  FillDeeporange600: "bg-deep_orange_600 text-white_A700",
  FillBluegray900: "bg-bluegray_900 text-white_A700",
  OutlineBluegray30051:
    "border border-bluegray_300_51 border-solid text-bluegray_900",
};
const sizes = {
  smIcn: "p-[8px]",
  mdIcn: "p-[12px]",
  lgIcn: "p-[15px]",
  sm: "p-[7px]",
  md: "p-[12px]",
  lg: "pl-[15px] py-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder18",
    "icbCircleBorder24",
    "icbRoundedBorder8",
    "RoundedBorder8",
  ]),
  variant: PropTypes.oneOf([
    "icbOutlineCyan4003d",
    "icbFillDeeporange600",
    "FillDeeporange600",
    "FillBluegray900",
    "OutlineBluegray30051",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "lgIcn", "sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbCircleBorder18",
  variant: "",
  size: "smIcn",
};

export { Button };
