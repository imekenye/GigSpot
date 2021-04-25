import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid white;
  padding: 28px 50px;

  .logo-border {
    width: 20px;
    height: 100%;
    background: white;
  }
`;
export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 110px;
`;
export const ListItem = styled.li`
  margin-right: 16px;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 0;
  left: 20%;
  width: 1px;
  background: white;
  height: 90px;
`;
