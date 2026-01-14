import styled from "@emotion/styled";
import { DropzoneState } from "react-dropzone";
import { StyledComponent } from "@emotion/styled";

type ContainerProps = {
  $isInvalid: boolean;
} & Partial<DropzoneState>;

type ColorProps = {
  isDragAccept?: boolean;
  isDragReject?: boolean;
  isFocused?: boolean;
};

const getColor = (props: ColorProps) => {
  if (props.isDragAccept) return "#00e676";
  if (props.isDragReject) return "#ff1744";
  if (props.isFocused) return "#2196f3";
  return "#1d4ed8";
};

export const Container: StyledComponent<ContainerProps, {}, {}> =
  styled.div<ContainerProps>`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 10px;
    border-color: ${(props) =>
      getColor({
        ...props,
        isDragReject: props.isDragReject || props.$isInvalid,
      })};
    border-style: dashed;
    color: #000;
    outline: none;
    transition: border 0.24s ease-in-out;
    background: #fff;
  `;
