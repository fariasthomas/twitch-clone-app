import React from 'react';
import { View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';

import { Wrapper, Container, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Seguindo</Heading>
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Categorias seguidas</Title>,
        isTitle: true
      },
      { key: 'C1', render: () => <CategoryList /> },

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Canais ao vivo</Title>,
        isTitle: true
      },
      { key: 'C2', render: () => <StreamList /> },

      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue assistindo</Title>,
        isTitle: true
      },
      { key: 'C3', render: () => <StreamList /> },

      {
        key: 'OFFILINE_CHANNELS',
        render: () => <Title>Canais offiline</Title>,
        isTitle: true
      },
      { key: 'C4', render: () => <ChannelList /> },
    ];

    // Array que contém apenas os índices nos elementos  que são títulos
    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item> 
            data={data} 
            renderItem={({ item }) => item.render()} 
            keyExtractor={item => item.key} 
            stickyHeaderIndices={indices}
            // Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
