const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const adminRoutes = require('./src/routes/AdminRoute');
const tiketRoutes = require('./src/routes/TiketRoute');
const login = require('./src/routes/LoginRoute');
const logout = require('./src/routes/LogoutRoute');
const RefreshToken = require('./src/routes/RefreshTokenRoute');
require('dotenv').config();
const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(
    cors(
		// {
		// 	origin: 'http://localhost:3000',
		// 	credentials: true,
		// }
	)
);

mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('connected to MongoDB');
		app.listen(process.env.APP_PORT, () => {
			console.log(`Node API app is running on port ${process.env.APP_PORT}`);
		});
		console.log('mantap')
	})
	.catch((err) => {
		console.log(err);
	});

app.use("/api/v1/admin",adminRoutes);
app.use("/api/v1/tiket",tiketRoutes);
app.use("/api/v1/login",login)
app.use("/api/v1/logout",logout)
app.use("/api/v1/token",RefreshToken)
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));