// Swagger options
export const SWAGGER_OPTIONS = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description:
        'The Task Manager API simplifies task tracking, prioritization, and user authentication with cookie-based sessions. Manage your tasks efficiently and securely, seamlessly integrating the API into your applications.',
      contact: {
        name: 'Orji Michael',
        email: 'orjimichael4886@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api/v1', // Development environment
        description: 'Development Environment',
      },
      {
        url: 'https://task-manager-v2.onrender.com/api/v1', // Staging environment
        description: 'Staging Environment',
      },
      {
        url: 'https://api.example.com/api/v1', // Production environment
        description: 'Production Environment',
      },
    ],
    tags: [
      {
        name: 'Tasks',
        description: 'API operations related to tasks, including creation, updates, and deletion.',
      },
      {
        name: 'Authentication',
        description:
          'API operations related to user login and authorization with cookie-based sessions.',
      },
    ],
  },
  apis: ['**/*.jsdoc.ts'], // Define the paths to your API routes
};
