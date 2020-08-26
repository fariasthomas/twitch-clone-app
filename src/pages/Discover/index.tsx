import React from 'react';
import { FlatList } from 'react-native';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import CategoryList from '../../components/CategoryList';
import Title from '../../components/Title';
import LiveChannelsList from '../../components/LiveChannelsList';

import { Wrapper, Container, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Discover: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Descubra</Heading>
      },

      {
        key: 'DESCOVER_CATEGORY',
        render: () => <Title>Categorias que achamos que vai gostar</Title>,
        isTitle: true
      },
      { key: 'C1', render: () => <CategoryList /> },

      {
        key: 'LIKE_CHANNELS',
        render: () => <Title>Canais ao vivo que achamos que vai gostar</Title>,
        isTitle: true
      },
      { key: 'C1', render: () => <LiveChannelsList /> },
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

export default Discover;
