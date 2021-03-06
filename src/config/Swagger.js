import swaggerJsDoc from "swagger-jsdoc";

const swaggerDefinition = {
    info: {
        title: "Changelle Mundiale",
        version: "1.0.0",
        description: "Crawler search products data in Mercado livre"
    }
}

const swaggerSpec =  swaggerJsDoc({
    swaggerDefinition: swaggerDefinition,
    apis: [process.env.SWAGGER_PATH_ROUTES],
});

export default swaggerSpec;