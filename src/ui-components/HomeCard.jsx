/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="334px"
      height="202px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="25px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HomeCard")}
      {...rest}
    >
      <Image
        width="334px"
        height="136px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={home?.image_url}
        {...getOverrideProps(overrides, "image 17")}
      ></Image>
      <View
        width="136px"
        height="47px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="-377px"
        left="-115px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 15696")}
      ></View>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="57px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="136px"
        left="10px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={home?.address}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={home?.price}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </Flex>
    </View>
  );
}
