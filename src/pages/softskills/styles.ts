import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
`

export const Title = styled.h1`
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    padding: 0 2rem;
    max-width: 1200px;
    margin: 0 auto;
`

export const Card = styled.div`
    background: ${({ theme }) => theme['gray-800']};
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0px 8px 20px #ffffff1a;
    }
`

export const CardTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.white};
`

export const CardDescription = styled.p`
    font-size: 1rem;
    line-height: 2rem;
    color: ${({ theme }) => theme['gray-300']};
    text-align: justify;

`