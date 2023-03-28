import styled from "styled-components";

export const HeaderTag = styled.header`
  padding: 24px 8px;
  height: 150px;
  background: ${({theme}) => theme.colors.blue};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  > h1 {
    font-size: 3.6rem;
    color: ${({theme}) => theme.colors.yellow};
    margin: 0;
  }

  > a {
    text-decoration: none;
  }

  > a button {
    height: 3.2rem;
    border-radius: 8px;
    font-size: 1.3rem;
    font-weight: 600;
    background: ${({theme}) => theme.colors.green};
    color: ${({theme}) => theme.colors.background};
    padding: 0 28px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    > img {
      width: 24px;
      margin-right: 12px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ImgDiv = styled.div`
  margin-top: -130px;

  > img {
    width: 300px;
    display: block;
    margin: 0 auto;
  }
`;
