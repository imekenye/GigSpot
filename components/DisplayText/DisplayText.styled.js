import styled from "styled-components";

export const Container = styled.div`
  padding: 28px 50px 0 50px;
`;

export const Title = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 500;
  font-size: 122px;
  line-height: 122px;
`;
export const SubTitle = styled.h2`
  display: inline-block;
  font-size: 48px;
  font-weight: 200;
  height: 100%;
  align-self: baseline;
`;
