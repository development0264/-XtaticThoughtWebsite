import React from "react";
import Link from "next/link";
import styled from "styled-components";

const LinkLinkNoStyle = styled(props => {
  const { href, children, ...restProps } = props;
  return (
    <div {...restProps}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </div>
  );
})`
  & a {
    color: inherit;
    text-decoration: none !important;
  }
`;

export default function NextLinkNoStyle(props): any {
  return <LinkLinkNoStyle {...props} />;
}
