import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import { postWatch } from "../../redux/Actions";

function FormWatch() {
  
  const dispatch = useDispatch()
  const {BRANDS, STYLES, COLORS, STRAPS, FUNCTIONS} = useSelector(state=> state)
  const [addImage, setAddImage] = useState("")
  const [watch, setWatch] = useState({
    brand: "",
    model: "",
    style: "",
    color: "",
    image: [],
    strap: "",
    price: 0,
    gender: "", 
    functions: [],
    description: ""
  })
  
  const handleChange = (e)=>{
    e.preventDefault()
    const {name, value} = e.target
    console.log(name, value);
    if(name !== "functions"){
      setWatch(
        {
          ...watch,
          [name]: value
        }
      )
    } else {       
        const filtered = watch.functions.filter(f=> f === value)
        console.log(filtered);
        if(!filtered.length && value !== ""){
          setWatch(
            {
              ...watch,
              functions: [...watch.functions, value]
            }
          )        
        }   
    }
    console.log(watch);
  }
  
  
  const handlerImage = (img)=>{
    const {name, value} = img.target
    console.log(name, value);
     setAddImage(value)
  }
  
  const masImg = (img)=>{
    const filtered = watch.image.filter(f=> f === img)
    console.log(filtered);
    
    img !== "" && !filtered.length &&  
      setWatch(
        {
          ...watch,
          image: [...watch.image, img]
        }
      )            
      document.getElementById("imgs").value = "";
  }
    
  const handlerFunctions = (func)=>{    
    const filtered = watch.functions.filter(f=> f !== func)   
    setWatch(
      {
        ...watch,
        functions: filtered,
      }
    )    
  }
  
  const delImage = (img)=>{   
    const filtered = watch.image.filter(f=> f !== img)   
    setWatch(
      {
        ...watch,
        image: filtered,
      }
    )    
  }
  const postWatches = ()=>{
    watch.brand !== "" && watch.model !== "" && watch.style !== "" 
      && watch.color !== "" && watch.image.length !== 0 && watch.strap !== ""
      && watch.price !== 0 && watch.gender !== "" && watch.functions.length !== 0
      && watch.description !== "" 
      && 
        dispatch(postWatch(watch))
        setWatch({
          ...watch,
          image: [],
        })        
  }
  
  
    return (
    <Container>
        <h2>Carga todas las caracteristicas del Reloj</h2>
      <Formulario>
        <Container1>
        <div className="optionDiv">
          <h3>Modelo:</h3>
          <input name="model" type="text" onChange={handleChange}/>     
        </div>        
        <div className="optionDiv">
          <select onChange={handleChange} name="brand" value={watch.brand}>
            {watch.brand === "" && <option>Marca</option>}
            {BRANDS.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}       
          </select>
        </div>
        <div className="optionDiv">
          <select onChange={handleChange} name="gender" value={watch.gender}>
            {watch.gender === "" && <option>Genero</option>}
            <option key="male" value="male">Caballero</option>
            <option key="female" value="female">Dama</option> 
            <option key="unisex" value="unisex">Unisex</option> 
           </select>
        </div>            
        <div className="optionDiv">
          <select onChange={handleChange} name="style" value={watch.style}>
            {watch.style === "" && <option>Estilo</option>}
            {STYLES.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}       
          </select>
        </div>        
        <div className="optionDiv">
          <select onChange={handleChange} name="color" value={watch.color}>
            {watch.color === "" && <option>Color</option>}
            {COLORS.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}       
          </select>
        </div>        
        <div className="optionDiv">
          <select onChange={handleChange} name="strap" value={watch.strap}>
            {watch.strap === "" && <option>Malla</option>}
            {STRAPS.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}       
          </select>
        </div>
        <div className="optionDiv">                  
          <select onChange={handleChange} name="functions" value={watch.functions}>
            <option value={''}>Funciones</option>
            {FUNCTIONS.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}      
          </select>     
        </div>
        <div className="funcionesDiv">
          {watch.functions.length !== 0 && 
            watch.functions.map((f,i)=>
              <span key={i+f} onClick={()=>handlerFunctions(f)}>
                *{f.toUpperCase()}
              </span>
          )}
        </div>        
        <div className="optionDiv">
          <h3>PRECIO EN DOLAR:</h3>
          <input name="price" type="text" onChange={handleChange}/>     
        </div>        
        <div className="optionDiv">
        <h3>Descripción</h3>
        <input name="description" type="text" onChange={handleChange}/>
        </div>
        <div className="optionDiv">
          <h3>Imagen</h3>
          <input id="imgs" onChange={handlerImage} name="image" type="text"/>
          <button type="button" onClick={()=> masImg(addImage)}>add</button>
        </div>
        
          <button type="button" onClick={postWatches}>UP WATCH</button>
          
        </Container1>
        
        <Container2>
          {watch.image.length !== 0 && 
            watch.image.map((img,i)=>
            <div key={i+100}>
            <span>
            
              <button className="btnClose" type="button" onClick={()=>delImage(img)}>x</button>
              <img src={img} alt={"img"+(i+1)} />
            </span>
            </div>               
          )}
        </Container2>
        
      </Formulario>
    </Container>  
    )
  }
  
  export default FormWatch;
  
  
const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    
  h2 {
    margin: 10px;
  }
`;
  
const Formulario = styled.main`  
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  gap: 50px;
  margin: 20px;
  
  select {
    width: 175px;
  }
  
  input {
    width: 175px;
  }
`;

const Container1 = styled.main`
  .funcionesDiv{
    width: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
    span{
      margin: 2px;
      display: flex;
      align-items: center;
      cursor: pointer;
      background-color: #001aff55;
      border-radius: 5px;
      padding: 2px;
    }
  }
  .optionDiv{
    margin: 5px 5px 5px 0;
  }
  button {
    cursor: pointer;
  }
`;
  
const Container2 = styled.main`
  display: flex;
  width: 350px;
  flex-wrap: wrap;
  flex-direction: row;  

  img {
      height: 150px;
      width: 150px;
  }
  
  .btnClose {
    width: 30px;
    height: 30px;
    background: #888;
    border: none;
    border-radius: 50%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out all;
    color: #fff;
    cursor: pointer;
}
   
  
`;

