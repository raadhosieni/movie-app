import styled from 'styled-components';

export const Wrapper = styled.button`
    width: 25%;
    display: block;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    border: 0;
    outline: none;
    background: var(--darkGrey);
    color: var(--white);
    margin: 20px auto;
    font-size: var(--fontBig);
    cursor: pointer;
    transition: all .3s;

    :hover {
        opacity: .8;
    }
`;