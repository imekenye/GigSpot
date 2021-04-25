import { Container, List, ListItem, Line } from "./Nav.styled.js";
import React from "react";

export const Nav = React.forwardRef(({ children }, ref) => (
  <Container ref={ref}>{children}</Container>
));

Nav.List = function NavList({ children, ref, ...restProps }) {
  return (
    <List ref={ref} {...restProps}>
      {" "}
      {children}{" "}
    </List>
  );
};

Nav.Line = function NavLine({ children, ref, ...restProps }) {
  return <Line ref={ref} {...restProps} />;
};

Nav.ListItem = function NavListItem({ children, ref, ...restProps }) {
  return (
    <ListItem ref={ref} {...restProps}>
      {" "}
      {children}{" "}
    </ListItem>
  );
};
