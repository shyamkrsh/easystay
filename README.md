
# EasyStay 🏠  
**Your go-to platform for finding rental properties with ease!**

---

## 🚀 Live Demo  
Explore the website here: [EasyStay](https://easystayngp.vercel.app/)

---

## 📖 About the Project  
EasyStay is a web application designed to simplify the rental process by connecting property owners with potential tenants. Built using the MERN stack, this platform includes features like property listings, user authentication, and property management tools.

---

## 🌟 Features  
- **User Authentication:**
  - Sign up and log in using JWT authentication.
- **Property Listings:**
  - Browse a variety of rental properties with images and detailed descriptions.
- **Search and Filter:**
  - Quickly find properties using filters like location, price, and type.
- **Responsive Design:**
  - Optimized for both desktop and mobile devices.
- **Secure API:**
  - Backend secured with HTTPS and tokens stored using `httpOnly` cookies.

---

## 🛠️ Technologies Used  

### Frontend  
- **React.js** for dynamic and responsive UI.  
- **Material-UI (MUI)** for sleek and modern design.  
- **Redux** for state management.  
- **Axios** for API communication.  

### Backend  
- **Node.js** with **Express** for server-side logic.  
- **MongoDB** for database management.  
- **JWT** for user authentication.  

### Deployment  
- **Frontend:** Deployed on [Vercel](https://vercel.com/).  
- **Backend:** Deployed on [Vercel](https://vercel.com/).  

---

## ⚙️ Installation  

### Prerequisites  
- Node.js  
- MongoDB  

### Steps  



2. **Install Dependencies**  

   **Frontend**  
   ```bash
   cd client
   npm install
   ```

   **Backend**  
   ```bash
   cd server
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the `server` directory with the following variables:  
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application**  

   **Backend**  
   ```bash
   cd server
   npm start
   ```

   **Frontend**  
   ```bash
   cd client
   npm start
   ```



## 🚀 Future Enhancements  
- **Owner Dashboard:** For managing properties and user accounts.  
- **Advanced Search:** Add additional filters like amenities and reviews.  
- **Payment Integration:** Enable online payment options for booking.  
- **Mobile App:** Extend functionality with a React Native app.  

---
