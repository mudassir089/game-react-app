import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
  *{
      padding: 0;
      margin: 0;
  }

  body{
      padding: 0;
      margin: 0;
      box-sizing:border-box;
      background-color: #0c0c0c;
      font-family: 'Montserrat',sans-serif;
      overflow-x: hidden;


  }

  .added{
      opacity: 1;
    /* transform: translateX(0%); */
    width: 30%;
    overflow: hidden;

     @media (max-width:768px){
      width: 100%;
  } 

  }

  
  .fade{
    object-fit: cover;
    width: 100% ;
    height: 100% ;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  html{
      font-size: 62.5%;
  }
`;

export default Globalstyles