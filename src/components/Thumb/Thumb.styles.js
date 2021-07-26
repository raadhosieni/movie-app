import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    object-fit: cover;
    border-radius: 20px;
    transition: all 0.4s;
    animation: animateThumb 0.5s;

    :hover {
        opacity: 0.7;
        transform: scale(1.1);
    }

    @keyframes animateThumb {
        from {opacity: 0;}
        to {opacity: 1;}
    }
`;