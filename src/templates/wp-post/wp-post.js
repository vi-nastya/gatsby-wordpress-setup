import { graphql } from 'gatsby';
import React from 'react';

const WpPost = ({ data }) => {
  const {
    wpPost: { title, content, id, author },
  } = data;

  console.log('template');
  return (
    <div className={`post-${id}`}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export const query = graphql`
  query($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
    }
  }
`;

export default WpPost;
