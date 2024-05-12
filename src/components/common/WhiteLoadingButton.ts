import { LoadingButton } from "./LoadingButton";
import styled from "styled-components";

export const WhiteLoadingButton = styled(LoadingButton)<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: 700;
  font-size: 0.9rem;
  background-color: #fff;
  border: 0;
  box-shadow: 0px 2px #ccc;

  &:hover {
    color: ${(props) => props.color};
    background-color: #eee;
  }

  &:active {
    color: ${(props) => props.color} !important;
    background-color: #ccc !important;
  }

  &:disabled {
    color: #bbb;
    background-color: #eee;
    opacity: 1;
  }
`;
