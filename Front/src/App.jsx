
import { useEffect } from "react";
import MyRoutes from "./routes/MyRoutes";
import { useDispatch } from "react-redux";
import { allPropWatches } from "./redux/Actions";

function App() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
  dispatch(allPropWatches('brands'))
  dispatch(allPropWatches('styles'))
  dispatch(allPropWatches('colors'))
  dispatch(allPropWatches('straps'))
  dispatch(allPropWatches('functions'))
  },[dispatch])
  
  return <MyRoutes/>;
}

export default App;
