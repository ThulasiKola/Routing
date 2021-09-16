import React from 'react'

function Dashboard(props) {
    console.log(props,'props')
const { state } =  props.location;
//console.log(state,'naresh');
    return (
        <div>

                {/* <center><h1>thulasi</h1>
                {props.location.username}</center> */}


            {/* <center>
        <h1>{state.id}</h1></center>
        <center><h2>{state.value}</h2></center>*/}
        
            <center><h3>{state.username}</h3></center> 
            <center><h3>{state.password}</h3></center>
           
        </div>
    )
}

export default Dashboard
