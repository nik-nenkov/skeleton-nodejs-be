# NestJS Spring Boot-like Backend

This is a Node.js backend built with **NestJS**, inspired by the architecture and patterns of **Spring Boot**.
It uses TypeORM for data access, PostgreSQL as DB, and Swagger for API documentation.

---

## 🚀 Project Structure

* `src/` — main source code

  * `user/` — example feature module

    * `user.controller.ts` — REST API controllers (similar to Spring MVC controllers)
    * `user.service.ts` — business logic layer (similar to Spring Services)
    * `user.entity.ts` — TypeORM entities (equivalent to JPA entities)
    * `dto/` — Data Transfer Objects (request/response models)
  * `migrations/` — TypeORM migration scripts
  * `app.module.ts` — main application module, imports all feature modules
  * `main.ts` — bootstrap file

* `data-source.ts` — TypeORM data source config (like `application.properties` in Spring Boot)

* `.env` — environment variables (DB config, etc.)

* `package.json` — project dependencies and scripts

---

## 🛠 Setup

1. **Install dependencies**

```bash
npm install
```

2. **Create `.env` file** (example):

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=nestuser
DB_PASS=nestpass
DB_NAME=nestdb
```

3. **Start PostgreSQL**

If you use Docker Compose:

```bash
docker-compose up -d
```

---

## 🏃 Running the app

```bash
npm run start
```

Starts the app on `http://localhost:3000`

---

## 📜 Database migrations

* To generate a new migration based on entity changes:

```bash
npx typeorm migration:generate -d ./data-source.ts src/migrations/<MigrationName>
```

* To run migrations:

```bash
npx typeorm migration:run -d ./data-source.ts
```

* To revert last migration:

```bash
npx typeorm migration:revert -d ./data-source.ts
```

**Important:** `synchronize` is set to `false` in production. Use migrations instead.

---

## 📑 API Documentation (Swagger)

Swagger UI is available at:

```
http://localhost:3000/api
```

It automatically generates interactive API docs based on your controllers and DTOs decorated with Swagger decorators (`@ApiTags`, `@ApiResponse`, etc.).

---

## 🔍 Layers & Design

| Layer          | Responsibility               | NestJS Equivalent                 | Spring Boot Analogy          |
| -------------- | ---------------------------- | --------------------------------- | ---------------------------- |
| Controller     | Expose REST API endpoints    | `@Controller()` classes           | `@RestController` classes    |
| Service        | Business logic               | `@Injectable()` services          | `@Service` classes           |
| Repository/DAO | Data persistence, DB access  | TypeORM repositories or `@Entity` | Spring Data JPA repositories |
| DTO            | API input/output data models | DTO classes                       | Request/Response DTOs        |

---

## 🧩 Dependency Injection

NestJS provides built-in DI container similar to Spring’s:

* Use `@Injectable()` on services
* Inject services into controllers via constructor injection
* `@Module()` registers and wires all components

---

## 📦 Building & Output

* TypeScript compiles from `src/` to `dist/`
* Use `npm run build` to transpile
* Run production with `node dist/main.js`

---

## 🧪 Testing & Linting

* `npm run test` — runs Jest tests
* `npm run lint` — runs ESLint on codebase
* `npm run format` — formats code with Prettier

---

## 📝 Notes

* Use environment variables for config and sensitive info
* Avoid `synchronize: true` in production, always use migrations
* Keep your entity and DTO separate — entities map DB schema, DTOs shape API contract
* Use Swagger decorators to keep your API documentation consistent and automatic

---
