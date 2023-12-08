const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const adminRoutes = require('./src/routes/AdminRoute');
const tiketRoutes = require('./src/routes/TiketRoute');
const login = require('./src/routes/LoginRoute');
const logout = require('./src/routes/LogoutRoute');
const RefreshToken = require('./src/routes/RefreshTokenRoute');
const connectDB = require('./src/config/db');
require('dotenv').config();
const PORT = process.env.PORT
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
// app.use(
//     cors(
// 		{
// 			origin: 'https://prjk-trampoline-fe.vercel.app',
// 			credentials: true,
// 		}
// 	)
// );
connectDB()

app.use("/api/v1/admin",adminRoutes);
app.use("/api/v1/tiket",tiketRoutes);
app.use("/api/v1/login",login)
app.use("/api/v1/logout",logout)
app.use("/api/v1/token",RefreshToken)
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));
app.listen(PORT, () => {
	console.log(`Node API app is running on port ${PORT}`);
});
