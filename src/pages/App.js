import { useAuthDispatch, useAuthState } from "../Context/auth/auth";
import { useEffect } from "react";
import { fetchApi } from "../Context/action/action";

function App() {

  const dispatch = useAuthDispatch()
  const state = useAuthState()
  console.log(state);

  useEffect(()=>{
    fetchApi(dispatch);
  }, [dispatch])

  

  return (
    <div className="App">
    </div>
  );
}

export default App;
