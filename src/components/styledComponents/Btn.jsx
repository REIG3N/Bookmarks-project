import styled from 'styled-components'

export const Btn = styled.button`
display: flex;
justify-content:center;
align-items: center;

width: 120px;
height: 30px;
border-radius: 8px;

background: #D9D9D9;
color: #000;

font-size: 11px;
font-weight: 700;

cursor: pointer;
border: none;

`
export const DeleteBtn = styled(Btn)`
background: #8A4444;
color: #D9D9D9;
` 
export const OpenBtn = styled(Btn)`
background: #427A87;
color: #D9D9D9;
` 
export const ConfirmBtn = styled(Btn)`
background: #505050;
color: #D9D9D9;
` 
