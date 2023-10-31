I want to use this repository for both M4 and M5. The last commit for M4 Commits was on Oct 29, 2023, as shown on the record and I applied one late day for M4 submission.Thank you so much for reading these.

# Running a React Project Locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

Before you can run this project, make sure you have the following installed:

1. Node.js: Node.js is an open-source, cross-platform runtime environment for developing server-side and networking applications. You can download it from here.
2. npm (Node Package Manager): npm is the package manager for Node.js and is automatically installed when you install Node.js.
   You can verify if you have both correctly installed by opening your terminal or command prompt and typing:

```
node -v
npm -v
```

If both commands return a version number, then the installation was successful.

## Clone the Repository

Firstly, you need to clone the repository at the dafault main branch to your local machine. You can do this by running the following command in your terminal or command prompt:

```
git clone <repository_url>
```

Replace <repository_url> with the actual URL of your Git repository.

## Installing Dependencies

The next step is installing the dependencies that the React project needs. Navigate to the project directory using the command:

```
cd <project_directory>
```

Replace <project_directory> with the path to the directory where you cloned your project.

Then, install the dependencies by running:

```
npm install
```

This will create a node_modules folder in your project directory and download all of the necessary packages there based on the information in your package.json file.

## Running the Project

To start the server and run the project, use the command:

```
npm start
```

After running this command, your app should be up and running in development mode. Open http://localhost:3000 to view it in your browser. The page will automatically reload if you make changes to the source code. Any lint errors will be displayed in the console.

## Building the Project

To build the app for production, use the command:

```
npm run build
```

This command creates a build folder in your project directory with the optimized production build. It correctly bundles React in production mode and optimizes the build for best performance. The filenames of the bundled files include hashes for managing cache efficiently.

Now, your React app should be ready for deployment. For more information about deploying your React app, see the Create React App deployment documentation.
