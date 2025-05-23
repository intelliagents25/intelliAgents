
# Media 470 project IntelliAgents


With IntelliAgents, we want to experiment with advanced agentic workflows to streamline and automate complex tasks. Our current use case is the automatic generation of calendar events based on a syllabus upload. By utilizing agentic agents, IntelliAgents ensures that all relevant dates and deadlines are seamlessly integrated into your calendar, enhancing productivity and organization.


## Developer Setup

To run the frontend locally, follow these steps:

### Prerequisites
> **Note:** It's easier to deal with Node.js versions if you use a tool called nvm, installations can be seen [here](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/).

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 20 or higher)
- [npm](https://www.npmjs.com/) (version 9 or higher)
- [Git](https://git-scm.com/)


To check whether these were installed properly, you can run these:
```bash
# Check Node.js version (should be 20 or higher)
node -v

# Check npm version (should be 9 or higher)
npm -v

# Check Git version
git --version
```

### Installation
 > Note on why we use `npm ci` instead of `npm install`: read this [thread](https://stackoverflow.com/questions/48524417/should-the-package-lock-json-file-be-added-to-gitignore).
1. Clone the repository:
    ```sh
    git clone https://github.com/vangeliq/intelliAgents.git
    ```
2. Navigate to the project directory:
    ```sh
    cd intelliAgents
    ```
3. Install the dependencies:
    ```sh
    npm ci
    ```
### Running the Application

1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

For other options on running the frontend, please refer to the [README in the frontend folder](frontend/README.md).

