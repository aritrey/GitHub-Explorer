import styled from "styled-components";

export const Issues=styled.div`
margin-top:80px;
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


export const RepositoryInfo=styled.section`
margin-top:80px;

header{
    display:flex;
    align-items:center;

    img{
        width:120px;
        height:120px;
        border-radius:50%;

    }

div{
    margin-left:24px;

    strong{
        font-size:36px;
        color: #3d3d4d;
    }

    p{
        font-size:18px;
        color:#737380;
        margin-top:4px;

    }
}
}

ul{
display:flex;
list-style:none;/* //macht die aufzähhlzeichen weg */
margin-top:40px;

li{
    &+li{
margin-left:80px;
    }

    strong{
        display:block;
        font-size:36px;
        color: #3d3d4d;
    }
    span{
        display:block;
        margin-top:4px;
        color:#6c6c80;
    }
}

}



`

export const Header=styled.header`
align-items:center;
display:flex;
justify-content:space-between;

a{
    display:flex;
    align-items:center;
    text-decoration:none;
    color:#a8a8b3;
    transition:0.3s;
}

&:hover{
    color:#666;
}

svg{
    margin-right:4px
}


`
