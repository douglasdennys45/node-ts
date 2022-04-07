# Structure boilerplate Node.JS

Boilerplate to streamline the development process with some out-of-the-box use cases

## Documentation structure folder
![App Screenshot](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

```bash
├── docs                    # OpenAPI documentation folder
├── lib                     # Application source code folder
│   ├── entities            # Class folder and business rule validators
│   │   └── validators      # Business rules validation folder
│   ├── infrastructure      # Folder is made up of tools like database, UI, etc. In this layer, the idea is to have as little code as possible, just enough to interconnect the layers and inject the necessary implementations into the inner layers.
│   │   ├── server          # Rest API configuration folder
│   │   ├── oauth           # API authentication and authorization configuration folder
│   │   ├── database        # Database configuration folder
│   │   ├── http            # HTTP calls config folder
│   │   ├── storage         # Message read and publish configuration folder has topics and queues
│   │   └── queue           # Storage usage configuration folder
│   ├── interfaces          # Folder for the purpose of converting data in the most accessible and convenient way possible for the entities and use cases
│   │   ├── controllers     # Folder where it will receive the information formatted by the presentation and will process the use case information
│   │   └── presentations   # Folder where you will convert standard input and output data
│   ├── ports               # Folder that will indirectly connect the business layer with the external layer
│   │   ├── oauth           # OAuth interface folder, where it will link the business layer with the outer layer
│   │   ├── http            # HTTP interface folder, where it will link the business layer with the external layer
│   │   ├── repository      # Repository interface folder, where it will link the business layer with the external layer
│   │   ├── storage         # Storage interface folder, where it will link the business layer with the external layer
│   │   └── queue           # Queue interface folder, where it will link the business layer with the external layer
│   └── usecases            # Folder that contains the most system-specific business rules. This is where all the system use cases are implemented
```

## Requirements

To run the project, install the following software

* Docker >= 1.40+

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