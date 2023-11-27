# Task Manager API

Task Manager API offers a straightforward solution for efficient task management. With this API, you can create, track, and prioritize tasks effortlessly. What sets it apart is the user-friendly and secure login system, powered by Magic Link Authentication and cookies.

## Documentation

Explore the API's endpoints, schemas, and authentication details through our Swagger documentation, available [here](https://task-manager-v3.onrender.com/docs).

## Main Scripts

1. **Build**

   - Command: `npm run build`
   - Use this script to build the project, which is the initial step in setting up the API.

2. **Start**

   - Command: `npm run start`
   - Once the project is built, use this command to start the API for production use.

3. **Development Mode**

   - Command: `npm run dev`
   - This script is ideal for development as it enables live-reloading and other helpful tools for debugging and testing.

4. **Unit Testing**
   - Command: `npm run test`
   - Run unit tests to ensure the reliability of the API. These tests cover a wide range of scenarios, including authentication, task management, and error handling.

## Setting Up Environment Variables

Before running the Task Manager API, you'll need to set up these environment variables in the `env.sample` file. Create a `.env` file in the project root and add these variables with your values.

## Getting Started

To get started with the Task Manager API, follow these steps:

1. Clone the repository: `git clone https://github.com/mjavason/Task-Manager-API-with-End-to-End-Unit-Testing.git`

2. Install dependencies: `npm install`

3. Build the project: `npm run build`

4. Start the API:
   - For production use: `npm run start`
   - For development with live-reloading: `npm run dev`

## API Endpoints

The API provides the following endpoints for managing tasks:

- `GET /tasks`: Retrieve a list of all tasks.
- `POST /tasks`: Create a new task.
- `PATCH /tasks/:id`: Update an existing task.
- `DELETE /tasks/:id`: Delete a task.
- `GET /tasks/search`: Search for tasks based on query parameters.
- `GET /tasks/count`: Get the total count of tasks based on query parameters.
- `GET /tasks/exists`: Check if tasks exist based on query parameters.

## Authentication

The Task Manager API offers a secure and user-friendly login experience. Magic Link Authentication, coupled with cookies, ensures seamless and robust authentication for our users. This system provides a convenient and safe way to access the platform, and users can log in with ease.

## Unit Testing

To maintain the reliability of the API, we've implemented unit tests covering various scenarios, including authentication, task management, and error handling. To run the unit tests, use the following command:

```bash
npm run test
```
````

## Contributing

Contributions to the API are welcomed! If you'd like to contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Make your improvements or additions.

4. Thoroughly test your changes.

5. Create a pull request with a clear description of your changes.
