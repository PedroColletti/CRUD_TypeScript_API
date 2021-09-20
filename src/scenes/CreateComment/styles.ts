import { Form } from 'formik';
import styled from 'styled-components';
import COLORS from '../../theme/colors';

export const Container = styled.div`
    margin-top: 40px;
    padding: 10px 80px 80px;
    height: 100%;
    font-size: 18px;
    margin-left: 37%;
    margin-right: 10%;
`;

export const Wrapper = styled.div``;

export const UserLogo = styled.img`
    height: 30px;
    width: 30px;
    margin-bottom: 15px;
    margin-right: 10px;
`;


export const DivTitlePage = styled.div`
    text-align: center;
    margin-top: 20px;
`;

export const TitlePage = styled.span`
    font-size: 30px;
    font-family: 'Segoe UI';
    font-weight: 700;
`;

export const FormAdd = styled(Form)``;

export const Title = styled.label`
    font-size: 16px;
    font-family: 'Segoe UI';
    
`;

export const DivUserField = styled.div`
    margin-bottom: 20px;
`;

export const UserField = styled.input``;


export const DivAddUser = styled.div`
    margin-top: 50px;
`;

export const AddUserButton = styled.button`
    display: flex; //default dele é vertical
    flex-direction: row; //pra ficar horizontal
    align-items: center;
    justify-content: center;
    border-width: 0;
    width: 207px;
    height: 40px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: ${COLORS.blue2};
    cursor: pointer;
`;

export const TitleField = styled.span`
    color: white;
    margin-right: 7px;
    font-family: sans-serif;
    font-weight: 600; //negrito
    cursor: pointer; //altera cursor
`;

export const ErrorMessage = styled.div`
    color: ${COLORS.red};
`;