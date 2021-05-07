// Components
import { Container } from "./styles";

// Medias
import {
    MdDelete,
    MdAddCircleOutline,
    MdRemoveCircleOutline,
  } from 'react-icons/md';
  
// Interfaces
interface ProductItemCartProps{ 
    id: number;
    name: string;
    price: number;
    urlImage: string;
    amount: number;
    colorTheme: string;
    removeCart: (id: number) => void;
    addAmount: (id: number)=> void;
    removeAmount: (id: number)=> void;
}

export function ProductItemCart({id, name, price, urlImage,amount, colorTheme, removeCart, addAmount, removeAmount}: ProductItemCartProps){
    
    function formatCurrency(value: number){
        return new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }


    return(
        <Container  colorTheme={colorTheme}>
            <img 
                src={urlImage} 
                alt={name}/>
                
            <div className="center-container">
                <h1>{name}</h1>

                <div className="change-amount" >
                    <button
                        type="button"
                        disabled={amount <= 1}
                        onClick={() => removeAmount(id)}
                    >
                        <MdRemoveCircleOutline size={20} />
                    </button>

                    <input
                        type="text"
                        readOnly
                        value={amount}
                    />
                    
                    <button
                        type="button"
                        onClick={() => addAmount(id)}
                    >
                        <MdAddCircleOutline size={20} />
                    </button>
                </div>
            </div>
            
            <h2>{formatCurrency(price * amount)}</h2>
            <button
                type="button"
                className="remove-item"
                onClick={() => removeCart(id)}
            >
                <MdDelete size={20} />
            </button>
        </Container>
    );
}