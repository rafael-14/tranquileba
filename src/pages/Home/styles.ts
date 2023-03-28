import styled from "styled-components";

export const HomeContainer = styled.main`
  padding-top: 60px;
`;

export const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    font-size: 2.2rem;
    color: ${({theme}) => theme.colors.yellow};
    margin: 0;
  }

  > img {
    margin-top: 40px;
    width: 400px;
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
`;
