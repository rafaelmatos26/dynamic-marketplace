import styled from 'styled-components';

interface ContainerProps{
    colorTheme: string;
}

export const Container = styled.div<ContainerProps>`

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 1rem;

    color: #000;

    img{ 
        width: 8rem;
        margin-left: 1rem;
        box-shadow: 0px 0px 1rem #A8A8A8;
    }

    div.center-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div.change-amount{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        h1{ 
            font-weight: 300;
            font-size: 2rem;
        }
        input{
            width: 3rem;
            height: 3rem;
            margin: 0.5rem 1rem;

            color: #000000;
            border: 0.1rem solid #A8A8A8;

            font-family: 'Roboto', sans-serif;
            font-size: 1.5rem;
            font-weight: 500;
            text-align: center;

        }

        button{
            border: none;
            background-color:#ffffff;
            color: ${(props) => props.colorTheme};
        }
    }

   

    h2{ 
        font-size: 1.6rem;
    }

   

    button.remove-item{
        border: none;
        color: ${(props) => props.colorTheme};
        background-color:#ffffff;

    }

    @media(max-width: 1133px){
        img{
            width: 6rem;
        }
    }

    @media(max-width: 1000px){
        div.center-container{
            h1{
                font-size:1.5rem;
            }

            input{
                width: 2.2rem;
                height:2.2rem;
                font-size: 1rem;
            }

            button{
                width: 1rem;
            }
        }

        h2{
            font-size: 1.2rem;
        }

        button{
            width: 1rem;
        }
    }

    @media(max-width: 830px){
        img{
            width: 10rem;
        }

        div.center-container{
            
            h1{
                font-size:2.5rem;
            }
            input{
                width: 3.5rem;
                height:3.5rem;
                font-size: 2rem;
            }
            button{
                width: 3rem;
            }
        }

        h2{
            font-size: 2.2rem;
        }

        button{
            width: 3rem;
        }

    }


    @media(max-width: 450px){

        img{
            width: 6rem;
        }

        div.center-container{
            h1{
                font-size:1.8rem;
            }

            input{
                width: 2.5rem;
                height:2.5rem;
                font-size: 1.2rem;
            }

            button{
                width: 1.5rem;
            }
        }

        h2{
            font-size: 1.2rem;
        }

        button{
            width: 2rem;
        }

    }

    @media(max-width: 285px){
        img{
            width: 4rem;
        }

        div.center-container{
            
            h1{
                font-size:1.8rem;
            }

            input{
                width: 1.8rem;
                height:1.8rem;
                font-size: 0.8rem;
            }

            button{
                width: 1.5rem;
            }
        }

        h2{
            font-size: 0.8rem;
        }

        button{
            width: 1rem;
        }
    }
`;