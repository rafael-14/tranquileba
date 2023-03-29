import styled from "styled-components";

export const GridDiv = styled.div`
  display: flex;
  grid-gap: 3.2rem;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  padding-top: 100px;
`;

export const CardContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.blue};
  box-shadow: 0px 0px 15px 0px;
  max-width: 300px;
  margin-bottom: 8px;
  position: relative;

  .favorite-button {
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 1;
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
  margin: 1rem;
  margin-top: 0.5rem;

  > div h3 {
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 28px;
    margin-bottom: 0.5rem;
  }
`;
