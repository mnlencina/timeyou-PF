const Watches =({Watch})=>{
    console.log(Watch);
    return(
        <div>
            <h1>ALL USERS</h1>
            {Watch?.map((w, i)=>
            <div key={i+30}>
                <span>{w.brandName}- -</span>
                <span>{w.model}- -</span>
                <span>{w.styleName}- -</span>
                <span>{w.strapName}- -</span>
                <span>{w.color}- -</span>
                <span>{w.del}</span>
            </div>
            )}
        </div>
    )
    }
    
    export default Watches