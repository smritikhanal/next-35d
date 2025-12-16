"use client"; //CSR
//when user interaction/events and states are used
import { useState, useEffect, ChangeEvent} from "react";
 
export default function Page() {
    const [count, setCount] = useState (1);
    //count - actual data
    //setCount - function to update data
    //States: variables that hold data in a component which can change
    //change in state will re-rener the component
 
    const increment = () =>{
        setCount(count+1); //update the state
    }
    //useEffect - dependency watch/side effects
    useEffect(
        () => {
            alert("Component Mounted")
        },
        [] //dependency/ empty = runs once at load
    )
    useEffect( () => {
        if(count ==0){
            alert("count is zero")
        }
    }, [count]) // runs when count changes
    // [count, state1, state2, ....] - runs when any of these states change
 
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");
 
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        //e.target.value -> user input value
    }
    return (
        //re-render the component when setCount is called
        <div>
            <div>
                Count:{count}
            </div>
            <button onClick={increment}>Increment</button>
            <button onClick={ () => setCount(count-1)}>Decrement</button>
            <button onClick={ () => setCount(1)} > reset</button>
            <div>
                <div>
                    <label>Email</label>
                    <input onChange={handleEmail} value={email}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input
                    onChange={ (e) => setPassword(e.target.value)}
                    value={password}></input>
                </div>
                <button onClick={ () => alert("Email: " + email)}>Test</button>
            </div>
        </div>
    );
}
 