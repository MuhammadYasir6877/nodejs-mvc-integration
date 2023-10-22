const express = require('express');
const path = require('path');
const app = express();
const expressLayouts = require('express-ejs-layouts'); // Import express-ejs-layouts

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts
app.use(expressLayouts); // Use express-ejs-layouts

// Set a default layout for all routes
app.set('layout', 'admin/layouts/app');

//Static Folder for Assets
app.use(express.static(path.join(__dirname, 'public')));

// Sample data (for demonstration)
const data = {
  title: 'User Management',
};

// Routes
app.get('/admin/users', (req, res) => {
  res.render('admin/users/index', data);
});

app.get('/admin/users/create', (req, res) => {
  res.render('admin/users/create', data);
});

app.get('/admin/users/edit/:id', (req, res) => {
  // Fetch user data based on 'id' and pass it to the view
  const userData = { id: req.params.id, name: 'John Doe' }; // Sample data
  res.render('admin/users/edit', { ...data, user: userData });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
