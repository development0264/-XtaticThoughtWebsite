import React from "react";
import styled from "styled-components";

const DivButton = styled.div`
  & {
    color: #b1b1b1;
    cursor: pointer;
    text-decoration: none;
    outline: none;

    position: relative;
    display: block;
    width: fit-content;
    border-radius: 25px;
    font-size: 0px;
    overflow: hidden;
    text-transform: uppercase;
    backface-visibility: hidden;

    &:before {
      box-shadow: inset 0px 0px 0px 2px #b1b1b1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
      z-index: 5;
      border-radius: 25px;
    }

    & i {
      font-style: normal;
      display: inline-block;
      position: relative;
    }

    & span:last-child:before {
      content: "";
      background: #75acff;
      width: 100%;
      height: 100%;
      left: 0%;
      opacity: 0;
      top: 1px;
      position: absolute;
      transform: translateX(-100%);
      transition: all 0.35s ease-out;
    }

    & span:first-child {
      background: #fff;
      z-index: 1;
      position: relative;
      display: inline-block;
      border-right: 2px solid #b1b1b1;
      transition: all 0.35s ease-out;
    }

    & span {
      transition: all 0.35s ease-out;
      position: relative;
      display: inline-block;
      text-align: center;
      padding: 0px 25px;
      line-height: 46px;
      font-size: 14px;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
    }

    &:hover {
      span:last-child:before {
        transform: translateX(0%);
        opacity: 1;
        transition-delay: 0s;
      }
      span:last-child {
        color: #fff;
      }
    }
  }
`;

export function ButtonFillUp({ labelText, buttonText, onClick }) {
  return (
    <DivButton onClick={onClick}>
      <span>
        <i>{labelText}</i>
      </span>
      <span>
        <i>{buttonText}</i>
      </span>
    </DivButton>
  );
}
