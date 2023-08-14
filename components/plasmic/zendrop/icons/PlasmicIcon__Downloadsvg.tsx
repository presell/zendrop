// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownloadsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownloadsvgIcon(props: DownloadsvgIconProps) {
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

      <g clipPath={"url(#QAho-xeVJa)"}>
        <path
          d={
            "M672.617 250.046c0-.236.135-1.657.135-1.657 0-118.014-96.035-214.015-214.05-214.015-81.9 0-153.42 47.95-189.297 119.672-18.295-14.236-39.36-24.584-63.134-24.584-58.262 0-105.638 47.341-105.638 105.639 0 0 .71 5.14 1.251 9.13C42.404 264.486 0 318.894 0 383.313c0 39.801 15.521 77.234 43.656 105.3 28.167 28.202 65.533 43.688 105.334 43.688h204.175v73.413h-85.687l153.149 159.911 149.869-159.911h-85.687v-73.413h172.423c78.655 0 142.768-64.046 142.768-142.633-.035-73.276-56.269-131.573-127.383-139.622zM657.165 490.27H484.808v-87.075H353.165v87.075h-204.21c-28.506 0-55.389-11.091-75.577-31.347-20.188-20.188-31.28-47.037-31.28-75.543 0-51.23 36.386-95.325 86.635-104.962l19.613-3.753-3.28-22.623-2.333-16.907c0-35.032 28.506-63.505 63.538-63.505 20.797 0 40.275 10.212 52.211 27.29l23.873 34.288 13.356-39.665c23.535-69.999 89.036-117.034 162.887-117.034 94.852 0 171.984 77.132 171.984 171.882l-2.096 40.307 23.705.474 4.936-.135c55.524 0 100.667 45.143 100.667 100.667.004 55.457-45.14 100.566-100.629 100.566z"
          }
          fill={"#8173E5"}
        ></path>
      </g>

      <defs>
        <clipPath id={"QAho-xeVJa"}>
          <path fill={"#fff"} d={"M0 0h800v800H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default DownloadsvgIcon;
/* prettier-ignore-end */
