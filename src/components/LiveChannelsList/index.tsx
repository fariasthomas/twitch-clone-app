import React from 'react';

import Tags from '../Tags';
import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  List,  
  LiveContainer,
  StreamThumbnail, 
  StreamFooter, 
  StreamAvatar, 
  Description,
  StreamUserName,
  StreamDescription
} from './styles';

const LiveChannelsList: React.FC = () => {
  const LiveChannelItem = () => (
    <LiveContainer>
        <StreamThumbnail source={streamThumbnail} />

        <StreamFooter>
          <StreamAvatar />

          <Description>
            <StreamUserName numberOfLines={1}>thomassf1</StreamUserName>

            <StreamDescription numberOfLines={1}>
              Front-end com Next.js, Chakra UI e GraphQL
            </StreamDescription>

            <Tags />
          </Description>
        </StreamFooter>

    </LiveContainer>
  )

  return (
    <List>
      <LiveChannelItem />
      <LiveChannelItem />
      <LiveChannelItem />
      <LiveChannelItem />
      <LiveChannelItem />
      <LiveChannelItem />
    </List>
  );
};

export default LiveChannelsList;
