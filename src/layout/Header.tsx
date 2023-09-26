import React from 'react';
import styled from "styled-components"

const Title = styled.p`
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    letter: -0.8px;
    margin-bottom: 60px; 
    text-align: left;
`
function Header() {
    return (
        <Title>Payouts</Title>
    );
}

export default Header;