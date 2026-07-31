# 🛒 BoroBazaar

> **A full-stack Gadget Store E-commerce marketplace built with Next.js.**
>
> Developed as an **internship project at ZenvyroLab**, featuring separate buyer and seller experiences, secure authentication, asynchronous order processing, and a scalable REST API architecture.

---

# 🚀 Features

### Buyer Features
- Browse all products
- View detailed product pages
- Manage shopping cart with optimistic UI updates
- Add and manage delivery addresses
- Place orders asynchronously
- View complete order history

### Seller Features
- Seller dashboard
- Add products with multiple images
- View all uploaded products
- View received customer orders

### Platform Features
- Clerk authentication with buyer/seller role-based access
- REST API built using Next.js Route Handlers
- MongoDB database with optimized Mongoose models
- Cloudinary image uploads with CDN delivery
- Batched asynchronous order creation using Inngest
- Server-side order amount calculation
- Optimized image delivery using Next/Image

---

# 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | Next.js 16 (App Router), React 19, Tailwind CSS 4, Axios, react-hot-toast |
| **Backend** | Next.js API Routes (Route Handlers), REST API |
| **Database** | MongoDB, Mongoose 9 |
| **Authentication** | Clerk (JWT Authentication, `getAuth()`, RBAC using user metadata) |
| **Background Jobs** | Inngest (User Sync + Batched Order Processing) |
| **Media Storage** | Cloudinary (CDN, WebP Conversion, Quality Optimization) |

---

# 📋 Prerequisites

Before running the project, ensure you have:

- Node.js
- npm or pnpm
- MongoDB Atlas account
- Clerk account
- Cloudinary account
- Inngest account

---

# 🔐 Environment Variables

Create a `.env` file and configure the following variables:

| Variable | Required | Description |
|----------|----------|-------------|
| `MONGODB_URI` | ✅ | MongoDB Atlas connection string |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | ✅ | Clerk publishable key |
| `CLERK_SECRET_KEY` | ✅ | Clerk secret key |
| `NEXT_PUBLIC_CURRENCY` | ✅ | Currency symbol used throughout the application |
| `CLOUDINARY_CLOUD_NAME` | ✅ | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | ✅ | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | ✅ | Cloudinary API secret |
| `INNGEST_EVENT_KEY` | ✅ | Inngest event key |

---

# ⚙️ Installation & Setup

## 1. Clone the repository

```bash
git clone https://github.com/AbdurRehman1299/borobazaar.git
cd borobazaar
```

## 2. Install dependencies

```bash
npm install
```

## 3. Configure environment variables

Copy the example environment file.

```bash
cp .env.example .env
```

Fill in all required environment variable values.

## 4. Start the development server

```bash
npm run dev
```

## 5. Open the application

Visit:

```text
http://localhost:3000
```

---

# 📁 Project Structure

```text
BoroBazaar
│
├── app/
│   ├── about/
│   ├── add-address/
│   ├── all-products/
│   ├── cart/
│   ├── contact/
│   ├── my-orders/
│   ├── order-placed/
│   ├── product/
│   │   └── [id]/
│   ├── seller/
│   └── api/
│       ├── cart/
│       │   ├── get/
│       │   └── update/
│       ├── order/
│       │   ├── create/
│       │   ├── list/
│       │   └── seller-orders/
│       ├── product/
│       │   ├── add/
│       │   ├── list/
│       │   └── seller-list/
│       ├── user/
│       │   ├── data/
│       │   ├── add-address/
│       │   └── get-address/
│       └── inngest/
│
├── components/
│   ├── Banner
│   ├── FeaturedProduct
│   ├── Footer
│   ├── HeaderSlider
│   ├── HomeProducts
│   ├── Loading
│   ├── Navbar
│   ├── NewsLetter
│   ├── OrderSummary
│   ├── ProductCard
│   └── seller/
│
├── config/
│   ├── db.js
│   └── inngest.js
│
├── context/
│   └── AppContext.jsx
│
├── lib/
│   ├── assets.js
│   ├── authSeller.js
│   └── productData.js
│
└── models/
    ├── Address.js
    ├── Order.js
    ├── Product.js
    └── User.js
```

---

# 📡 API Endpoints

| Method | Endpoint | Description | Auth Required |
|---------|----------|-------------|---------------|
| GET | `/api/product/list` | Get all products | ❌ |
| POST | `/api/product/add` | Add a new product (Seller only) | ✅ |
| GET | `/api/product/seller-list` | Get seller products | ✅ |
| GET | `/api/cart/get` | Get current user's cart | ✅ |
| POST | `/api/cart/update` | Update cart | ✅ |
| POST | `/api/order/create` | Create order (processed asynchronously) | ✅ |
| GET | `/api/order/list` | Buyer order history | ✅ |
| GET | `/api/order/seller-orders` | Seller received orders | ✅ |
| GET | `/api/user/data` | Get user information | ✅ |
| POST | `/api/user/add-address` | Add delivery address | ✅ |
| GET | `/api/user/get-address` | Get saved addresses | ✅ |

---

# 🔄 How It Works

## Buyer Flow

1. User signs in with Clerk.
2. User browses products.
3. Products are added to the shopping cart.
4. User adds a delivery address.
5. Order request is submitted to `/api/order/create`.
6. Inngest batches order events.
7. Orders are inserted into database.
8. Cart is cleared after successful order creation.
9. Buyer can view order history.

---

## Seller Flow

1. Seller signs in.
2. Seller role is verified server-side.
3. Seller uploads products with multiple Cloudinary images.
4. Seller can manage products.
5. Seller can view incoming customer orders.

---

## Clerk Webhook User Sync

User lifecycle events are synchronized using Inngest:

- User Created
- User Updated
- User Deleted

These events keep MongoDB user records synchronized with Clerk.

---

# ⚡ Performance Optimizations

- Single batched MongoDB query using `$in` instead of multiple database requests
- Server-side in-memory order amount calculation
- `Mongoose .lean()` for read operations
- MongoDB indexes on:
  - Orders (`userId + date`)
  - Products (`date`)
- Global MongoDB connection caching
- Inngest event batching (maximum **5 orders / 5-second window**)
- Next/Image optimization with WebP and AVIF support
- Response compression
- `poweredByHeader: false`

---

# 🔒 Security Practices

- Clerk JWT authentication for protected API routes
- Server-side authentication using `getAuth()`
- Seller authorization enforced before product mutations
- Environment variables used for all secrets
- `.env` file is never committed
- Cloudinary secure uploads
- No sensitive data exposed in API responses

---

# 🛣️ Roadmap / Future Improvements

- [ ] Stripe payment integration
- [ ] Enhanced product search and filtering UI
- [ ] Order status tracking
- [ ] Product ratings and reviews
- [ ] Email notifications for orders

---

# 🙏 Acknowledgements

Special thanks to **ZenvyroLab** for providing the internship opportunity and assigning this project. Working on **BoroBazaar** provided valuable hands-on experience in building a modern full-stack e-commerce marketplace using production-oriented technologies and best practices.

---

# 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.