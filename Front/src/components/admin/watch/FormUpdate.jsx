import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Formulario, Container1, Container2 } from "./style";
import { updateWatch } from "../../../redux/actions/admin/updateWatch";

function FormWatchUpdate({btnClose, editWatch}) {
  
  const dispatch = useDispatch()
  const {BRANDS, STYLES, COLORS, STRAPS, FUNCTIONS} = useSelector(state=> state)
  const [addImage, setAddImage] = useState("")
  
  console.log(editWatch);
  
    const watchUp = {
      brandName: editWatch.brandName,
      model: editWatch.model,
      styleName: editWatch.styleName,
      colorName: editWatch.colorName,
      image: editWatch.image,
      strapName: editWatch.strapName,
      price: editWatch.price,
      gender: editWatch.gender, 
      Functions: editWatch.Functions.map(f => f.name),
      description: editWatch.description
    }
  
  console.log(watchUp);
  // eslint-disable-next-line no-undef
  const [watch, setWatch] = useState(watchUp)  
  
  
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
  const putWatches = ()=>{
    
        dispatch(updateWatch(editWatch.id,watch))
        setWatch({
          ...watch,
          image: [],
        })        
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
          <select onChange={handleChange} name="brandName" value={watch.brandName}>
            {watch.brandName === "" && <option>Marca</option>}
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
          <select onChange={handleChange} name="styleName" value={watch.styleName}>
            {watch.styleName === "" && <option>Estilo</option>}
            {STYLES.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}       
          </select>
        </div>        
        <div className="optionDiv">
          <select onChange={handleChange} name="colorName" value={watch.colorName}>
            {watch.colorName === "" && <option>Color</option>}
            {COLORS.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}       
          </select>
        </div>        
        <div className="optionDiv">
          <select onChange={handleChange} name="strapName" value={watch.strapName}>
            {watch.ststrapNamerap === "" && <option>Malla</option>}
            {STRAPS.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}       
          </select>
        </div>
        <div className="optionDiv">                  
          <select onChange={handleChange} name="Functions" value="Funciones">
            <option value={''}>Funciones</option>
            {FUNCTIONS.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}      
          </select>     
        </div>
        <div className="funcionesDiv">
          {watch.Functions.length !== 0 && 
            watch.Functions.map((f,i)=>
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
        
          <button type="button" onClick={putWatches}>Actualizar</button>
          
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
      <button className="btnClose" onClick={btnClose}>Close</button>
    </Container>  
    )
  }
  
  export default FormWatchUpdate;
  
  

