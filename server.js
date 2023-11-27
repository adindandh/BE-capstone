const express = require('express');
const app = express();
const authRoutes = require('./app/routes/userRoutes');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API CAPSTONE',
      version: '1.0.0',
      description: 'A SIMPLE AUTHENTICATION API',
    },
  },
  apis: ['./app/routes/*.js'], // path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(3000, () => console.log('Server started on port 3000'));