import Link from "next/link";
import RegisterForm from "./RegisterForm";
export default function Page() {
    return (
        <div>
            Register Page
            <RegisterForm />
            <Link href="/login">Go to Login</Link>
        </div>
    );
}

// Task
// create a component for Register Form and use in Register Page
// create a lonk to Register Page in Login Page
// create an url for /blogs/ [id] / edit - display Edit Blog page
// create an url for /blogs/ [id] / delete - display Delete Blog page
// craete an url for /blogs/new - display New Blog Page
// add customer in "dashboard" group
// create an url /customersn - display All Cutsomers Page
// create an url for /customers/ [id] - display Get Customer Page

