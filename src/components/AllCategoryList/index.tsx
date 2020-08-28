import React from 'react';

import Tags from '../Tags';
import data from './data';

import { 
  List, 
  CategoryContainer, 
  GameThumb, 
  Description, 
  GameName, 
  TotalViews 
} from './styles';

interface ItemProps {
  item: typeof data[0];
}

const AllCategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <GameThumb source={item.source} />

      <Description>
        <GameName numberOfLines={1}>{item.name}</GameName>
        <TotalViews>100 mil espectadores</TotalViews>

        <Tags>{item.category}</Tags>
      </Description>
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
