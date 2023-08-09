import styled from 'styled-components'

export const ListedElement = styled.li`
width: 18.75rem;
height: 100px;

@media (max-width: 635px){
  width: 95%;

}

padding: 0px 20px;

font-size: 12px;

border-radius: 10px;
background: #D9D9D9;

display: flex;
align-items: center;
justify-content: space-between;
`
export const Infos = styled.div`
display: flex;
flex-direction: column;
gap: 3px;
`

export const Title = styled.p`
font-size: 14px;
font-weight: 700;
`

export const Autor = styled.p`
`
export const Status = styled.p`
font-weight: 700;
`