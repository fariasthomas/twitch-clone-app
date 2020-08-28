import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    height: 40px;
    width: 170px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
    
`;

export const TextButton = styled.Text`
    color: ${colors.black};
    font-family: roboto_500;

    &.hover, &.active {
        color: ${colors.purple};
        border-bottom: 1px solid ${colors.purple};
    }
`;
