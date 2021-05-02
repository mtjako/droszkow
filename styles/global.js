import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* GENERAL */
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${({ theme }) => theme.grey050};
        color: ${({ theme }) => theme.grey800};
        transition: all 0.25s linear;
    }

    /* TEXT */
    h1{
        font-size: 48px;
        font-weight: 700;
        color: ${({ theme }) => theme.grey800};
    }
    h2{
        font-size: 32px;
        font-weight: 700;
        color: ${({ theme }) => theme.grey800};
    }
    h3{
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.grey800};
    }
    p{
        font-size: 20px;
        font-weight: 500;
        color: ${({ theme }) => theme.grey700};
    }
    .hmeta{
        font-size: 16px;
        font-weight: 900;
        color: ${({ theme }) => theme.grey600};
        text-transform: uppercase;
    }
    .meta{
        font-size: 16px;
        font-weight: 900;
        color: ${({ theme }) => theme.grey500};
    }
    
    /* LAYOUT */
    hr{
        background-color: ${({ theme }) => theme.grey300};
        height: 4px;
        border: none;
    }
`;
