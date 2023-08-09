import DataTable from "react-data-table-component"

const Buys =({allBuys,custonStyled})=>{

    const columnsBuys = [
        {
            name: "Compra",
            selector:"name",
            cell: row => row.name,
            sortable: true
        },
        {
            name: "Pasarela",
            selector: "provider",
            cell: row => !row.provider ? "mercadopago" : row.provider,
            sortable: true
        },
        {
            name: "Cliente",
            selector:"email",
            cell: row => row.User.email,
            sortable: true
        },
        {
            name: "Monto",
            selector:"total",
            cell: row => `$ ${row.total}.-`,
            sortable: true
        },
   
        
    ]
    return(
        <div className="tables">
                    <div className="title">
                        <h3>Lista de Ventas:</h3> 
                    </div>
                    <DataTable 
                        columns={columnsBuys}
                        data={allBuys}
                        fixedHeader= {true}
                        fixedHeaderScrollHeight="420px"  
                        highlightOnHover
                        pointerOnHover
                        responsive
                        theme="dark"
                        customStyles={custonStyled}
                    />
            </div>
    )
    }
    
    export default Buys