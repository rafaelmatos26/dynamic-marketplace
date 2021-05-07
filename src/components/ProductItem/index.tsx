// Components
import { Container } from "./style";

// Medias
import { AiFillPlusSquare, AiFillFrown} from "react-icons/ai";

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

interface ProductItemProps{
    product: Product;
    addToCart: (id: number)=> void;
}

export function ProductItem({product, addToCart}: ProductItemProps){

    function formatCurrency(value: number){
        return new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }
    return(
        <Container>
            <img 
                src={product.urlImage} 
                alt={product.name}/>

            <h1>
                {product.name}
            </h1>

            <h3>
                {formatCurrency(product.oldPrice)}
            </h3>

            <h2>
                {formatCurrency(product.price)}
            </h2>

            {product.stock !==0 ?
                <button 
                    className="available-product"
                    type="button" 
                    onClick={() => addToCart(product.id)}
                >
                    Adicionar ao Carrinho
                    <AiFillPlusSquare
                        size="2rem"
                        color="#ffffff"/>
                </button>
                :
                <button     
                    className="unavailable-product"
                    type="button" 
                    onClick={() => addToCart(product.id)}
                >
                    Produto indisponível
                    <AiFillFrown
                        size="2rem"
                        color="#ffffff"/>
                </button>
            }
        </Container>
    );
}