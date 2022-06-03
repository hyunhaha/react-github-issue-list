import React from "react";
import styled from "styled-components";

const Issue = ({ data }) => {
  return (
    <Item>
      <Content>
        <Title href={data.html_url}>{data.title}</Title>

        <span>
          {data.labels.map(label => (
            <Label color={label.color} key={label.id}>{`${label.name}`}</Label>
          ))}
        </span>

        <Info>{`#${data.number} ${data.state} ${data.created_at} by ${data.user.login}`}</Info>
      </Content>
      <div>{`comment${data.comments}`}</div>
    </Item>
  );
};
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  text-align: left;
  border-bottom: 1px solid ${props => props.theme.color.lightGray1};
  padding: 8px;
  &:last-child {
    border-bottom: none;
  }
`;

const Content = styled.div``;
const Title = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  color: black;
  &:hover {
    color: blue;
  }
`;
const Info = styled.div`
  font-size: 12px;
  margin-top: 4px;
`;
const Label = styled.span`
  background-color: #${props => props.color};
  padding: 0 7px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  border: 1px solid transparent;
  border-radius: 2em;
  margin-left: 4px;
`;
export default Issue;
