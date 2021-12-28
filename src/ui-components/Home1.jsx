/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Home1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Flex.Flex[0].Flex[0].Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "1200px",
          fontSize: "40px",
          lineHeight: "48px",
          position: "relative",
          fontWeight: "700",
          direction: "column",
          children: "Motorsport on TV",
        },
        "Flex.Flex[0].Flex[0].Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          alignItems: "center",
          shrink: "0",
          gap: "16px",
          position: "relative",
          justifyContent: "center",
          direction: "column",
        },
        Flex: {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          gap: "0",
          width: "1440px",
          position: "relative",
          justifyContent: "center",
          direction: "row",
          height: "135px",
        },
        "Flex.Flex[0].Flex[0].Flex[0].Text[1]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          letterSpacing: "0.010000000000000009px",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "1200px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
          children:
            "A simple motorsport calendar with links to TV providers and livestreams in your area.",
        },
        "Flex.Flex[0]": {
          padding: "120px 120px 120px 120px",
          backgroundColor: "rgba(255,255,255,1)",
          grow: "1",
          overflow: "hidden",
          alignItems: "center",
          gap: "10px",
          width: "1440px",
          position: "relative",
          basis: "1440px",
          justifyContent: "center",
          direction: "column",
          height: "262px",
        },
        "Flex.Flex[0].Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          alignItems: "center",
          shrink: "0",
          gap: "24px",
          position: "relative",
          justifyContent: "center",
          direction: "column",
        },
      },
      variantValues: { mode: "Light" },
    },
  ];
  const mergeVariantsAndOverrides = (variants, overrides) => {
    const overrideKeys = new Set(Object.keys(overrides));
    const sharedKeys = Object.keys(variants).filter((variantKey) =>
      overrideKeys.has(variantKey)
    );
    const merged = Object.fromEntries(
      sharedKeys.map((sharedKey) => [
        sharedKey,
        { ...variants[sharedKey], ...overrides[sharedKey] },
      ])
    );
    return {
      ...variants,
      ...overrides,
      ...merged,
    };
  };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      padding="0px 0px 0px 0px"
      alignItems="center"
      gap="0"
      width="1440px"
      position="relative"
      justifyContent="center"
      direction="row"
      height="135px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(255,255,255,1)"
        grow="1"
        overflow="hidden"
        alignItems="center"
        gap="10px"
        width="1440px"
        position="relative"
        basis="1440px"
        justifyContent="center"
        direction="column"
        height="262px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          alignItems="center"
          shrink="0"
          gap="24px"
          position="relative"
          justifyContent="center"
          direction="column"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            alignItems="center"
            shrink="0"
            gap="16px"
            position="relative"
            justifyContent="center"
            direction="column"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0]")}
          >
            <Text
              padding="0px 0px 0px 0px"
              alignSelf="stretch"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              textAlign="center"
              shrink="0"
              display="flex"
              justifyContent="flex-start"
              fontFamily="Inter"
              width="1200px"
              fontSize="40px"
              lineHeight="48px"
              position="relative"
              fontWeight="700"
              direction="column"
              children="Motorsport on TV"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <Text
              padding="0px 0px 0px 0px"
              alignSelf="stretch"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              textAlign="center"
              shrink="0"
              display="flex"
              letterSpacing="0.010000000000000009px"
              justifyContent="flex-start"
              fontFamily="Inter"
              width="1200px"
              fontSize="16px"
              lineHeight="24px"
              position="relative"
              fontWeight="400"
              direction="column"
              children="A simple motorsport calendar with links to TV providers and livestreams in your area."
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[1]"
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
