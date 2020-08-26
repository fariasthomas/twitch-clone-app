import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
    padding: 0;
`;  

export const LiveContainer = styled.TouchableOpacity`
    margin-bottom: 5px;
`;

export const StreamThumbnail = styled.Image`
    width: 100%;
    height: 230px;
    
`; 

export const StreamFooter = styled.View`
    flex-direction: row;
    margin-top: 13px;
    margin-left: 6px;
    height: 100px;
`; 

export const StreamAvatar = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background: ${colors.tag};
`; 

export const Description = styled.View`
    margin-left: 9px;
`;

export const StreamUserName = styled.Text`
    color: ${colors.black};
    font-family: roboto_700;
    font-size: 16px;
    margin-bottom: -2px;
`;

export const StreamDescription = styled.Text`
    color: ${colors.gray};
    font-family: roboto_500;
    font-size: 16px;
`;
