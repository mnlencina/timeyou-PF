/* eslint-disable react/prop-types */
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Formulario, Container1, Container2 } from "./style";
import { updateWatch } from "../../../redux/actions/admin/updateWatch";
import { getProducts } from "../../../redux/Actions";
import uploadImageToCloudinary from "../claudinary/uploadimage";

function FormWatchUpdate(props) {
  const {btnClose, wUpdate, setUpdateW} = props
  const dispatch = useDispatch()
  
  const BRANDS = useSelector((state)=> state.BRANDS)
  const STYLES = useSelector((state)=> state.STYLES)
  const COLORS = useSelector((state)=> state.COLORS) 
  const STRAPS = useSelector((state)=> state.STRAPS) 
  const FUNCTIONS = useSelector((state)=> state.FUNCTIONS)
  
  const [addImage, setAddImage] = useState("")
  
    const watchUp = {
      brandName: wUpdate.brandName,
      model: wUpdate.model,
      styleName: wUpdate.styleName,
      colorName: wUpdate.colorName,
      image: wUpdate.image,
      strapName: wUpdate.strapName,
      price: wUpdate.price,
      gender: wUpdate.gender, 
      Functions: wUpdate.Functions.map(f => f.name),
      description: wUpdate.description,
      stock: wUpdate.stock
    }
  
  console.log(watchUp);
  // eslint-disable-next-line no-undef
  const [watch, setWatch] = useState(watchUp)  
  
  
  const handleChange = (e)=>{
    e.preventDefault()
    const {name, value} = e.target
    console.log(name, value);
    if(name !== "Functions"){
      setWatch(
        {
          ...watch,
          [name]: value
        }
      )
    } else {       
        const filtered = watch.Functions.filter(f=> f === value)
        console.log(filtered);
        if(!filtered.length && value !== ""){
          setWatch(
            {
              ...watch,
              Functions: [...watch.Functions, value]
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
    const filtered = watch.Functions.filter(f=> f !== func)   
    setWatch(
      {
        ...watch,
        Functions: filtered,
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
  const putWatches = async()=>{
    // eslint-disable-next-line react/prop-types
    const data = await dispatch(updateWatch(wUpdate.id,watch))
    console.log(data);
    setUpdateW(false)
    dispatch(getProducts())
  }
  
  
    return (
    <Container>
        {/* <h2>Carga todas las caracteristicas del Reloj</h2> */}
        
      <Formulario>
        <Container1>
        <div className="optionDiv">
          <h3>Modelo:</h3>
          <input name="model" type="text" defaultValue={watch.model} onChange={handleChange}/>     
        </div>        
        <div className="optionDiv">
          <select onChange={handleChange} name="brandName" value={watch.brandName}>
            {watch.brandName === "" && <option>Marca</option>}
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
          <select onChange={handleChange} name="styleName" value={watch.styleName}>
            {watch.styleName === "" && <option>Estilo</option>}
            {STYLES.map((m) => <option key={m.id} value={m.name}>{m.name.charAt(0).toUpperCase() + m.name.slice(1)}</option>)}       
          </select>
        </div>        
        <div className="optionDiv">
          <select onChange={handleChange} name="colorName" value={watch.colorName}>
            {watch.colorName === "" && <option>Color</option>}
            {COLORS.map((m) => <option key={m.id} value={m.name}>{m.name.charAt(0).toUpperCase() + m.name.slice(1)}</option>)}       
          </select>
        </div>        
        <div className="optionDiv">
          <select onChange={handleChange} name="strapName" value={watch.strapName}>
            {watch.ststrapNamerap === "" && <option>Malla</option>}
            {STRAPS.map((m) => <option key={m.id} value={m.name}>{m.name.charAt(0).toUpperCase() + m.name.slice(1)}</option>)}       
          </select>
        </div>
        <div className="optionDiv">                  
          <select onChange={handleChange} name="Functions" value="Funciones">
            <option value={''}>Funciones</option>
            {FUNCTIONS.map((m) => <option key={m.id} value={m.name}>{m.name.charAt(0).toUpperCase() + m.name.slice(1)}</option>)}      
          </select>     
        </div>
        <div className="optionDiv">
          <h3>Cantidad:</h3>
          <input name="stock" type="text" defaultValue={watch.stock} onChange={handleChange}/>     
        </div>        
        
        <div className="optionDiv">
          <h3>Precio en u$s:</h3>
          <input name="price" type="text" defaultValue={watch.price} onChange={handleChange}/>     
        </div>        
        <div className="optionDiv">
        <h3>Descripción</h3>
        <input name="description" type="text" defaultValue={watch.description} onChange={handleChange}/>
        </div>
        <div className="optionDiv">
          <label className="customLabel" htmlFor="imgs">Cargar Imagen...</label>
          <input className="customInput" id="imgs" onChange={handlerImage} name="image" type="file" aria-label="Seleccionar archivo" />
    
        </div>
        
          <button className="btnUp" type="button" onClick={putWatches}>ACTUALIZAR</button>
          
        </Container1>
        
        <div className="funcionesDiv">
          <h3>Funciones:</h3>
        <div className="funcionesDiv2">
          {watch.Functions.length !== 0 && 
            watch.Functions.map((f,i)=>
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
  
  export default FormWatchUpdate;
  
  

