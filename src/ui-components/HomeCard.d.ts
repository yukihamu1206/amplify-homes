/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Home } from "../models";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeCardOverridesProps = {
    HomeCard?: PrimitiveOverrideProps<ViewProps>;
    "image 17"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 15696"?: PrimitiveOverrideProps<ViewProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HomeCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    home?: Home;
} & {
    overrides?: HomeCardOverridesProps | undefined | null;
}>;
export default function HomeCard(props: HomeCardProps): React.ReactElement;
