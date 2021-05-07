// Libs
import { useRef } from "react";

// Components
import { Container } from "./styles";

// Media
import { BiSearchAlt } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

// Interfaces
interface SearchBarProps{
    urlImage: string;
    title: string;
    colorTheme: string;
    onSearch: (name: string) => void;
    onOpenCart: () => void;
}

export function SearchBar({urlImage, title, colorTheme, onSearch, onOpenCart}: SearchBarProps){
    const iconSearchStyles = {  margin: "auto", };
    const iconCartStyles = {  marginLeft: "2rem", };

    const text = useRef<HTMLInputElement>(null);
   
    return(
        <Container colorTheme={colorTheme}>
            
            <img src={urlImage} alt={title}/>
            <div className="search">
                <input type="text" ref={text} onChange={()=> onSearch(text.current ? text.current.value:"")}/>
                <BiSearchAlt 
                    size="2rem" 
                    color={colorTheme}
                    style={iconSearchStyles}
                />
            </div>
            
            <button type="button" className="cartButton" onClick={() => onOpenCart()} >
                <FaShoppingCart
                    size="2rem" 
                    color="#ffffff"
                    style={iconCartStyles}
                />
            </button>
            
        </Container>
    );
}