import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
    padding: 8px 0 0;
    margin-bottom: 100px;
`;

export const CategoryContainer = styled.TouchableOpacity`
    flex-direction: row;
`;

export const GameThumb = styled.Image`
    width: 70px;
    height: 90px;
    margin-bottom: 25px;
`;

export const Description = styled.View`
    margin-left: 15px;
    
`;

export const GameName = styled.Text`
    color: ${colors.black};
    font-family: roboto_500;
    font-size: 16px;
`;

export const TotalViews = styled.Text`
    color: ${colors.gray};
    font-family: roboto_400;
    font-size: 14px;
`;
