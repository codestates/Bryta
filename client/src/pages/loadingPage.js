import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%
  margin-top: 18rem
  text-align: center  
  `;

const Text = styled.div`
  font-weight: 600;
  font-size: 30px;
`;

const LoadingPage = () => {
  return (
    <Container>
      <Text>Loading...</Text>
    </Container>
  );
};
console.log("qw");

export default LoadingPage;
