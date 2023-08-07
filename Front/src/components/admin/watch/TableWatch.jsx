/* eslint-disable react/prop-types */
import { useState } from "react";
import DataTable from "react-data-table-component"
import { TbDeviceWatchOff, TbDeviceWatchStats, TbDeviceWatchUp } from "react-icons/tb";

const TableWatch =({allClocks,editWatches,delWatch,custonStyled})=>{
    
    const [searchClock, setSearchClock] = useState(allClocks)
    console.log(searchClock);
    
    const columnsWatch = [
        {
            name: "Reloj:",
            selector: "image",
            cell: row => (<img className="imgTable" src={row.image[0]}/>),
        },
        {
            name: "Marca:",
            selector: "brandName",
            cell: row => row.brandName.charAt(0).toUpperCase() + row.brandName.slice(1),
            sortable: true
        },
        {
            name: "Modelo:",
            selector: "model",
            cell: row => row.model.charAt(0).toUpperCase() + row.model.slice(1),
            sortable: true
        },
        {
            name: "Precio:",
            selector: "price",
            cell: row => `u$s${row.price}`,
            sortable: true
        },
        {
            name: "Color:",
            selector: "colorName",
            cell: row => row.colorName.charAt(0).toUpperCase() + row.colorName.slice(1),
            sortable: true
        },
        {
            name: "Estilo:",
            selector: "styleName",
            cell: row => row.styleName.charAt(0).toUpperCase() + row.styleName.slice(1),
            sortable: true
        },
        {
            name: "Genero:",
            selector: "gender",
            cell: row => row.gender.charAt(0).toUpperCase() + row.gender.slice(1),
            sortable: true
        },
        {
            name: "Malla:",
            selector: "strapName",
            cell: row => row.strapName.charAt(0).toUpperCase() + row.strapName.slice(1),
            sortable: true
        },
        {
            name: "Acción:",
            selector: "del",
            cell: row => (
                <div className="divAction">
            {row.del ? (
                <div className="btnDiv" onClick={()=> delWatch(row.id,{del: !row.del})}>
                    
                    <div className="Icon1">                    
                        <TbDeviceWatchUp title="Agregar"/>
                    </div>
                </div>
                ) : (
                    <div className="btnDiv" onClick={()=> delWatch(row.id,{del: !row.del})}>
                        <TbDeviceWatchOff title="Borrar" className="Icon2"/>
                    </div>
                    )}
                    <div className="btnDiv">
                    <TbDeviceWatchStats title="Edit" className="Icon2" onClick={()=>editWatches(row)} color="rgb(3, 3, 173)"/>
                    </div>
                </div>
            ),
            sortable: true
            
        },
        
    ]

    const dataExpan = ({data})=> {
        console.log(data);
        return (
            <div className="dataExpan">
                <span>Descripción: {data.description} </span><span>Funciones: {data.Functions.map(s=>`  •${s.name.charAt(0).toUpperCase() + s.name.slice(1)}  `)}</span>
            </div>
        )
    };
    
    
    const handleFilter = (e)=>{
        const {value} = e.target
        const filtered = allClocks.filter(row=>{
            const modelo = row.model.toLowerCase()
            return modelo.includes(value.toLowerCase())        
        })
        setSearchClock(filtered)
    }
    
    
    
    return(
        <div className="tables"> 
            <div className="title">
                <h3>Lista de Relojes:</h3>
                <input type="text" className="inputFilter" placeholder="Busca por Modelo" onChange={handleFilter}/>  
            </div>
                <DataTable
                    columns={columnsWatch}
                    data={searchClock}
                    fixedHeader= {true}
                    fixedHeaderScrollHeight="420px"
                    pointerOnHover   
                    highlightOnHover
                    expandableRows
                    expandableRowsComponent={dataExpan}
                    responsive
                    theme="dark"
                    customStyles={custonStyled}
                    
            
                />
        </div>
    ) 
}

export default TableWatch;