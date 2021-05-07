// Libs
import { useEffect, useState } from "react";
import { api } from "../../services/api";

// Components
import { ProductItem } from "../../components/ProductItem";
import { SearchBar } from "../../components/SearchBar";
import {FinalizePurchaseModal} from '../../components/FinalizePurchaseModal';
import { Container } from "./styles";
import { Cart } from "../../components/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Medias
import ReactLoading from 'react-loading';

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

interface PokemonInformations{
    pokemon: {
        name: string;
        url: string;
    }
}

interface PokemonProduct{
    data:{
        id: number;
        name: string;
        sprites: Sprites;
    }
}

interface Sprites{
    front_default: string;
}

interface DefaultPageProps{
    colorTheme: string;
    urlImage: string;
    title: string;
    idType: string;
}

export function DefaultPage({colorTheme, urlImage, title, idType}: DefaultPageProps){
    const [products, setProducts]       = useState<Product[]>([]);
    const [isLoaded, setIsLoaded]       = useState(false);
    const [cart, setCart]               = useState<Product[]>([]);
    const [isOpenCart, setIsOpenCart]   = useState(false);
    const [modalIsOpen,setModalIsOpen]  = useState(false);
    const [cashback, setCashback]       = useState(0);

    useEffect(()=>{
        async function getProducts(){
            const response = await api.get(`https://pokeapi.co/api/v2/type/${idType}/`);

            const pokemonArray = response.data.pokemon;

            const pokemonInformations = pokemonArray.map((pokemon: PokemonInformations) => {
                return api.get(pokemon.pokemon.url);
            });
            
            const pokemon = await Promise.all(pokemonInformations) as PokemonProduct[];
            
            const pokemonProducts = pokemon.map((poke: PokemonProduct) => {
                const pokemonProps = {
                    id: 0,
                    name: "",
                    urlImage:"",
                    price: 0,
                    oldPrice: 0,
                    stock: 0,
                    amount: 0,
                    show: true
                }
                pokemonProps.id = poke.data.id;
                pokemonProps.name = poke.data.name;
                pokemonProps.urlImage = poke.data.sprites.front_default
                pokemonProps.price = Math.random() * 100;
                pokemonProps.oldPrice = pokemonProps.price + (Math.random() * 10);
                pokemonProps.stock = Math.trunc(Math.random() * 10);

                return pokemonProps;
            });
            setProducts([...pokemonProducts]);
            setIsLoaded(true);
        }
        getProducts();

      }, []);

    function searchProduct(name: string){
        setProducts(products.map((product: Product) => {
            return {...product, show: product.name.includes(name)}
        }));
    }

    function addToCart(id: number){

        const product = products.filter((product: Product) =>{
            return product.id === id;
        });

        const verifyStock = product[0].stock >= product[0].amount + 1;

        if(verifyStock){
            const updatedCart = [...cart];
            const productExists = updatedCart.find(product => product.id === id);

            const updatedProducts = products.map((product: Product) => {
                if(product.id === id){
                    product.amount += 1;
                }
                return product;
            });
            
            if(productExists){
                productExists.amount = productExists.amount + 1 ;
                setCart(updatedCart);
                setProducts(updatedProducts);
            }else{
                setCart([...cart, {...product[0], amount: 1}]);
                setProducts(updatedProducts);
            }
        }else{
            toast.error('Quantidade solicitada fora de estoque!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
        if(!isOpenCart){
            setIsOpenCart(true);
        }
       
    }

    function removeCart(id: number){
        const updatedCart =  [...cart];
        const cartIndex = updatedCart.findIndex(product => product.id === id);

        const updatedProducts = products.map((product: Product) => {
            if(product.id === id){
                product.amount = 0;
            }
            return product;
        });
        
        if(cartIndex >= 0){
            updatedCart.splice(cartIndex, 1);
            setCart(updatedCart);
            setProducts(updatedProducts);
        }

    }

    function removeAmount(id: number){
        const product = products.filter((product: Product) =>{
            return product.id === id;
        });

        const verifyAmount = product[0].amount === 1;
        if(verifyAmount){
            const updatedProducts = products.map((product: Product) => {
                if(product.id === id){
                    product.amount = 0;
                }
                return product;
            });

            const updatedCart = cart.filter((productCart: Product) => {
                return productCart.id !== id;
            });

            setProducts(updatedProducts);
            setCart(updatedCart);
        }else{
            const updatedCart = [...cart];
            const productExists = updatedCart.find(product => product.id === id);

            const updatedProducts = products.map((product: Product) => {
                if(product.id === id){
                    product.amount -= 1;
                }
                return product;
            });
            
            if(productExists){
                productExists.amount = productExists.amount -1 ;
                setCart(updatedCart);
                setProducts(updatedProducts);
            }
        }
    }

    function addAmount(id: number){
        const product = products.filter((product: Product) =>{
            return product.id === id;
        });

        const verifyStock = product[0].stock >= product[0].amount + 1;

        if(verifyStock){
            const updatedCart = [...cart];
            const productExists = updatedCart.find(product => product.id === id);

            const updatedProducts = products.map((product: Product) => {
                if(product.id === id){
                    product.amount += 1;
                }
                return product;
            });
            
            if(productExists){
                productExists.amount = productExists.amount + 1 ;
                setCart(updatedCart);
                setProducts(updatedProducts);
            }
        }else{
            toast.error('Quantidade solicitada fora de estoque!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    function onOpenCart(){
        setIsOpenCart(!isOpenCart);
    }

    function onRequestClose(){
        setModalIsOpen(!modalIsOpen);
    }

    function onFinalizePurchase(cashback: number){
        if(!cart.length){
            toast.error('Adicione produtos ao carrinho para realizar a compra.', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }else{
            setCashback(cashback);
            const updatedProducts = products.map((product: Product) => {
                cart.map((productCart: Product) => {
                    if (productCart.id === product.id){
                        product.amount = 0;
                    }
                    return product;
                })
                return product;
            });

            setCart([]);
            setProducts(updatedProducts);
            setModalIsOpen(true);
        }

        
    }

    
    return(
        <Container isOpenCart={isOpenCart}>

            <div className="searchbar">
                <SearchBar
                    urlImage={urlImage}
                    title={title}
                    colorTheme={colorTheme}
                    onSearch={searchProduct}
                    onOpenCart={onOpenCart}
                />
            </div>
           
            <div className="bottom-container">
                <div className="products-container">
                    { isLoaded ?
                        
                        products.map((product: Product)=>{
                            return(
                                product.show ?
                                    <ProductItem
                                        product={product}
                                        addToCart={addToCart}
                                    />
                                : null

                                
                            );
                        })
                        
                        :
                        <ReactLoading 
                            type={"spin"} 
                            color={colorTheme} 
                            height={'12%'} 
                            width={'12%'} 
                        />
                    }

                </div>
                {isOpenCart?
                    <div className="cart">
                        <Cart 
                            colorTheme={colorTheme}
                            cartProducts={cart}
                            removeCart={removeCart}
                            removeAmount={removeAmount}
                            addAmount={addAmount}
                            onFinalizePurchase={onFinalizePurchase}
                        />
                    </div>
                : null}

                <FinalizePurchaseModal
                    isOpen={modalIsOpen}
                    onRequestClose={onRequestClose}
                    cashback={cashback}
                    colorTheme={colorTheme}/>
                
            </div>
            <ToastContainer/>
        </Container>
    );
}