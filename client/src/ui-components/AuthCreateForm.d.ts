/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AuthCreateFormInputValues = {
    token?: string;
};
export declare type AuthCreateFormValidationValues = {
    token?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthCreateFormOverridesProps = {
    AuthCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    token?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthCreateFormProps = React.PropsWithChildren<{
    overrides?: AuthCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AuthCreateFormInputValues) => AuthCreateFormInputValues;
    onSuccess?: (fields: AuthCreateFormInputValues) => void;
    onError?: (fields: AuthCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AuthCreateFormInputValues) => AuthCreateFormInputValues;
    onValidate?: AuthCreateFormValidationValues;
} & React.CSSProperties>;
export default function AuthCreateForm(props: AuthCreateFormProps): React.ReactElement;
