import styled from 'styled-components';
import { Table } from 'antd';
import COLORS from '../../theme/colors';
export const { Column } = Table;


export const Container = styled.div`
    
`;


export const TitleUsers = styled.div`
    display: flex;
    margin-left: 2%;
    margin-bottom: 20px;
`;

export const Title = styled.span`
    display: flex; //default dele é vertical
    flex-direction: row; //pra ficar horizontal
    font-size: 32px;
    font-family: 'Segoe UI';
 
/*     background: url("https://static6.depositphotos.com/1012327/630/i/600/depositphotos_6309646-stock-photo-sun-glare-in-the-clear.jpg") no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900; */
`;



export const AddUser = styled.div`
    display: flex; //default dele é vertical
    flex-direction: row; //pra ficar horizontal
    align-items: center;
    justify-content: center;
    border-width: 0;
    width: 50px;
    height: 40px;
    margin-left: 80%;
    color: ${COLORS.white};
    font-weight: 500;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: ${COLORS.blue3};
    cursor: pointer;
`;

export const TableContainer = styled.div`
    padding: 10px;
    box-shadow: 1px 3px 9px ${COLORS.black};
    border-width: 0;
    border-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 100%;
    color: ${COLORS.white};
    margin-left: 2%;
    margin-right: 2%;
`;

export const Actions = styled.div``;

export const Del = styled.a`
    color: ${COLORS.red};
    font-size: 15px;
    margin-left: 7px;
`;

export const Edit = styled.a`
    font-size: 15px;
`;