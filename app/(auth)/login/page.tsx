import LoginForm from "../_components/login-form";
import Link from "next/link"
 
export default function Page() {
    return (
        <div>
            Login Header
            <LoginForm/>
            <Link href = "/register"> Go to Register</Link>
        </div>
    );
}