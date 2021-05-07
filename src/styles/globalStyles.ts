import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 10px;
  }
  
  
  html, body, #root, .App{ 
    height: 100%;
  }

  .react-modal-overlay{
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right:0;

        display: flex;
        align-items: center;
        justify-content: center;

    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background-color: #fff;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.5);
        }
    }
`;
