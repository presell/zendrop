// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckZendropsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckZendropsvgIcon(props: CheckZendropsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 800 800"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#UfxUSfNpya)"}>
        <path
          d={
            "M682.828 682.828c156.229-156.229 156.229-409.427 0-565.656-156.229-156.23-409.427-156.23-565.656 0-156.23 156.229-156.23 409.427 0 565.656 156.229 156.229 409.591 156.229 565.656 0zM256.586 338.863l89.95 89.95 197.041-196.877 69.707 69.707-196.878 196.878-69.87 69.707-69.707-69.707-89.95-89.95 69.707-69.708z"
          }
          fill={"#8173E5"}
        ></path>
      </g>

      <defs>
        <clipPath id={"UfxUSfNpya"}>
          <path fill={"#fff"} d={"M0 0h800v800H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CheckZendropsvgIcon;
/* prettier-ignore-end */
