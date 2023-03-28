import styled from "styled-components";

export const FeedbackOptionsContainer = styled.ul`
display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FeedbackOption = styled.li`
  margin: 0.5rem;
`;

export const FeedbackButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0062cc;
  }
`;