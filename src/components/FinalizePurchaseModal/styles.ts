import styled from 'styled-components';

interface ContainerProps{
    colorTheme: string;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;

    font-family: 'Roboto', sans-serif;

    h1{ 
        font-size: 5rem;
        padding: 2rem;
        color: ${(props) => props.colorTheme};
    }
    
    h2{ 
        font-size: 2.8rem;
        padding: 2rem;
    }
`;
