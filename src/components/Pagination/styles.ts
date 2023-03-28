import styled from "styled-components";

export default styled.div`
  margin-top: 24px;
  justify-content: center;
  display: flex;
  align-items: center;
  a {
    color: #fff;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border-radius: 8px;
    margin-bottom: 8px;
    &:hover {
      background: ${({ theme }) => theme.colors.yellow};
      transition: all 0.2s ease-in;
      color: ${({ theme }) => theme.colors.background};
    }
  }
  .active {
    background: ${({ theme }) => theme.colors.blue};
    color: #fff;
    border-radius: 8px;
  }

  .ellipsis {
    cursor: default;
    padding: 8px 16px;
  }
`;
