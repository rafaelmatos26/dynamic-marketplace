import styled from 'styled-components';

export const Container = styled.div`
    width: 25rem;
    height: 35rem;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 1rem;

    font-family: 'Roboto', sans-serif;

    box-shadow: 0px 0px 1rem #A8A8A8;
    border-radius: 0.3rem;
    
    img{
        width: 22rem;
        height: 22rem;
        margin: 0.5rem auto;
        padding: 0.5rem;
    }

    h1{ 
        font-size: 2.2rem;
        font-weight: 300;
        margin-left: 1rem;
    }

    h2{ 
        font-size: 2.2rem;
        margin-left: 1rem;
    }

    h3{ 
        font-size: 1.6rem;
        color: #ADAFB4;
        text-decoration: line-through;
        margin-left: 1rem;
    }

    button{
        height: 4.1rem;

        display: flex;
        align-items:center;
        justify-content: center;
        gap: 1rem;
        
        border: none;
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 1.8rem;
        font-weight: 500;
        
    }
    button.unavailable-product{
        background-color:#ADAFB4;
    }

    button.available-product{
        background-color:#6CC947;
    }

`;
