/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Homecopy(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="0px 0px 0px 0px"
      alignItems="center"
      gap="0"
      width="1440px"
      position="relative"
      justifyContent="center"
      direction="row"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="120px 120px 120px 120px"
        alignSelf="stretch"
        backgroundColor="rgba(255,255,255,1)"
        grow="1"
        overflow="hidden"
        alignItems="center"
        gap="10px"
        position="relative"
        basis="720px"
        justifyContent="center"
        direction="column"
        height="484px"
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
              width="480px"
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
              width="480px"
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
        <Button
          padding="8px 12px 8px 12px"
          size="small"
          shrink="0"
          gap="0"
          display="flex"
          width="135px"
          variation="primary"
          height="34px"
          children="USA"
          {...getOverrideProps(overrides, "Flex.Flex[0].Button[0]")}
        ></Button>
        <Button
          padding="8px 12px 8px 12px"
          size="small"
          shrink="0"
          gap="0"
          display="flex"
          width="135px"
          variation="primary"
          children="UK"
          {...getOverrideProps(overrides, "Flex.Flex[0].Button[1]")}
        ></Button>
        <Button
          padding="8px 12px 8px 12px"
          size="small"
          shrink="0"
          gap="0"
          display="flex"
          width="135px"
          variation="primary"
          children="AUS"
          {...getOverrideProps(overrides, "Flex.Flex[0].Button[2]")}
        ></Button>
      </Flex>
      <Flex
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        grow="1"
        overflow="hidden"
        alignItems="center"
        gap="10px"
        position="relative"
        basis="720px"
        justifyContent="center"
        direction="column"
        height="484px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Image
          width="720px"
          padding="0px 0px 0px 0px"
          grow="1"
          position="relative"
          basis="484px"
          height="484px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Image[0]")}
        ></Image>
      </Flex>
    </Flex>
  );
}
