import React from 'react';

import { TagRow, TagView, TagText } from './styles';

const Tags: React.FC = () => {
  return (
    <TagRow>
      <TagView>
        <TagText>Portuguese</TagText>
      </TagView>
      <TagView>
        <TagText>Web Development</TagText>
      </TagView>
    </TagRow>
  );
};

export default Tags;
