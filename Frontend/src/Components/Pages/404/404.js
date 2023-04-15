import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NotFound = () => {
  return (
    <Container>
      <Heading>Error 404 Page not found.</Heading>
      <Button to="/">Go back to homepage</Button>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  padding: 24px;
  background-color: #f5f5f5;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  color: #333333;
`;

const Button = styled(Link)`
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;
  background-color: #0077cc;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #005ea6;
  }
`;
