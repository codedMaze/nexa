import styled from "styled-components";
import { color } from "../../asset/color/color";

export const Container = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 260px;
  right: 0;
  max-height: 64px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px 8px 0;
  background-color: ${color.white};
`;

export const InputWrapper = styled.div`
  position: relative;
  margin: 10px 12px;
  background-color: ${color.cultured};
  border-radius: 8px;
  display: flex;
  max-width: 451px;
  width: 100%;
`;

export const SearchIcon = styled.img`
  margin-top: 3px;
  padding: 8px;
  color: ${color.davySGray};
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${color.cultured};
`;

export const LogOut = styled.button`
  color: #3a3a49;
  margin-left: auto;
  font-family: "Work Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.36px;
  background-color: transparent;
`;
