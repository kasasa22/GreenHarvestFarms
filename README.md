# GreenHarvest Farms

**GreenHarvest Farms** is a web application designed to connect Ugandan farmers directly with buyers, promoting sustainability and eliminating intermediaries. The platform enables better market access for farmers, improved profit margins, and easy access to fresh, high-quality produce for buyers.

## Key Features

- **Farmer and Buyer Accounts**: Farmers can list their produce, and buyers can browse, order, and track purchases.
- **Direct Communication**: Facilitates direct interaction between farmers and buyers for transparent transactions.
- **Sustainability Focus**: Promotes organic and locally sourced produce, supporting eco-friendly farming.
- **Efficient Logistics**: Helps users arrange deliveries via third-party logistics providers.
- **Marketplace Analytics**: Provides insights on market trends to assist farmers in optimizing their yield and pricing.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed
- [MongoDB](https://www.mongodb.com/) installed and running locally or connected through a cloud service like MongoDB Atlas
- Basic knowledge of JavaScript, Express.js, React.js, and MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kasasa22/GreenHarvestFarms.git
   ```
2. Navigate into the project directory:
   ```bash
   cd GreenHarvestFarms
   ```

### Backend Setup

1. Go to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables in a `.env` file:
   ```
   MONGO_URI=your-mongodb-uri
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm run server
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000` to view the application.

## Project Structure

```
GreenHarvestFarms/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

### Database

The app uses **MongoDB** to store user data, product listings, and transactions. You will need to provide your MongoDB URI in the backend’s `.env` file to connect to the database.

### Scripts

- **Backend**: `npm run server` - Starts the backend server.
- **Frontend**: `npm start` - Starts the React development server.
  
### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.