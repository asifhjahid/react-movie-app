import styled from 'styled-components';


const HeaderStyle = styled.div`

        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #39445a;
        color:#b2bec3;
        font-size: 3rem;
        width: 100%;
        font-family: "Montserrat", sans-serif;
        cursor: pointer;
        box-shadow: 1px 1px 8px #000000;
        padding-bottom: .5rem;
        text-transform: uppercase;
        z-index: 2;

    @media only screen and (max-width:768px){
        .header{
            font-size: 2rem;
            padding-top: .2rem;
        }
    }

`

export default HeaderStyle;