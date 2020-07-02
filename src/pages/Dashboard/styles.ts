import  styled,{css} from "styled-components"
import { shade } from "polished";




interface FormProps{
    hasError:boolean;
}


//template literal:)
export const Title =styled.h1`
font-size: 48px;
color: #3a3a3a;
margin-top:80px;
max-width:450px;
line-height:56px
`;



export const Form=styled.form<FormProps>`
margin-top:40px;
max-width:700px;
display: flex;
input{
    flex:1;
    height:70px;
    padding: 0 24px;
    border:0;
    border-radius: 30px 0 0 30px;
    color: #3a3a3a;
    border:2px solid #fff;

    ${(props)=>props.hasError && css`
    border-color:#c53030;`} 
    
    /* //hier kann man die props von form bekommen */

    &::placeholder{
        color: #01a000;
    }
}
button{
   width:210px;
   height:70px;
   background: #04d361;
   border-radius:0 30px 30px 0;
   color: #ffffff;
   font-weight:bold;
   transition: background-color 1.5s;

   &:hover{//wenn hover in element wo das drin ist (hier: button)

background:${shade(0.5,"#04d361" )}
}



}


`;


export const Error=styled.span`
display: block;
color:#c53030;
`




export const Repositories=styled.div`
margin-top:80px;
max-width:700px;

a{
    background:#fff;
    border-radius:5px;
    width:100%;
    padding:24px;
    display:block;
    text-decoration:none;//macht underline von a weg
    display:flex;
    align-items:center;

& + a{//jedes mal wenn es ein a nach parent style element(hier: einem a gibt)
margin-top:16px;
}

&:hover{
    transform: translateX(10px);
    transition:0.5s;
}


img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
}

div{
    margin-left:16px;

strong{
    font-size:20px;
    color:#3d3d4d;
}
p{
    font-size:18px;
    margin-top:10px;
    color:#888888;
}

}

svg{
    margin-left:auto;
    /* color:#04d361; */
}

}

`;



















