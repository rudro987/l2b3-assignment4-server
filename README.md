# Mechanical Keyboard Selling Platform

The Mechanical Keyboard Selling Platform allows users to book mechanical keyboards with ease and provides admins the ability to manage these items and bookings.

---

 ### [Live Server](https://ctrl-shift-esc-server.vercel.app/)
```console
https://ctrl-shift-esc-server.vercel.app/
```

## Used Technologies:

- TypeScript
- Node.js
- Express.js
- Mongoose
- Zod

## Features:

- **Products Management:**
  Users can create, update, and delete products. Each Products has details like name, description, price, brand and rating.

- **Create Product:**
  Users can add products by specifying the name, description, brand, price, image, quantity and rating.

- **View products:**
  Users can view all products using products route. Query system implemented for search, filter and sort method.

- **Update Product:**
  Users can updtae product for all fields or selected fields. Both immutable and mutable datas can be updated.

- **Delete Product:**
  Users can delete a product by product id(mongodb objectId). Product is not permanently deleted, its a soft delete where for deleted product isDeleted field is changed to true.

- **Error Handling:**
  Comprehensive error handling ensures proper responses and messages for validation errors, duplicate entries, cast errors and not found routes.


## How to setup in local computer:

### Clone the Repository:

```plain
git clone https://github.com/rudro987/l2b3-assignment4-server.git
```

### Install Dependencies:

```markdown
npm install or pnpm install
```

### Environment Variables:

- Create a `.env` file in the root directory.
- Add the following environment variables:

```markdown
PORT=5000
DATABASE_URL=your_database_url
```

### Run the Application:

```markdown
npm run start:dev or pnpm start:dev
```

## How to use the application:

### 1. Create Product:

- Endpoint: POST `/api/v1/products/create-product`
- Request Body:

```json
{
  "name": "Prodict name",
  "description": "Product description",
  "image": "https://product-image-url",
  "brand": "BrandName",
  "price": 50,
  "rating": 4,
  "quantity": 20
}
```

- Response Body: 

```json
{
    "success": true,
    "message": "Product created successfully!",
    "data": {
        "name": "Ducky Silicone Dust Cover",
        "description": "Fullsize silicone dust cover keeps out dust, crumbs, and hair. Can be used on most 104 or 108 key keyboards. Fits all Ducky fullsize keyboards. ISO compatible",
        "image": "https://i.ibb.co.com/9TnztXj/1286-B64-ZH-Silicone-Dust-Cover.webp",
        "brand": "Ducky",
        "price": 12,
        "rating": 4.5,
        "quantity": 10,
        "isDeleted": false,
        "_id": "66f8056cb0bb8e440d3742f2",
        "createdAt": "2024-09-28T13:32:28.255Z",
        "updatedAt": "2024-09-28T13:32:28.255Z",
    }
}
```

### 2. Get All Products

- Endpoint: GET `/api/v1/products`
- Queries: `/api/v1/products?searchTerm=Search texts` or `/api/v1/products?minPrice=20&maxPrice=100`
- Multiple queries: `/api/v1/products?searchTerm=Search texts&minPrice=20&maxPrice=100`
- Response Body:

```json
{
    "success": true,
    "message": "Products fetched successfully!",
    "data": [
        {
            "_id": "66ec87589806c0c1f01a4e1a",
            "name": "Varmilo Teal / White 108 Key Varmilo Profile Dye",
            "description": "**Keycaps Only** Keyboard Not Included. Dye Sublimation top printed legends. Standard Varmilo profile PBT keycaps.",
            "image": "https://i.ibb.co.com/8DDnxfF/13274-63ae03f032c02-108-Key-Dye-Sub-PBT-Keycap-Set-Teal-and-White.webp",
            "brand": "Varmilo",
            "price": 34.99,
            "rating": 4.9,
            "quantity": 30,
            "isDeleted": false,
            "createdAt": "2024-09-19T20:19:36.167Z",
            "updatedAt": "2024-09-21T16:10:51.908Z"
        },
        //..more data
    ]
}
```

### 3. Get Single Product

- Endpoint: GET `/api/v1/products/:id`

- Response Body:

```json
{
    "success": true,
    "message": "Product fetched successfully!",
    "data": {
        "_id": "66ec85609806c0c1f01a4de8",
        "name": "Ducky Silicone Dust Cover",
        "description": "Fullsize silicone dust cover keeps out dust, crumbs, and hair. Can be used on most 104 or 108 key keyboards. Fits all Ducky fullsize keyboards. ISO compatible",
        "image": "https://i.ibb.co.com/9TnztXj/1286-B64-ZH-Silicone-Dust-Cover.webp",
        "brand": "Ducky",
        "price": 12,
        "rating": 4.5,
        "quantity": 10,
        "isDeleted": false,
        "createdAt": "2024-09-19T20:11:12.809Z",
        "updatedAt": "2024-09-19T20:11:12.809Z",
        "__v": 0
    }
}
```

### 4. Update a Product

- Endpoint: PUT `/api/v1/products/:id`

- Request Body:

```json
{
  "name": "Ducky Silicone Dust Cover",
  "image": "https://i.ibb.co.com/9TnztXj/1286-B64-ZH-Silicone-Dust-Cover.webp",
  "brand": "Ducky",
  "price": 12,
  //..more or less fields based on necessirty
}
```

- Response Body:

```json
{
    "success": true,
    "message": "Product Updated successfully!",
    "data": {
        "_id": "66f8056cb0bb8e440d3742f2",
        "name": "Ducky Silicone Dust Cover",
        "description": "Fullsize silicone dust cover keeps out dust, crumbs, and hair. Can be used on most 104 or 108 key keyboards. Fits all Ducky fullsize keyboards. ISO compatible",
        "image": "https://i.ibb.co.com/9TnztXj/1286-B64-ZH-Silicone-Dust-Cover.webp",
        "brand": "Ducky",
        "price": 14,
        "rating": 4.5,
        "quantity": 20,
        "isDeleted": false,
        "createdAt": "2024-09-28T13:32:28.255Z",
        "updatedAt": "2024-09-28T13:35:18.821Z",
    }
}
```

### 5. Delete a Facility (Admin Only)

- Endpoint: DELETE `/api/v1/products/:id`

- Response Body: 

```json
{
    "success": true,
    "message": "Product deleted successfully!",
    "data": {
        "_id": "66f80689b0bb8e440d3742f7",
        "name": "Ducky Silicone Dust Cover",
        "description": "Fullsize silicone dust cover keeps out dust, crumbs, and hair. Can be used on most 104 or 108 key keyboards. Fits all Ducky fullsize keyboards. ISO compatible",
        "image": "https://i.ibb.co.com/9TnztXj/1286-B64-ZH-Silicone-Dust-Cover.webp",
        "brand": "Ducky",
        "price": 12,
        "rating": 4.5,
        "quantity": 10,
        "isDeleted": true,
        "createdAt": "2024-09-28T13:37:13.002Z",
        "updatedAt": "2024-09-28T13:37:24.041Z",
    }
}
```

### Error Handling

The application handles errors such as validation errors, duplicate entries, and not found routes with appropriate error messages and status codes.

## Happy Coding 😎