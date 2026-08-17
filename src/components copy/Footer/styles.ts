import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    height: 4rem;
    background: ${(props) => props.theme['gray-900']};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Description = styled.footer`
    color: ${(props) => props.theme['gray-300']};
`