import React from "react";
import styled from "styled-components";
import { dateForm } from "../utils/date";
import { BiComment } from "react-icons/bi";

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

        <Info>{`#${data.number} ${data.state} ${dateForm(data.created_at)} by ${
          data.user.login
        }`}</Info>
      </Content>
      {data.comments > 0 && (
        <Comment href={data.html_url}>
          <BiComment />
          <CommentCount>{data.comments}</CommentCount>
        </Comment>
      )}
    </Item>
  );
};
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  text-align: left;
  border-bottom: 1px solid ${props => props.theme.color.lightGray1};
  padding: 8px 16px;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${props => props.theme.color.lightGray3};
  }
`;

const Content = styled.div`
  width: 88%;
`;
const Title = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  color: ${props => props.theme.color.black};
  &:hover {
    color: ${props => props.theme.color.purple};
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
const Comment = styled.a`
  width: 12%;
  padding-top:2px;
  text-align: right;  
  text-decoration: none;
  color: ${props => props.theme.color.black};
  &:hover {
    color: ${props => props.theme.color.purple};
  }
}
`;
const CommentCount = styled.span`
  padding-left: 4px;
  vertical-align: middle;
  text-align: right;
`;
export default Issue;
