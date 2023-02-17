import styled from "styled-components";
import * as colors from '../../core/config/colors';

export const AlertDiv = styled.div<{ bgColor: string, textColor: string }>`
  background: ${(props) => (props.bgColor ? props.bgColor : colors.LIGHT_GREEN)};
  color: ${(props) => (props.textColor ? props.textColor : colors.DARK_GREEN)};
  padding:10px;
  display: flex;
  align-items: center;
  margin: 5px 0;
  .alert-icon {
    width: 32px;
    height:32px;
  }
  .alert-message {
    margin-left: 10px;
  }
`;