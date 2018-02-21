import React from 'react';
import Paragraph from './paragraph'
import _ from 'lodash';

const Paragraphs = () => {
  return (
    <div>
      <Paragraph
        children="This is an example paragraph" />

      <Paragraph
        children={"This is a paragraph sends a modifier"}
        type="large" />

      <Paragraph
        children={"This is a paragraph sends a modifier and a className"}
        className="paragraph--fantasy"
        type="large" />

      <Paragraph
        children={"This is a paragraph sends a modifier and a className"}
        className="paragraph--fantasy"
        type="large" />

      <div
        className="string-literal-example"
        dangerouslySetInnerHTML={{__html: compiledStringLiteral}} />

    </div>
  );
}

// THIS PART IS FOR THE COMPILED STRING EXAMPLE
const stringLiteral = `This is a compiled message from string literal.
  As example, through innerHTML, I can pass a link, make it bold and
  I pass <b><a href="<%= myLink %>"> with a link</a></b> and my nickname
  which is <i><b><%= nickName %></b></i>.`;

const values = {
  myLink: 'https://github.com/GBouffard',
  nickName: 'Boubou'
};

const compiled = _.template(stringLiteral);
const compiledStringLiteral = compiled(values);

export default Paragraphs;