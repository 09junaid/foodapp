import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
export function setupSwagger(app) {
    const swaggerJsonPath = path.join(process.cwd(), "swagger.json");
    const swaggerDocument = JSON.parse(fs.readFileSync(swaggerJsonPath, "utf8"));
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
