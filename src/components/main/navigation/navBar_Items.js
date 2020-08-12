// add checker for nav items



const navItems = (user) => {

    if (user !== null) {
        return [
            {
                link: "Home",
                path: "/"
            },
            {
                link: `${user.username}-Cart`,
                path: "/profile"
            },
            {
                link: "Products",
                path: "/products"
            }
        ]
    } else {
        return [
            {
                link: "Home",
                path: "/"
            },
            {
                link: "Login",
                path: "/login"
            },
            {
                link: "Register",
                path: "/register"
            }
        ]
    }


}

export default navItems;