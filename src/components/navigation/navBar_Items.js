// add checker for nav items



const navItems = (user ) => {

    if (user) {
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
            },
            {
                link: "SignOut",
                path: "/signOut"
            },

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