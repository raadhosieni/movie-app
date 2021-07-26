import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background: var(--darkGrey);
    padding: 0 20px;
    height: 100px;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    height: 55px;
    background: var(--medGrey);
    width: 100%;
    color: var(--white);
    border-radius: 40px;
    margin: 0 auto;
    position: relative;

    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
    }

    input {
        font-size: var(--fontBig);
        position: absolute;
        left: 0;
        background: transparent;
        border: 0;
        width: 95%;
        height: 40px;
        margin: 8px 0;
        padding: 0 0 0 60px;
        color: var(--white);

        :focus {
            outline: none;
        }
    }
`;