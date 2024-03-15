import styled from 'styled-components/native';
import { ReactButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    padding: 30px
`;

export const Form = styled.View`
    flex-direction: row;
    padding-button: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999' ,
})`
    flex: 1;
    height: 40px;
    background: #fff;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #eee
`
export const SubmitButton = styled(ReactButton)`
    justify-content: center;
    align-items: center;
    background: #498db;
    margin-left: 10px;
    padding: 0 12px;
`