import styled from "styled-components";
import { lightTheme, darkTheme } from '../../styles/theme';

const Wrapper = styled.li`
    position: relative;
    margin-left: 40px;
    padding-bottom: 24px;
    &::before{
        position: absolute;
        content: '';
        left: -27px;
        top: 5px;
        height: 100%;
        width: 6px;
        background-color: ${({ date,theme }) => date ? theme.grey400 : theme.grey100};
        transition: background-color 0.25s linear;
    }
    &::after{
        position: absolute;
        content: '';
        left: -40px;
        top: 0;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        border: 4px solid ${({ theme }) => theme.grey050};
        background-color: ${({ date,theme }) => date ? theme.grey600 : theme.grey400};
        transition: 0.25s linear;
    }
    &:last-child{
        &::before{
            display: none;
        }
    }
`;

const TimeDate = styled.p`
    line-height: 32px;
    color: ${({ theme }) => theme.grey500};
    font-weight: 700;
`;
const Name = styled.p`
`;

export const Point = ({data}) => {
  return (
    <Wrapper date={Date.now() - Date.parse(data.date)>0}>
        <TimeDate>{data.date ? data.date.split(' ')[0] : 'Nieznana data'}</TimeDate>
        <Name>{data.name}</Name>
    </Wrapper>
  );
};
