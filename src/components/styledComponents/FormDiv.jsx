import styled from 'styled-components'

const ShowFormDiv = styled.div`
background: #D9D9D9;
width: 75%;
height: auto;
padding: 20px;
color: #000;
border-radius: 15px;
display: flex;
margin: auto;
margin-top: 120px;
`
export default ShowFormDiv

export const DarkBG = styled.div`
background: #0000007b;
z-index: 100000;
position: absolute;
width: 100%;
height: calc(100% + 120px);
top: 0;
left: 0;
`
export const FormHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 20px;
`

export const FormInputDiv = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 10px;
gap: 10px;
`
export const FormInput = styled.input`
border: none;
outline: none;
height: 25px;
border-radius: 25px;
padding-left: 5px;
`





