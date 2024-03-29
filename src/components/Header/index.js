import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, ButtonMenu } from './styles';

export const Header = () => {
  const navigation = useNavigation();

  return <Container>
    <ButtonMenu onPress={() => navigation.toggleDrawer()}>
      <Icon name='menu' color='#fff' size={35}/>
    </ButtonMenu>
  </Container>
}
