# 📝 Student Form

**Student Form** is a web application designed to collect and display student information. Users can enter details into a form, which will then be displayed in a table format. Each entry in the table can be deleted as needed.

## 🌐 Live Demo

You can view and interact with the live demo of the Student Form project [Here](https://66baef7a367f13ac262077a1--dinesh-forms-data-display-in-table.netlify.app/).

## 🗂 Project Structure

This project consists of three main files:

- **`index.html`**: The HTML file that defines the structure of the form and the table.
- **`style.css`**: The CSS file that provides styling for the form, table, and overall layout.
- **`script.js`**: The JavaScript file that contains the logic for handling form submissions and managing the table.

### 📁 File Descriptions

#### 1. `index.html`

The HTML file sets up the user interface of the application:

- **Form Elements:**
  - **Name:** A text input field for the student's name.
  - **Age:** A number input field for the student's age.
  - **Gender:** Radio buttons for selecting the student's gender.
  - **Course:** A dropdown select input for choosing the course.
  - **Email:** A text input field for the student's email address.
  - **Save Button:** A button to submit the form and add the student's information to the table.

- **Table:**
  - **Columns:** Name, Age, Course, Gender, Email, and Action.
  - **Rows:** Initially empty, will be populated with student data upon form submission.
  - **Delete Button:** Each row includes a button to delete the corresponding entry.

#### 2. `style.css`

The CSS file styles the user interface to ensure a clean and visually appealing design:

- **Container:** Centers the form and table within the page, adds padding, and applies a border and shadow for better visibility.
- **Form Elements:** Styles the input fields, labels, and buttons for consistency and readability.
- **Table:** Enhances the table's appearance with borders, padding, and text alignment.
- **Buttons:** Provides custom styles for the save and delete buttons, including hover effects.

#### 3. `script.js`

The JavaScript file contains the logic for interacting with the form and the table:

- **`saveStudent` Function:**
  - **Collects Form Data:** Retrieves values from the form fields.
  - **Creates New Table Row:** Adds a new row to the table with the student’s details.
  - **Adds Delete Button:** Includes a button to remove the student entry from the table.
  - **Resets the Form:** Clears the form fields after submission.

## 🚀 Usage Instructions

1. **Open the Project:**
   - Open the `index.html` file in a web browser to view the application.

2. **Adding a Student:**
   - Enter the student's details into the form fields.
   - Click the "Save" button to add the student’s information to the table.

3. **Deleting a Student:**
   - In the table, locate the row of the student you wish to delete.
   - Click the "Delete" button in that row to remove the entry.

## 🔧 Future Enhancements

- **Input Validation:** Enhance the form validation to check for proper input formats and required fields.
- **Persistent Storage:** Implement local storage or server-side storage to keep student data between sessions.
- **Advanced UI/UX:** Improve the user interface with responsive design, animations, and additional features for a better user experience.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements.

