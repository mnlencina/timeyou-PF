import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postWatch } from "../../redux/Actions";



function FormWatch() {
  const navigate = useNavigate();
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
        if(!filtered.length){
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
        navigate("/newwatch")
  }
  
  
    return (
      <form>
      <h2>Carga todas las caracteristicas del Reloj</h2>
        <div className="">
          <h3>Modelo:</h3>
          <input name="model" type="text" onChange={handleChange}/>     
        </div>        
        <div className="">
          <select onChange={handleChange} name="brand" value={watch.brand}>
            {watch.brand === "" && <option>Marca</option>}
            {BRANDS.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}       
          </select>
        </div>
        <div className="">
          <select onChange={handleChange} name="gender" value={watch.gender}>
            {watch.gender === "" && <option>Genero</option>}
            <option key="male" value="male">Caballero</option>
            <option key="female" value="female">Dama</option> 
            <option key="unisex" value="unisex">Unisex</option> 
           </select>
        </div>            
        <div className="">
          <select onChange={handleChange} name="style" value={watch.style}>
            {watch.style === "" && <option>Estilo</option>}
            {STYLES.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}       
          </select>
        </div>        
        <div className="">
          <select onChange={handleChange} name="color" value={watch.color}>
            {watch.color === "" && <option>Color</option>}
            {COLORS.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}       
          </select>
        </div>        
        <div className="">
          <select onChange={handleChange} name="strap" value={watch.strap}>
            {watch.strap === "" && <option>Malla</option>}
            {STRAPS.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}       
          </select>
        </div>
        <div>
          {watch.functions.length !== 0 && 
            watch.functions.map((f,i)=>
              <span key={i+f}>
                {f}
                <button type="button" onClick={()=>handlerFunctions(f)}>x</button>
              </span>
          )}
        </div>        
        <div className="">                  
          <select onChange={handleChange} name="functions" value={watch.functions}>
            {watch.functions.length === 0 && <option>Funciones</option>}
            {FUNCTIONS.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}      
          </select>     
        </div>
        <div className="">
          <h3>PRECIO EN DOLAR:</h3>
          <input name="price" type="text" onChange={handleChange}/>     
        </div>        
        <div className="">
        <h3>Descripción</h3>
        <input name="description" type="text" onChange={handleChange}/>
        </div>
        <div className="">
          <h3>Imagen</h3>
          <input id="imgs" onChange={handlerImage} name="image" type="text"/>
          <button type="button" onClick={()=> masImg(addImage)}>add</button>
        </div>
        <div>
          {watch.image.length !== 0 && 
            watch.image.map((img,i)=>
            <ImgPreview key={i+100}>
            <span>
            
              <button type="button" onClick={()=>delImage(img)}>x</button>
              <img src={img} alt={"img"+(i+1)} />
            </span>
            </ImgPreview>               
          )}
        </div>        
      <button type="button" onClick={postWatches}>UP</button>
      </form>
    )
  }
  
  export default FormWatch;
  


  const ImgPreview = styled.main`
  img {
      height: 150px
  }
  `;

