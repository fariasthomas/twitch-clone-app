import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const TagRow = styled.View`
    margin-top: 8px;
    flex-direction: row;
`;

export const TagView = styled.View`
    background: ${colors.tag};
    padding: 2px 8px;
    border-radius: 10px;
    margin-right: 5px;
`;

export const TagText = styled.Text`
    color: ${colors.black};
    font-family: roboto_500;
    font-size: 13px;
`;
