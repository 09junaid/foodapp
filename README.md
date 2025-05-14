
## Full Stack Web Application
A modern full-stack web application built with:
 - **Frontend:** [Next.js](https://nextjs.org/) (TypeScript)
 - **Backend:** [Node.js](https://nodejs.org/), [Express](https://expressjs.com/),[PostgreSQL](https://www.postgresql.org/), [Prisma ORM](https://www.prisma.io/)
 
 ## ⚙️ Frontend Setup (client)
 ### Step 1: Go to client folder
 ```bash
 cd client
 ```
### Step 2: Install dependencies
```bash
npm install
```
### Step 3: Run the development server
```bash
npm run dev
```
### 🔗 Frontend will run on:
```bash
http://localhost:3000
```

## 🛠️ Backend Setup (server)
### Step 1: Go to server folder
```bash
cd server
```
### Step 2: Install dependencies
```bash
npm install
```
### Step 3: Create .env filey
Make a .env file in the server/ directory:
```bash
DATABASE_URL="postgresql://username:1234@localhost:5432/restaurant"
```
```bash
PORT=5000
```
### Step 4: Setup Prisma & Database
```bash
npx prisma generate
```
```bash
npx prisma migrate dev --name init
```
### Step 5: Run the backend server
```bash
npm run dev
```
This runs both TypeScript compilation (tsc -w) and your server using nodemon.

### 📦 To build for production
```bash
npm run build
```
### 🔗 Backend will run on:
```bash
http://localhost:5000
```
### Swagger will run on:
```bash
http://localhost:5000/api-docs
```





