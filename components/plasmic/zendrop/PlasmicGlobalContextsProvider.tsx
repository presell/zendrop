// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4UKWsAMfUC1kEuLgBvknC

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: OREVbGCcgN/codeComponent
import { WordpressProvider } from "@plasmicpkgs/plasmic-wordpress"; // plasmic-import: ABVULPU3AuC/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
  >;

  wordpressProviderProps?: Partial<
    Omit<React.ComponentProps<typeof WordpressProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, cmsCredentialsProviderProps, wordpressProviderProps } =
    props;

  return (
    <CmsCredentialsProvider
      {...cmsCredentialsProviderProps}
      databaseId={
        cmsCredentialsProviderProps &&
        "databaseId" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseId!
          : ("i2rUMXNMBuVqQk5M3WJBgc" as const)
      }
      databaseToken={
        cmsCredentialsProviderProps &&
        "databaseToken" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseToken!
          : ("ycOrPup8UTOxaXu0g74PHO3UKjZEWr2yRWpfswFe8EVf2uwBT5I6BYCqcdcEB8SabwLGy8BiHeKsWBrRMAQ" as const)
      }
      host={
        cmsCredentialsProviderProps && "host" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.host!
          : ("https://data.plasmic.app" as const)
      }
      locale={
        cmsCredentialsProviderProps && "locale" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.locale!
          : ("Default" as const)
      }
    >
      <WordpressProvider
        {...wordpressProviderProps}
        wordpressUrl={
          wordpressProviderProps && "wordpressUrl" in wordpressProviderProps
            ? wordpressProviderProps.wordpressUrl!
            : ("https://techcrunch.com/" as const)
        }
      >
        {children}
      </WordpressProvider>
    </CmsCredentialsProvider>
  );
}
