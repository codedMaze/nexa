import styled from "styled-components";
import { color } from "../../asset/color/color";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: ${color.romanSilver};

  font-family: "Work Sans";
  font-size: 18.747px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.375px;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const FilterButton = styled.div`
  padding: 7px 10px;
  background-color: rgba(58, 53, 65, 0.04);
  display: flex;
  align-items: center;
  color: ${color.romanSilver};
  font-family: "Inter";
  font-feature-settings: "clig" off, "liga" off;
  border-radius: 4.227px;
  height: 36px;
`;

export const ExportButton = styled.div`
  background-color: rgba(58, 53, 65, 0.04);
  padding: 4px 21px 4px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 4.227px;
  height: 36px;
  color: ${color.romanSilver};
`;
