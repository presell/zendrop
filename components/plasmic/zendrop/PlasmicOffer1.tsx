// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4UKWsAMfUC1kEuLgBvknC
// Component: 0h33b82XzEHG

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_zendrop.module.css"; // plasmic-import: 4UKWsAMfUC1kEuLgBvknC/projectcss
import sty from "./PlasmicOffer1.module.css"; // plasmic-import: 0h33b82XzEHG/css

createPlasmicElementProxy;

export type PlasmicOffer1__VariantMembers = {};
export type PlasmicOffer1__VariantsArgs = {};
type VariantPropType = keyof PlasmicOffer1__VariantsArgs;
export const PlasmicOffer1__VariantProps = new Array<VariantPropType>();

export type PlasmicOffer1__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
  slot6?: React.ReactNode;
};
type ArgPropType = keyof PlasmicOffer1__ArgsType;
export const PlasmicOffer1__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4",
  "slot5",
  "slot6"
);

export type PlasmicOffer1__OverridesType = {
  root?: p.Flex<"div">;
  offerH1?: p.Flex<"div">;
  offerH12?: p.Flex<"div">;
};

export interface DefaultOffer1Props {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
  slot6?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicOffer1__RenderFunc(props: {
  variants: PlasmicOffer1__VariantsArgs;
  args: PlasmicOffer1__ArgsType;
  overrides: PlasmicOffer1__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___4JnWv)}>
        <div className={classNames(projectcss.all, sty.freeBox___5HpPa)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__bzceH)}
                displayHeight={"423px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/zendrop/images/offersvg.svg",
                  fullWidth: 76,
                  fullHeight: 150,
                  aspectRatio: 0.503546
                }}
              />
            ),

            value: args.children
          })}
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__sSTfM)}>
        <div
          data-plasmic-name={"offerH1"}
          data-plasmic-override={overrides.offerH1}
          className={classNames(projectcss.all, sty.offerH1)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "SPECIAL OFFER",
            value: args.slot3,
            className: classNames(sty.slotTargetSlot3)
          })}
        </div>
        <div
          data-plasmic-name={"offerH12"}
          data-plasmic-override={overrides.offerH12}
          className={classNames(projectcss.all, sty.offerH12)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "FREE VITAMIN AIR",
            value: args.slot4,
            className: classNames(sty.slotTargetSlot4)
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__wd9M6)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Money-Back Guarantee: Better Flavor & Harder Hits or Your Money Back.",
            value: args.slot5,
            className: classNames(sty.slotTargetSlot5)
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___44Ncy)}>
          {p.renderPlasmicSlot({
            defaultContents: "CHOOSE FLAVOR",
            value: args.slot6,
            className: classNames(sty.slotTargetSlot6)
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__fa2Dn)}>
          <div className={classNames(projectcss.all, sty.freeBox__iikWr)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__b06DC)}
                    displayHeight={"60px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"60px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/zendrop/images/labelsvg.svg",
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: 1
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xjwWi
                    )}
                  >
                    {"Strawberry"}
                  </div>
                </React.Fragment>
              ),
              value: args.slot
            })}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__aUdqH)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__zWl6U)}
                    displayHeight={"60px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"60px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/zendrop/images/labelsvg2.svg",
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: 1
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__clkd8
                    )}
                  >
                    {"Vanilla"}
                  </div>
                </React.Fragment>
              ),
              value: args.slot2
            })}
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "offerH1", "offerH12"],
  offerH1: ["offerH1"],
  offerH12: ["offerH12"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  offerH1: "div";
  offerH12: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOffer1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOffer1__VariantsArgs;
    args?: PlasmicOffer1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOffer1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicOffer1__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicOffer1__ArgProps,
          internalVariantPropNames: PlasmicOffer1__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicOffer1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOffer1";
  } else {
    func.displayName = `PlasmicOffer1.${nodeName}`;
  }
  return func;
}

export const PlasmicOffer1 = Object.assign(
  // Top-level PlasmicOffer1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    offerH1: makeNodeComponent("offerH1"),
    offerH12: makeNodeComponent("offerH12"),

    // Metadata about props expected for PlasmicOffer1
    internalVariantProps: PlasmicOffer1__VariantProps,
    internalArgProps: PlasmicOffer1__ArgProps
  }
);

export default PlasmicOffer1;
/* prettier-ignore-end */
