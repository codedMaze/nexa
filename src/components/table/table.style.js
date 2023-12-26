import styled from "styled-components";
import { color } from "../../asset/color/color";

export const TableWrapper = styled.table`
  margin-top: 26px;
  width: 100%;
  border-collapse: collapse;

  thead {
    th {
      color: ${color.romanSilver};

      /* Body */
      font-family: "Work Sans";
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.26px;
      text-align: left;
    }
  }
  tbody {
    tr {
      background-color: ${color.white};
      border-radius: 5px;
      border: 1px solid #e9eff4;
      margin-bottom: 16px;

      td {
        color: #111;

        /* Body */
        font-family: Work Sans;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.26px;
        min-width: 150px;
        padding: 6px 20px 6px 0;
        border-bottom: 6px solid ${color.cultured};

        &:nth-child(1) {
          min-width: 30px;
        }

        /* &:nth-child(7) {
          background-color: #fdc03a;
          padding: 9px 25px;
          width: 135px;
        } */
      }
    }
  }
`;
