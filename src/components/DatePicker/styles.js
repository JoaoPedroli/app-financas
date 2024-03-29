import styled from 'styled-components';
import { whites } from '../../styles/colors.json';

export const Container = styled.TouchableOpacity`
  background: ${ Platform.OS === 'ios' ? '#00000066' : 'transparent'};
  position: absolute;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  padding: 16px;
  justify-content: flex-end;
  align-items: flex-end;
  background: ${ whites[0] };
  border-bottom-width: 1px;
  border-color: grey;
`;
