import styled from 'styled-components';
;
interface ContainerProps{
    colorTheme: string;
}
export const Container = styled.div<ContainerProps>`
  
    width: 100%;
    height: 6rem;
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${(props) => props.colorTheme};

    img{
        height:4.8rem;
        margin-left: 5rem;
    }

    div.search{
        display: flex;
        background-color: #ffffff;

        input{ 
            width: 50rem;
            height: 3.5rem;

            border: none;
            padding: 0.5rem;
            
            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
        }

    }

    button{
        width: 2rem;
        border: none;
        background-color: transparent;
        
    }

    @media(max-width: 885px){
        justify-content: center;

        img{
            height:32px;
            margin-left: 1rem;
        }
        div.search{
            margin-left: 2rem;
        }
    }

    @media(max-width: 780px){
        div.search{
            width:30rem;
            input{ 
                width: 27rem;
            }
        }
    }

    @media(max-width: 580px){
        justify-content: center;
        img{
            margin-left: 2rem;
        }
        div.search{
            width:20rem;
            margin-left: 3rem;
            input{ 
                width: 17rem;
            }
        }
    }

  
    @media(max-width: 450px){
        height: 10rem;
        gap: 0.5rem;
        flex-wrap:  wrap;

        img{
            margin: 0 auto;
            order: 1;
        }
        
        div.search{
            width: 80VW;
            margin: 0 10vw;
            order: 3;
            input{ 
                width: 75vw;
            }
        }
        button{
            order: 2;
            margin: 0 auto;
        }
    }
`;
