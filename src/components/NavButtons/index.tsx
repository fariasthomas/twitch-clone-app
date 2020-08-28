import React from 'react';

import { Container, Button, TextButton } from './styles';

const NavButtons: React.FC = () => {
  return (
    <Container>
      <Button>
        <TextButton>Categorias</TextButton>
      </Button>

      <Button>
        <TextButton>Canais ao vivo</TextButton>
      </Button>
      
    </Container>
  );
};

export default NavButtons;
