API to insert new serial numbers from PostgreSQL into MS SQL DB

# Introduction

Gühring is one of the partners in the AICoM project. The role is to maintain the data in database.
There will be new serial numbers created in PostgreSQL. The API is created to search for the new serial numbers that are not exists in MS SQL DB and create a new data record of the serial numbers in MS SQL DB.

# Usage

The API will run automatically in Task Scheduler to check for new serial numbers in PostgreSQL and create new data records automatically in MS SQL DB.

# Test

Please refer to the [Documentation](http://localhost:8000/api-docs/).

# Example:

GET request using fetch with async/await:

const getData = async () => {
  try {
    const response = await fetch(`http://localhost:8004/Prog`);
    const results = await response.json();
    console.log(results);
  } catch (err) {
    console.log(err);
  }
};
getData();

# Built With

- Backend: Node.js, Express.js
https://nodejs.org/en
https://expressjs.com/en/starter/installing.html

- Database Query: Sequelize
https://sequelize.org/"><strong>

- API Documentation: Swagger
https://swagger.io/


# Acknowledgments/References

- [Swagger Petstore]
https://petstore.swagger.io/#/pet/findPetsByStatus

- [NodeJS Swagger API Documentation Tutorial Using Swagger JSDoc]
https://www.youtube.com/watch?v=S8kmHtQeflo&t=444s
