export const fetchApi = async(dispatch) => {
    dispatch({type: "req_data", payload: true})
    
    try {
        let req = await fetch("https://my-json-server.typicode.com/dewimardanicristin/db-influence/influencer/")
        let json = await req.json()
        console.log(json);
        dispatch({type: "req_data", payload: false})
        return dispatch({type: "req_done", payload: json})
    } catch(error) {
        dispatch({type: "req_data", payload: false})
        dispatch({type: "req_fail", payload: error})

    }
}