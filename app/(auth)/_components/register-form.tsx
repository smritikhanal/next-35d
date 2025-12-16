export default function RegisterForm() {
    return (
        <div className="ms-auto max-w-md p-4 border">
            <div>
                <label>Email</label>
                <input type = "email"></input>
            </div>
            <div>
                <label>Password</label>
                <input type = "***********"></input>  
            </div>
            <div>
                <label>Confirm Password</label>
                <input type = "***********"></input>  
            </div>
            <div>
                <button
                className="px-2 py-1 bg-blue-500 text-white rounded"
                type="submit">Login</button>
            </div>
            <div>
            </div>
        </div>
    );
}
 