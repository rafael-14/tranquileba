import styled from "styled-components";

export const FavoritesContainer = styled.main`
  padding-top: 80px;

  > h1 {
    margin-bottom: 8px;
    font-size: 48px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.green};
    text-align: center;
  }
`;

export const NotFavoritesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    margin-top: 45px;
    font-size: 2.2rem;
    color: ${({theme}) => theme.colors.yellow};
    margin: 0;
  }

`;
