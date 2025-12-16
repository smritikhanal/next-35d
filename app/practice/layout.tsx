export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <div>User Layout Header</div>
            {children}
            <div>User Layout Footer</div>
        </section>
    );
}
 
 
//practice
//make new url
//practice/user
//Display "User Page"
 
// /practice/user/profile
//Display "User Profile Page"
 
// /practice/user/profile
// Display "User Profile Page"
 
// /practice/user/settings
// Display "User Settings Page"
 
// add layout to pratice/user
// On top of the page, display "User Layout header"
// On bottom of the page, display "User Layout Footer"
 