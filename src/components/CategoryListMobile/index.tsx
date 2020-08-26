import React from 'react';

import data from './data';

import { List, CategoryContainer, CategoryImage, CategoryName, CategoryStatus, RedCicle, Info } from './styles';

interface ItemProps {
  item: typeof data[0];
}

const AllCategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCicle />
        <Info>51.9K</Info>
      </CategoryStatus>
    </CategoryContainer>
  )

  return (
    <List>
      {data.map(item => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default AllCategoryList;
