import React from "react";
import styled from "styled-components";
import FullImageCardZoom from "../FullImageCardZoom";
import { borderRadius16px } from "../../blocks/siteWideStyles";

const Container = styled.div`
  position: relative;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const SectionTitle = styled.div`
  font-size: 30px;
  padding: 20px 5%;
  flex: 0 0 100%;
  height: fit-content;
`;

export function AboutUsImgCards() {
  return (
    <Container>
      <SectionTitle>About the Team</SectionTitle>
      <div
        style={{
          width: "320px",
          height: "500px",
          ...borderRadius16px
        }}
      >
        <FullImageCardZoom
          onClick={() => console.log("clicked")}
          halfSized={false}
          imageUrl="images/me2.png"
          centerBottom={
            <div>
              MUSTANG
            </div>
          }
          leftTop={<></>}
          rightTop={<></>}
          leftBottom={
            <>
              Mustang is a professional .... asdjfkjsa kjh kjh kjhkj hkjhkj hkjh{" "}
            </>
          }
          rightBottom={<></>}
        />
      </div>
      <div
        style={{
          width: "320px",
          height: "500px",
          ...borderRadius16px
        }}
      >
        <FullImageCardZoom
          onClick={() => console.log("clicked")}
          halfSized={false}
          imageUrl="images/me2.png"
          centerBottom={
            <div>
              LIONELLA SHMAKALOVA
            </div>
          }
          leftTop={<></>}
          rightTop={<></>}
          leftBottom={
            <>
              Lionella is a professional .... asdjfkjsa kjh kjh kjhkj hkjhkj
              hkjh{" "}
            </>
          }
          rightBottom={<></>}
        />
      </div>
      <div
        style={{
          width: "320px",
          height: "500px",
          ...borderRadius16px
        }}
      >
        <FullImageCardZoom
          onClick={() => console.log("clicked")}
          halfSized={false}
          imageUrl="images/me2.png"
          centerBottom={
            <div>
             PICKLES
            </div>
          }
          leftTop={<></>}
          rightTop={<></>}
          leftBottom={
            <>
              Pickles is a professional .... asdjfkjsa kjh kjh kjhkj hkjhkj hkjh{" "}
            </>
          }
          rightBottom={<></>}
        />
      </div>
    </Container>
  );
}
