// Components
import Modal from 'react-modal';
import { Container } from './styles';

// Medias
import {AiOutlineClose} from "react-icons/ai";

// Interfaces
interface FinalizePurchaseModalProps{
    isOpen: boolean;
    cashback: number;
    onRequestClose: () => void;
    colorTheme: string;
}

// Functions
function formatCurrency(value: number){
    return new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

export function FinalizePurchaseModal({isOpen, cashback, onRequestClose, colorTheme}: FinalizePurchaseModalProps){
   
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <AiOutlineClose/>
            </button>
            <Container
                colorTheme={colorTheme}>
                <h1>Parabéns!!!</h1>
                <h2>Você ganhou {formatCurrency(cashback)} de cashback</h2>
            </Container>

        </Modal>
    );
}