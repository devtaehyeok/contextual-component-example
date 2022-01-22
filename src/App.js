import React from 'react';
import './style.css';
import styled from 'styled-components';

const Quote = ({ by, source, children }) => {
  return (
    <figure>
      <QuoteContent>{children}</QuoteContent>
      <figcaption>
        <Author>
          <SourceLink href={source}>{by}</SourceLink>
        </Author>
      </figcaption>
    </figure>
  );
};

const QuoteContent = styled.blockquote`
  margin: 0;
  background: hsl(0deg 0% 90%);
  padding: 16px 20px;
  border-radius: 8px;
  font-style: italic;

  &::before {
    content: '“';
  }

  &::after {
    content: '”';
  }
`;

/* You can safely ignore everything below this point! It doesn't need to change */
const Author = styled.cite`
  display: block;
  text-align: right;
  margin-top: 8px;
`;

const SourceLink = styled.a`
  text-decoration: none;
  color: hsl(0deg 0% 35%);

  &::before {
    content: '—';
  }
`;

/*
  Quote 밑에 있을 때만 밑줄 및 검은색 글씨
*/
const TextLink = styled.a`
  /* Standard styles: */
  color: blue;
  text-decoration: none;
  /* Styles when rendered inside a quote: */
  ${QuoteContent} & {
    color: black;
    text-decoration: revert;
  }
`;
const Wrapper = styled.main`
  margin:8px auto;
  padding: 16px 0
`;

export default function App() {
  return (
    <Wrapper>
      <Quote by="익명" source="/">
        이 인용은 <TextLink href="/">링크를 포함합니다</TextLink>!
      </Quote>
      <p>
        이 문단은 <TextLink href="/">링크를 포함합니다</TextLink>!
      </p>
    </Wrapper>
  );
}
