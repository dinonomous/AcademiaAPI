Explanation of the Directory Structure
    src/: Main source code directory.
    config/: Configuration files, including database configuration and other settings.
    controllers/: Controllers that handle incoming requests and return responses.
    middlewares/: Custom middleware functions that process requests before reaching the controllers.
    models/: Mongoose or Sequelize models that define the schema for your database collections or tables.
    routes/: Route definitions that map endpoints to controllers.
    services/: Business logic and service layer.
    utils/: Utility functions and helpers.
    app.ts: Main application setup and middleware registration.
    server.ts: Server startup and listening logic.