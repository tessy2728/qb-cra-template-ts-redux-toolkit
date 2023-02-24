

import React, { memo } from 'react';
import styled from 'styled-components/macro';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id: string;
  label: string;
  className?: string;
  isSelected?: boolean;
}
const Wrapper = styled.div`

`;
export const Radio = ({ id, label, className, isSelected, ...restOf }: Props) => {
  return (
    <Wrapper className={className} >
      <input type="radio" id={id} checked={isSelected} {...restOf} />
      <label htmlFor={id} > {label} </label>
    </Wrapper>
  );
};

