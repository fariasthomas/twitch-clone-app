import React from 'react';
import { FlatList } from 'react-native';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryListMobile from '../../components/CategoryListMobile';
import AllCategoryList from '../../components/AllCategoryList';

import { Wrapper, Container, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Browser: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Seguindo</Heading>
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Principais categorias para celular</Title>,
        isTitle: true
      },
      { key: 'C1', render: () => <CategoryListMobile /> },

      {
        key: 'TOTAL_CATEGORIES',
        render: () => <Title>Todas as categorias</Title>,
        isTitle: true
      },
      { key: 'C2', render: () => <AllCategoryList /> },
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

export default Browser;
