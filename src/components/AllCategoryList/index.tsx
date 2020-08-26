import React from 'react';

import Tags from '../Tags';

import { 
  List, 
  CategoryContainer, 
  GameThumb, 
  Description, 
  CategoryName, 
  TotalViews 
} from './styles';

const AllCategoryList: React.FC = () => {
  const CategoryItem = () => (
    <CategoryContainer>
      <GameThumb />

      <Description>
        <CategoryName />
        <TotalViews />

        <Tags />
      </Description>
    </CategoryContainer>
  )
  
  return (
    <List>

    </List>
  );
};

export default AllCategoryList;
