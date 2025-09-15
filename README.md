
# Cartify

Cartify is a modern e-commerce web application built with **Node.js**, **Express**, **MongoDB**, **EJS**, and **Tailwind CSS**. It allows users to browse products, add them to a cart, and view a detailed price breakdown before checkout.

---

## Features

* User authentication (login/logout)
* Browse products in the Shop page
* Add products to cart
* View cart with price breakdown (MRP, Platform Fee, Shipping Fee, Total)
* Dynamic cart updates with product information
* Flash messages for user feedback

---

## Technologies Used

* **Backend:** Node.js, Express
* **Database:** MongoDB, Mongoose
* **Templating Engine:** EJS
* **Frontend:** Tailwind CSS
* **Session & Flash:** express-session, connect-flash

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Sourishharh/Cartify.git
cd Cartify
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file** (example)

```
PORT=3000
MONGO_URI=
SESSION_SECRET=y
```

4. **Run the application**

```bash
npm start
```

The app will be running at [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
Cartify/
│
├─ models/            # MongoDB schemas
│   ├─ product-model.js
│   └─ user-model.js
│
├─ routes/            # Express routes
│   └─ index.js
│
├─ views/             # EJS templates
│   ├─ partials/
│   │   ├─ header.ejs
│   │   └─ footer.ejs
│   ├─ index.ejs
│   ├─ shop.ejs
│   └─ cart.ejs
│
├─ public/            # Static assets (images, CSS)
├─ middlewares/       # Custom middleware (isloggedin)
├─ package.json
└─ server.js
```

---

## Usage

1. Open the app in your browser at `http://localhost:3000`.
2. Browse products in the **Shop** section.
3. Click **Add to Cart** to add products to your cart.
4. Navigate to the **Cart** page to view your selected product(s) and price breakdown.

---

## Notes

* By default, the cart shows the **first product** added.
* Total amount calculation includes a fixed **Platform Fee** of ₹20.
* Quantity is set to **1 by default**.

---

## Future Improvements

* Allow multiple products with quantities in the cart.
* Add checkout and payment integration.
* User registration and profile management.
* Responsive design for mobile devices.

