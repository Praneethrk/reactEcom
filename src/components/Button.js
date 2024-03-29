import styled from 'styled-components';

export const ButtonContainer = styled.button`
test-transform: capitalize;
font-size:1.4rem;
color:var(--lightBlue);
background:transparent;
border:0.05rem solid var(--lightBlue);
border-radius:0.5rem;
border-color:${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color:${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
padding:0.2rem 0.5rem;
curserpointer:
margin:0.2 0.5 0.2 0;
transition:all 0.5s ease-in-out;
&:hover{
background:${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};;
color:var(--mainBlue);
}
&:focus{
outline:none;
}
`;