Matrix Word Search Visualizer
Overview
The Matrix Word Search Visualizer is an interactive web application that allows users to search for words in a randomly generated matrix of uppercase letters. The application highlights the path of the word within the matrix if it exists, providing a visual representation of the search process with a delay for better clarity.

Features
Random Matrix Generation: Generates a 4x4 matrix filled with random uppercase letters each time the page is loaded or refreshed.
Word Search Functionality: Allows users to input a word and searches for the word in the matrix.
Real-time Input Conversion: Converts all user input to uppercase in real-time to match the matrix format.
Visual Search Process: Highlights the cells in the matrix as it searches for the word, with a delay to visualize the process.
User-friendly Interface: Simple and intuitive interface with an input field and search button.
Technologies Used
HTML: For the structure of the web page.
CSS: For styling the matrix and highlighting the search path.
JavaScript: For generating the matrix, handling user input, performing the word search, and adding the visual delay.
Usage
Clone the Repository:

sh
Copy code
git clone https://github.com/your-username/matrix-word-search-visualizer.git
Navigate to the Project Directory:

sh
Copy code
cd matrix-word-search-visualizer
Open index.html in a Web Browser:

Simply open the index.html file in your preferred web browser.
Input a Word and Search:

Enter the word you want to search for in the matrix in the input field. The input will be automatically converted to uppercase.
Click the "Search" button to start the search. If the word is found, the path will be highlighted in red with a delay to visualize the search process.
Implementation Details
Matrix Generation:

The matrix is generated with random uppercase letters using JavaScript.
A 4x4 grid is created dynamically and displayed on the web page.
Word Search Algorithm:

The search algorithm checks all possible paths (right, down, left, up) from each cell.
Uses recursion with a delay to highlight the path of the word in the matrix.
Ensures only the correct path of the searched word is highlighted.
Reset Functionality:

Resets the matrix and clears any previous highlights before a new search starts.
Contributing
We welcome contributions to enhance the functionality and features of this project. Feel free to open issues or submit pull requests with improvements or bug fixes.
