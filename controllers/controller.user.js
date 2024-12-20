import userModel from '../models/user.model.js';

// Function to generate a user table row (reusable)
const generateUserTableRow = (user) => `
  <tr>
    <td style="padding: 10px; border: 1px solid #ddd; text-align: left;"><span class="math-inline">${user.name}</td>
<td style="padding: 10px; border: 1px solid #ddd; text-align: left;"></span>${user.email}</td>
    <td style="padding: 10px; border: 1px solid #ddd; text-align: left;">${user.address}</td>
  </tr>
`;

const getAllUsersFromDB = async (req, res, next) => {
	try {
		const users = await userModel.find({});
		
		
		const tableBody = users.map(generateUserTableRow).join(''); 
		const htmlResponse = `
      <div style="">
        <h2>All user list</h2>
        <div style="display:flex; justify-content:center; align-items: center; padding-bottom:100px;">
          <a href="/users/create">
            <button>Create a new user</button>
          </a>
        </div>
        <table style="width:80%; margin:auto; border-collapse: collapse; font-family: sans-serif;">
          <thead style="background-color: #f2f2f2;">
            <tr>
              <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">User Name</th>
              <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Email</th>
              <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Address</th>
            </tr>
          </thead>
          <tbody>
            ${tableBody}
          </tbody>
        </table>
      </div>
    `;
		return res.send(htmlResponse); // Ensure you send a response
	} catch (err) {
		next(err); // Pass errors to the next middleware 
	}
};
const createUserWithGetMethod = async (req, res, next) => {
	try {
		const craetUserDiv = `
		<!DOCTYPE html>
			<html>
			<head>
			<title>Create User</title>
			</head>
			<body>
			<h1>Create New User</h1>
			<form action="/users/create-user" method="POST">
				<label for="name">Name:</label><br>
				<input type="text" id="name" name="name" required><br><br>

				<label for="email">Email:</label><br>
				<input type="email" id="email" name="email" required><br><br>

				<label for="address">Address:</label><br>
				<textarea id="address" name="address" required></textarea><br><br>

				<button type="submit">Create User</button>
			</form>
			</body>
			</html>
		`
		res.send(craetUserDiv)
		} catch (err) {
		next(err); // Pass errors to the next middleware 
	}
};

const createUserIntoDB = async (req, res, next) => {
	try {
		const {name, email, address}=req.body;
		console.log(req.body)

		const users = await userModel.create({name, email, address});
		
		return res.redirect("/users"); 
	} catch (err) {
		next(err); // Pass errors to the next middleware
	}
};

const userController = {
	getAllUsersFromDB,
	createUserWithGetMethod,
	createUserIntoDB,
};

export default userController; // Fixed: module.export => module.exports
