# Structure boilerplate Node.JS

Boilerplate to streamline the development process with some out-of-the-box use cases

## Documentation structure folder
![App Screenshot](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

```bash
├── docs                      # OpenAPI documentation folder
├── test                      # Tests
├── src                       # Application source code folder
│   ├── domain                # Domain application
│   │   ├── entities          # Class folder and business rule validators
│   │   │   └── errors        # Class default errors
│   │   ├── contracts         # Folder that will indirectly connect the business layer with the external layer
│   │   │   ├── use-cases     # Use cases interface folder
│   │   │   └── repositories  # Repository interface folder, where it will link the business layer with the external layer
│   │   └── use-cases         # Folder that contains the most system-specific business rules. This is where all the system use cases are implemented
│   ├── infrastructure        # Folder is made up of tools like database, UI, etc. In this layer, the idea is to have as little code as possible, just enough to interconnect the layers and inject the necessary implementations into the inner layers.
│   │   ├── adapters          # Adapter folder
│   │   ├── config            # Application setup folder
│   │   ├── database          # Database configuration folder
│   │   ├── factories         # Dependency injection folder
│   │   ├── middlewares       # Middlewares folder
│   │   ├── routes            # Routes folder
│   ├── interfaces            # Folder for the purpose of converting data in the most accessible and convenient way possible for the entities and use cases
│   │   ├── contracts         # Folder that will indirectly connect the business layer with the external layer
│   │   ├── controllers       # Folder where it will receive the information formatted by the presentation and will process the use case information
│   │   └── presentations     # Folder where you will convert standard input and output data
```

## Requirements

To run the project, install the following software

* Docker >= 1.40+
* Node.JS >= 16+

## Run project

To run the project, run the following command

```bash
  docker-compose up --build
```

## Run tests

To run the tests, run the following command

```bash
  npm run test:coverage
```

## Feedback

If you have any feedback, please let us know via **douglasdennys45@gmail.com**

## Authors

- [@Douglas Dennys](https://www.github.com/douglasdennys45)
