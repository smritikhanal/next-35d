//Task
//Create a new page at/example/state/form
//Create state for username,email,age,password and confirmPassword as input
//using useState for each input
//set age to default 18
//using useEffect alert when age is less than 18
//create a button to submit the form and alert the username nd email
//create a button validate to check if password and confirm password are same
//-alert if not same
 
"use client";
import { useState, useEffect, ChangeEvent } from "react";
 
export default function Form() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmpassword, setConfirmPassword] = useState("");
const [age, setAge] = useState(18);
const [Username, setUsername] = useState("");
 
return (
<div>
<div>
<label>Userame</label>
<input onChange={(e) => setUsername(e.target.value)} value={Username}></input>
</div>
<div>
<label>Age</label>
<input
type="number"
onChange={(e) => setAge(Number(e.target.value))}
value={age}
/>
 
</div>
<div>
<label>Email</label>
<input onChange={(e) => setEmail(e.target.value)} value={email}></input>
</div>
<div>
<label>Passowrd</label>
<input onChange={(e) => setPassword(e.target.value)} value={password}></input>
</div>
<div>
<label>Confirm Password</label>
<input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmpassword}></input>
</div>
<div>
<button onClick={() => alert(`Username: ${Username}, Email: ${email}`)}>
Submit
</button>
<button
onClick={() =>
password !== confirmpassword
? alert("Passwords do not match")
: alert("Passwords match")
}
>
Validate Password
</button>
</div>
</div>
);
}
 