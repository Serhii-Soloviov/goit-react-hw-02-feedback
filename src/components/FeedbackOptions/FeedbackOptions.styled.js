import styled from 'styled-components';
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const FeedbackButtons = styled.button`
  color: #fff;
  padding: 15px 25px;
  border-radius: 100px;
  background-color: #4c43cd;
  background-image: radial-gradient(
      93% 87% at 87% 89%,
      rgba(0, 0, 0, 0.23) 0%,
      transparent 86.18%
    ),
    radial-gradient(
      66% 87% at 26% 20%,
      rgba(255, 255, 255, 0.41) 0%,
      rgba(255, 255, 255, 0) 69.79%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 2px 19px 31px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  font-size: 16px;

  border: 0;

  cursor: pointer;
`;
