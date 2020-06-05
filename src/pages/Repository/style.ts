import styled from 'styled-components'

export const Header = styled.header`
display: flex;
max-width: 800px;
margin: 0 auto;
align-items: center;
justify-content: space-between;
svg{
      margin-left: auto;
      color: #cbcbd6;
    }
a{
  display:flex;
  font-size: 16px;
  color: #A8A8B3;
  text-decoration:none;
  align-items: center;
  transition: color 0.2s;

&:hover{

  color:#666;

  }
}
`

export const RepositoryInfo = styled.div`
max-width: 800px;
margin:80px auto 0px;
header{
  display:flex;
  align-items:center;
  div{
    margin-left: 24px;
    strong{
      font-size:36px;
      color: #3d3d4d;
    }
    p{
      font-size:18px;
      color:#737380;
      margin-top: 4px;
    }
  }
  img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
}
ul{
  margin-top:40px;
  display: flex;
  list-style:none;
  li{
    strong{
      display:block;
      font-size: 36px;
      color: #3d3d4d
    }

    span{
      display:block;
      margin-top:4px;
      color:#6c6c80
    }

    & + li {
      margin-left: 80px;
    }
  }
}
`

export const Issues = styled.div`
 margin-top:80px;

  a{
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;


  &:hover{
    transform: translateX(10px);
  }
    & + a{
      margin-top: 16px;
    }

  div{
    margin: 0 16px;
    flex:1%;
    strong {
      font-size: 20px;
      color:  #3d3d4d;
    }
    p{
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }

  }
    svg{
      margin-left: auto;
      color: #cbcbd6;
    }
  }
  `
