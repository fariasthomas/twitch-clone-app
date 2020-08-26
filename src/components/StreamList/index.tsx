import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';
import Tags from '../Tags';

import { 
  List, 
  StreamContainer, 
  StreamThumbnail, 
  StreamColumn, 
  StreamRow, 
  StreamHeader, 
  StreamAvatar, 
  StreamUserName, 
  StreamDescription,
  StreamCategory
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLines={1}>thomassf1</StreamUserName>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com Next.js, Chakra UI e GraphQL
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamRow>

        <Tags />
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
