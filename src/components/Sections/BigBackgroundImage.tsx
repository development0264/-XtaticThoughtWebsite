import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vmin;
  min-height: 800px;
  position: relative;
  padding: 70px 0px 80px;
`;

const BgImageContainer = styled.div`
    background-image: url("${({ imageUrl }) => imageUrl}");
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;overflow: hidden;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    backface-visibility: hidden`;

const ContentContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
`;

export function BigBackgroundImage(props) {
  const { imageUrl, children } = props;
  return (
    <Container>
      <BgImageContainer imageUrl={imageUrl} />
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
}
