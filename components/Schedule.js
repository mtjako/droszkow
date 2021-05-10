import styled from "styled-components";
import { pallete } from "../styles/theme";

const Wrapper = styled.div`
  max-width: 1024px;
  padding: 24px;
  margin: 0 auto;
`;

const DayWrap = styled.div`
  margin-bottom: 20px;
  h2{
    padding: 12px 0;
  }
`;

const Item = styled.div`
  display: grid;
  margin-bottom: 12px;
  grid-column-gap: 16px;
  grid-template-columns: 50px 1fr;
  .time{
    grid-column: 1/2;
    grid-row: span 2;
    text-align: center;
    p{
      font-weight: 600;
      color: ${({ theme }) => theme.grey500};
    }
    p:nth-child(1){
      position: relative;

      &::after{
        content: '';
        position: absolute;
        bottom: -2px;
        left: 15px;
        width: 20px;
        height: 2px;
        background-color: ${({ theme }) => theme.grey300};
      }
    }
  }
  .title{
    grid-column: 2/3;
    font-weight: 700;
  }
  .room{
    grid-column: 2/3;
    font-weight: 600;
    color: ${({ theme }) => theme.grey400};
    &::first-letter{
      text-transform: uppercase;
    }
  }
`;

const Day = ({ name,data }) => {
  return (
    <DayWrap>
      <h2 className="">{name}</h2>
        {data.tbody.map((item, i) => (
          <Item key={i}>
            {item.body.map((item, i) => {
              if(i==0){
                const text = item.value.split('-');
                return(<div className="time" key={i}><p>{text[0]}</p><p>{text[1]}</p></div>)
              }
              if(i==1){
                return(<p className="title" key={i}>{item.value}</p>)
              }
              return(<p className="room" key={i}>{item.value}</p>)
            })}
          </Item>
        ))}
    </DayWrap>
  );
};

export const Schedule = ({ blok }) => {
  return (
    <Wrapper>
      <Day name="Poniedziałek" data={blok.monday} />
      <Day name="Wtorek" data={blok.tuesday} />
      <Day name="Środa" data={blok.wednesday} />
      <Day name="Czwartek" data={blok.thursday} />
      <Day name="Piątek" data={blok.friday} />
    </Wrapper>
  );
};
