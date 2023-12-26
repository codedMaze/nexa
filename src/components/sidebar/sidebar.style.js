import styled from "styled-components";
import { color } from "../../asset/color/color";

export const Container = styled.div`
  background-color: ${color.white};
  border-right: 1px solid transparent;
  margin-top: 0;
  z-index: 100;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  transition: all 0.2s ease;
  width: 260px;
  display: flex;
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: visible;
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;
export const HeaderWrapper = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  /* max-height: 24px; */
  /* width: 49px; */
  /* height: 100%; */
  padding: 24px 13px 18px 20px;
`;

export const Title = styled.h2`
  text-align: left;
  color: ${color.davySGray};
  height: 49px;
  padding: 9px 20px 7px 0;
  font-family: Urbanist;
  font-size: 41.221px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.824px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 16px;
`;

export const MenuItem = styled.li`
  display: flex;
  padding: 8px 22px 8px 22px;
  gap: 8px;
  align-items: center;
  color: ${color.davySGray};

  &:hover {
    color: ${color.white};
    border-radius: 0px 50px 50px 0px;
    background: linear-gradient(270deg, #264cc8 0%, #31a3fa 100%);
    box-shadow: 0px 4px 8px -4px rgba(58, 53, 65, 0.42);
  }
`;

export const Icon = styled.p`
  color: ${color.davySGray};
  width: 25px;
`;

export const ListTitle = styled.h5`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
`;

export const Notification = styled.div`
  display: flex;
  margin-left: auto;
  padding: 3px 4px;
  align-items: center;
  border-radius: 16px;
  background: #ff4c51;
  color: ${color.white};
  justify-self: flex-end;
  /* align-self: flex-end; */
`;
export const NotParagraph = styled.p`
  padding: 0 6px;
  font-feature-settings: "clig" off, "liga" off;
  /* Light/Components/Chip */
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 138.462% */
  letter-spacing: 0.16px;
`;
