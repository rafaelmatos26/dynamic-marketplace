//Components
import { Container } from "./styles";
import {ProductItemCart} from '../ProductItemCart';

// Interfaces
interface Product{
    id: number;
    name: string;
    price: number;
    oldPrice: number;
    urlImage: string;
    stock: number;
    amount:number;
    show: boolean;
}

interface CartProps{
    colorTheme: string;
    cartProducts: Product[];
    removeCart: (id: number) => void;
    removeAmount: (id: number) => void;
    addAmount: (id: number) => void;
    onFinalizePurchase: (cashback: number) => void;
}

export function Cart({
    colorTheme,
    cartProducts,
    removeCart, 
    removeAmount,
    addAmount,
    onFinalizePurchase
}: CartProps){

    function formatCurrency(value: number){
        return new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }
    
    const total = cartProducts.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      },0);

    const totalOldPrice = cartProducts.reduce((sumTotal, product) => {
        return sumTotal + product.oldPrice * product.amount;
      }, 0)

    return(
        <Container colorTheme={colorTheme}>

            <div className="cart-top ">
                <h1>
                    Carrinho
                </h1>
            </div>

            <div className="cart-products">
                {cartProducts.map((cartProduct) => {
                    return(
                        <ProductItemCart
                            id={cartProduct.id}
                            name={cartProduct.name}
                            price={cartProduct.price}
                            urlImage={cartProduct.urlImage}
                            amount={cartProduct.amount}
                            removeCart={removeCart}
                            removeAmount={removeAmount}
                            addAmount={addAmount}
                            colorTheme={colorTheme}
                        />
                    );
                })}
            </div>

            <div className="resume-purchase">
                <span>
                    <h2>
                        Total:
                    </h2>
                    {formatCurrency(total)}
                </span>
                
                <button 
                    type="button"
                    onClick={() => onFinalizePurchase(totalOldPrice - total)}>
                    Finalizar Compra
                </button>
            </div>
            
        </Container>
    );
}