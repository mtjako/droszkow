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
    padding: 4px 0;
  }
  table{
    width: 100%;
    tr{
      td{
        padding: 4px 0;
        &:nth-child(1){
          width: 60px;
          @media(min-width: 500px){
            width: 120px;
          }
          text-align: left;
        }
        &:nth-child(2){
          width: calc(100% - 260px);
          text-align: left;
          padding: 4px;
        }
        &:nth-child(3){
          width: 75px;
          @media(min-width: 500px){
            width: 140px;
          }
          text-align: right;

        }
      }
    }
  }
`;

const Day = ({ name,data }) => {
  return (
    <DayWrap>
      <h2 className="">{name}</h2>
      <table cellSpacing="0" cellpadding="0">
        {data.tbody.map((item, i) => (
          <tr key={i}>
            {item.body.map((item, i) => (
              <td className="" key={i}>
                <p>{item.value}</p>
              </td>
            ))}
          </tr>
        ))}
      </table>
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
