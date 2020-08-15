## Beehive

**Online store for different types of honey**


### `Initialize`

- git clone 
- npm install
- npm start

### `Structure`
Front-end: React  

- libraries used:  
 **moment.js**   
 **bootstrap , react-bootstrap**  
 **react-toastify**  
 **react-hook-form**  
 **react-router-dom**


Back-end: Firebase (Realtime database)
- functionality used:  
**firebase-auth**  
**CRUD operations**

### `Functionalities`


- **Authentication**:  
This functionality includes **sign up**,**sign in** and **sign out**.  
User model

- **Product**:  
Includes **product listing page**(PLP) & **product details page**(PDP)  
Product model


- **Add to cart**:  
Includes add to cart functionality in **PDP**  
Order model

- **Complete order**:  
Includes complete order and select quantity functionality  
Adds order price to **Total spend** in Home page  
Sets **Last order** info in Home page  

- **Delete order**:   
Deletes current products in cart  

### **`Models`**

 **User model** | **Product model** | **Added to cart/Cart model** | **Order model** | **Complete order model**
 ------------ | ------------------- | -----------------------------| --------------- | ------------------------|
username      | name                | honey type                   | honey type | city
email         | price               | quantity                     | quantity | full name 
password      | description         | order price                  | time created | address line
profile image | product image       | product image                | product image | phone
 |             |                     | total price                  | user
 
### **`Rules`**

**Not authenticated users (guests)**  
- can register and login
- can view Home page guest view  

**Authenticated users**  
- can view Products,Profile/Cart,Order pages
- can make orders  
- can view Home page authenticated user view  


### **`Pages`**  
 - **Home**  
 Not authenticated and authenticated users view  
 Shows statistics for the last few orders  
 - **Login**  
 Users can login  
 - **Register**  
 Users create accouns  
 - **Products**  
 Accessible only for logged in users  
 List of all products that users can order  
 From here users can access Order page for each product  
 - **Order / product**  
 Users can set quantity of the product and see the total price  
 Add to cart or go back to Products page  
 - **Profile-Cart**  
 Here users can see their profile information on the left side  
 On the righ side is the cart, and products order can be completed  
 
### **`Pages`**  
 - Home page - "/"  
 - Login page - "/login"  
 - Register page - "/register"
 - Products page - "/products"  
 - Order page - "/orders/:product_name" (accessable from Products page)  
 - Profile/Cart page - "/profile"  
