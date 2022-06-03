import React from "react";
import styled from "styled-components";
import Issue from "./Issue";

const IssueList = ({ issues }) => (
  <List>
    {issues.map((issue, i) => (
      <Issue data={issue} />
    ))}
  </List>
);

const List = styled.ul`
  border: 1px solid ${props => props.theme.color.lightGray1};
  border-radius: 4px;
`;
export default IssueList;
