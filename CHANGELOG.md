# Changelog

## [0.0.4] - 2025-05-30

### Added
- Listing module: controller, service, DTOs, and OpenAPI (Swagger) decorators.
- User module: controller, service, DTOs, and OpenAPI decorators.
- Example DTOs for both user and listing with validation and Swagger examples.
- Filtering listings by userId in the API.
- TypeORM integration with PostgreSQL and migration setup.
- Project structure and documentation improvements.
- README with clear Spring Boot-like architecture and migration instructions.

### Fixed
- TypeORM CLI migration issues with TypeScript and CommonJS/ESM conflicts.
- Ensured unique email constraint in User entity.

### Changed
- Improved service methods to use DTOs for input/output.
- Enhanced OpenAPI documentation for all endpoints.

---