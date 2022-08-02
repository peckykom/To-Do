import styled from "styled-components";

const HeaderStyle = styled.header`
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
        color: #FFF;
        padding-top: .5rem;
        letter-spacing: 10px;
        font-weight: 700;
        font-size: 1.5rem;
    }

    .toggle-icon {
        background: none;
        border: none;
        outline: none;
    }
    
    
    @media (min-width: 1440px) {
        margin-top: 1rem;
    }
`
export default HeaderStyle
