import styled from 'styled-components';

interface ContainerProps{
    colorTheme: string;
}

export const Container = styled.div<ContainerProps>`
    
    width: 30vw;
    height: 90vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;

    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    box-shadow: 0px 0px 1rem #A8A8A8;

    div.cart-top{
        width: 100%;

        display: flex;
        align-items: center;
        justify-content:center;

        background-color: ${(props) => props.colorTheme};
        
        h1{
            font-size: 3rem;
        }
    }

    div.cart-products{
        overflow-x: auto;
    }

    div.resume-purchase{
        display: flex;
        flex-direction: column;

        border-top: solid 0.1rem #A8A8A8;

        span{ 
            height: 4rem;

            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 1rem;

            font-family: 'Roboto', sans-serif;
            font-size: 2.2rem;
            font-weight: 500;
            padding-left: 1rem;
            color: #A8A8A8;

            h2{
                font-size: 2.2rem;
            }
        }

        button{
            width: 100%;
            height: 4rem;

            border: none;
            border-radius: 0;

            color: #ffffff;
            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
            font-weight: 500;

            background-color: ${(props) => props.colorTheme};
        }
    }

    @media(max-width: 830px){
        width: 100%;
    }
    
`;
