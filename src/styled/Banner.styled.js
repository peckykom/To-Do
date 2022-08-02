import styled from "styled-components";

const BannerStyle = styled.div`
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;
        height: 15rem;
        width: 100vw;
        background-color: rgb(22, 23, 34);
       

    @media (min-width: 1440px) {
            height: 19rem;
    }
`
export default BannerStyle;
