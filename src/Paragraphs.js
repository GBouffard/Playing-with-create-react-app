import React from 'react';
import Paragraph from './paragraph'

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
    </div>
  );
}

export default Paragraphs;