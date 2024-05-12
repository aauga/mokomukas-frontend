import { LoadingButton } from "./LoadingButton";
import darkenColor from "../../utils/darkenColor";
import styled from "styled-components";

export const ColorfulLoadingButton = styled(LoadingButton)<{ color: string }>`
  background-color: ${(props) => props.color};
  font-weight: 700;
  font-size: 0.9rem;
  color: #fff;
  border: 0;
  box-shadow: 0px 2px ${(props) => darkenColor(props.color, -20)};

  &:hover {
    color: #fff;
    background-color: ${(props) => darkenColor(props.color, -5)};
  }

  &:active {
    color: #fff !important;
    background-color: ${(props) => darkenColor(props.color, -20)} !important;
  }

  &:disabled {
    color: #ccc;
    background-color: ${(props) => darkenColor(props.color, -10)};
    opacity: 1;
  }
`;
