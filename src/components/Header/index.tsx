import React, { useContext } from 'react';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Switch } from 'react-native';
import { ThemeContext } from 'styled-components';

import colors from '../../styles/colors';

import { Container, Avatar, OnlineStatus, RightSide, View, Button } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <View>
          <Switch 
            onValueChange={toggleTheme}
            value={false}
          />  
        </View>

        <Button>
          <MaterialIcons name="notifications-none" size={26} color={colors.primary} />
        </Button>
        
        <Button> 
          <MaterialCommunityIcons name="message-outline" size={26} color={colors.primary} />
        </Button>
        
        <Button>
          <Feather name="search" size={26} color={colors.primary} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;