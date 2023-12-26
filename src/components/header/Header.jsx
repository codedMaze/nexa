import React from "react";
import {
  ExportButton,
  FilterButton,
  RightWrapper,
  Title,
  Wrapper,
} from "./header.style";

const Header = () => {
  return (
    <Wrapper>
      <Title>Quotes</Title>
      <RightWrapper>
        <FilterButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            style={{ marginRight: "16px" }}
          >
            <path
              d="M15.1262 0.834534H1.20483C1.14606 0.838979 1.09118 0.865048 1.0512 0.907511C1.01122 0.949973 0.989097 1.00569 0.989272 1.06348V1.82074C0.988732 1.89836 1.00394 1.97531 1.03401 2.04712C1.06407 2.11892 1.1084 2.18415 1.16441 2.239L6.55335 7.52228V11.925L9.80916 13.5144V7.51347L15.1981 2.2302C15.3012 2.12117 15.3589 1.97822 15.3598 1.82955V1.06348C15.3598 1.00276 15.3352 0.944524 15.2914 0.901589C15.2476 0.858654 15.1882 0.834534 15.1262 0.834534Z"
              stroke="#878790"
              stroke-width="0.845324"
            />
          </svg>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0.127px",
              width: "45px",
            }}
          >
            Filter
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M6.26033 7.86911L10.1404 11.7407L14.0204 7.86911L15.2123 9.06102L10.1404 14.133L5.06842 9.06102L6.26033 7.86911Z"
              fill="#878790"
            />
          </svg>
        </FilterButton>

        <ExportButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M5.16904 2.29855C4.72065 2.29855 4.29063 2.47667 3.97357 2.79373C3.65651 3.11079 3.47839 3.54081 3.47839 3.9892V17.5144C3.47839 17.9628 3.65651 18.3928 3.97357 18.7098C4.29063 19.0269 4.72065 19.205 5.16904 19.205H15.3129C15.7613 19.205 16.1913 19.0269 16.5084 18.7098C16.8255 18.3928 17.0036 17.9628 17.0036 17.5144V7.3705L11.9316 2.29855M11.0863 3.56654L15.7356 8.21582H11.0863M7.64584 10.9378H13.6223V16.9142L11.8302 15.1221L9.43793 17.5144L7.04566 15.1221L9.43793 12.7383"
              fill="#878790"
            />
          </svg>
          <p>Export</p>
        </ExportButton>
      </RightWrapper>
    </Wrapper>
  );
};

export default Header;
