import styled from 'styled-components';

interface ContainerProps{
    isOpenCart: boolean;
}
export const Container = styled.div<ContainerProps>`
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 70vw 25vw;
    grid:
        "searchbar" 
        "products";
    gap: 1rem;
    

    div.bottom-container{
        grid-area: products;
        display: flex;
        justify-content: space-between;
    }

    div.searchbar{
        grid-area: searchbar;

    }
    div.products-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
        align-items: center;
        margin: 0;
        
    }

    div.cart{
        background-color: white;
        margin-right: 3rem;
    }

    @media(max-width: 830px){
            
        justify-content: center;
        margin: 0 auto;
        gap: 1rem;
        div.products-container{
            display: ${(props) => props.isOpenCart ? "none" : "flex"};
        }
        div.bottom-container{
            width: 100vw;
            align-items: center;
        }
        div.cart{
            display: ${(props) => props.isOpenCart ? "flex" : "none"};
            width: 100%;
            margin: 0 1rem;
        }

        div.searchbar{
            display: fixed;
            height: 10vh;
        }
    }

    @media(max-width: 450px){
           
        div.searchbar{ 
            height: 15vh;
        }
    
    }
`;
