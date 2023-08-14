import styled from 'styled-components'

export const Container = styled.div`
    
//opacity: 0.5;
 .fa-2x {
font-size: 2em;
}
.fa {
position: relative;
display: table-cell;
width: 60px;
height: 30px;
text-align: center;
vertical-align: middle;
font-size:20px;

}


.main-menu:hover,nav.main-menu.expanded {
width:150px;
overflow:visible;
opacity: 1;
transition: 0.8s;

    ul{
       transition: 3s;
       opacity: 1;
        }
    
    .logout{
        transition: 3s;
        opacity: 1;
    }
    
    div{
        overflow: auto;
        
    }
    
}

.main-menu {
margin-top: 9%;
background:black;
//border-right:1px solid #e5e5e5;
position:absolute;
top:0;
bottom:0;
height:800px;
left:0;
width:30px;
overflow:hidden;
-webkit-transition:width .05s linear;
transition:width .05s linear;
-webkit-transform:translateZ(0) scale(1,1);
z-index:1000;
transition: 3s;
opacity: 0.3;
border-radius: 0 8px 8px 0 ;
padding: 3px;
div{
  transition: 3s;
    height: 710px; /* Altura fija del contenedor */
  max-height: 100%; /* Altura máxima del contenedor */
  overflow-y: scroll; /* Habilitar la barra de desplazamiento vertical */
  overflow: hidden;
  
  &::-webkit-scrollbar {
  width: 8px;
  
}

&::-webkit-scrollbar-track {
    border-radius: 20px;
    
  background: #212121;
}

&::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
}



}

.main-menu ul {
    margin-top: 20px;    
    opacity: 0;
    transition: 1.5s;
    
    span{
        color: #fff;
        margin-left: 10px;
    }
    
    #limpiar{
        opacity: 0.2;
    }
}


.main-menu li {
position:relative;
display:block;
margin-bottom: -10px;

a{
    margin-left: 20px;
 
}

}

a {
position:relative;
display:table;
border-collapse:collapse;
border-spacing:0;
color:#999;
 font-family: arial;
font-size: 14px;
text-decoration:none;
-webkit-transform:translateZ(0) scale(1,1);
-webkit-transition:all .1s linear;
transition:all .1s linear;
  
}

.main-menu .nav-icon {
position:relative;
display:table-cell;
width:60px;
height:0px;
text-align:center;
vertical-align:middle;
font-size:18px;
}

.main-menu .nav-text {
position:relative;
display:table-cell;
vertical-align:middle;
width:100%;
  font-family: 'Titillium Web', sans-serif;
}

.logout {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: flex-end;
    flex-direction: column;
    opacity: 0;
    margin-top: 10px;
    
    
    button {
        margin: 0px 0px 10px 10px ;
        width: 80%;
        height: 30px;
        background-color: #d5cece;
        color: #161515;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.1s ease;
        font-size: 10;
        z-index: 9000 ;
        
        &:hover {
          //background-color: blue;
          color: #fff;
        }
        
    }
    #limpiar:hover{
      background-color: red;
      opacity: 0.8;
    }
    
    #filtrar:hover{
        background-color: blue;
        opacity: 0.8;
    }
}

.no-touch .scrollable.hover {
overflow-y:hidden;
}

.no-touch .scrollable.hover:hover {
overflow-y:auto;
overflow:visible;

}

a:hover,a:focus {
text-decoration:none;

}

nav {
-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
-o-user-select:none;
user-select:none;
}

nav ul,nav li {
outline:0;
margin:0;
padding:0;
}
.main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {
color:#fff;
background-color:#000000;
}
.area {
float: left;
background: #e2e2e2;
width: 100%;
height: 100%;
}
@font-face {
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 300;
  src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
}

 `;
