/* eslint-disable react/prop-types */
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
//import styled from "styled-components";
import { Container, Formulario, Container1, Container2 } from "./style";
import { getProducts, postWatch } from "../../../redux/Actions";
import uploadImageToCloudinary from "../claudinary/uploadimage.js";

function FormWatch({btnClose}) {
  
  const dispatch = useDispatch()
  
  const BRANDS = useSelector((state)=> state.BRANDS)
  const STYLES = useSelector((state)=> state.STYLES)
  const COLORS = useSelector((state)=> state.COLORS) 
  const STRAPS = useSelector((state)=> state.STRAPS) 
  const FUNCTIONS = useSelector((state)=> state.FUNCTIONS)
  
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
    description: "",
    stock:""
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
  
  
  /* const handlerImage = (img)=>{
    const {name, value} = img.target
    console.log(name, value);
     setAddImage(value)
  } */
  
  const  handlerImage = async (e) => {
    const imag = e.target.files[0];    
    console.log(imag)
      
    let imageUrl  = await uploadImageToCloudinary("Relojes Time You", imag)
      
    setAddImage(imageUrl)
    masImg(imageUrl)
  };
  
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
        dispatch(getProducts())
    
  }
  
  
    return (
    <Container>
        {/* <h2>Carga todas las caracteristicas del Reloj</h2> */}
        
      <Formulario>
        <Container1>
        <div className="optionDiv">
          <h3>Modelo:</h3>
          <input name="model" type="text" onChange={handleChange}/>     
        </div>        
        <div className="optionDiv">
          <select onChange={handleChange} name="brand" value={watch.brand}>
            {watch.brand === "" && <option>Marca</option>}
            {BRANDS.map((m) => <option key={m.id} value={m.name}>{m.name.charAt(0).toUpperCase() + m.name.slice(1)}</option>)}       
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
            {STYLES.map((m) => <option key={m.id} value={m.name}>{m.name.charAt(0).toUpperCase() + m.name.slice(1)}</option>)}       
          </select>
        </div>        
        <div className="optionDiv">
          <select onChange={handleChange} name="color" value={watch.color}>
            {watch.color === "" && <option>Color</option>}
            {COLORS.map((m) => <option key={m.id} value={m.name}>{m.name.charAt(0).toUpperCase() + m.name.slice(1)}</option>)}       
          </select>
        </div>        
        <div className="optionDiv">
          <select onChange={handleChange} name="strap" value={watch.strap}>
            {watch.strap === "" && <option>Malla</option>}
            {STRAPS.map((m) => <option key={m.id} value={m.name}>{m.name.charAt(0).toUpperCase() + m.name.slice(1)}</option>)}       
          </select>
        </div>
        <div className="optionDiv">                  
          <select onChange={handleChange} name="functions" value={watch.functions}>
            <option value={''}>Funciones</option>
            {FUNCTIONS.map((m) => <option key={m.id} value={m.name}>{m.name.charAt(0).toUpperCase() + m.name.slice(1)}</option>)}      
          </select>     
        </div>
        
        <div className="optionDiv">
          <h3>Cantidad:</h3>
          <input name="stock" type="text" defaultValue={watch.stock} onChange={handleChange}/>     
        </div>
        
        <div className="optionDiv">
          <h3>Precio en usd:</h3>
          <input name="price" type="text" onChange={handleChange}/>     
        </div>        
        <div className="optionDiv">
        <h3>Descripción:</h3>
        <input name="description" type="text" onChange={handleChange}/>
        </div>
        <div className="optionDiv">
          <label className="customLabel" htmlFor="imgs">Cargar Imagen...</label>
          <input className="customInput" id="imgs" onChange={handlerImage} name="image" type="file" aria-label="Seleccionar archivo" />
        
        </div>
        
          <button className="btnUp" type="button" onClick={postWatches}>CARGAR</button>
          </Container1>
        <div className="funcionesDiv">
          <h3>Funciones:</h3>
        <div className="funcionesDiv2">
          {watch.functions.length !== 0 && 
            watch.functions.map((f,i)=>
              <span key={i+f} onClick={()=>handlerFunctions(f)}>
                *{f.toUpperCase()}
              </span>
          )}
        </div>
        </div>
        <div className="divImg">
          <h3>Imagenes:</h3>
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
        </div>
        
      </Formulario>
      <button className="btnClose" onClick={btnClose}>Cerrar</button>
    </Container>  
    )
  }
  
  export default FormWatch;
  
  

