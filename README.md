<h3 align="center">API to read and write data from different databases</h3>

  <p align="center">
    Read and filter data from PostgreSQL and write into Microsoft SQL Server database
    <br />
    <a href="https://github.com/kiongxiangyi/modulework-nodejs-sequelise-api"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[Artificial Intelligence Controlled Milling (AICoM)](https://lernendewerkzeugmaschine.de/)

Gühring is one of the partners in the AICoM project. The role is to maintain the data in database.
There will be new serial numbers created in a PostgreSQL. This API is created to search for the new serial numbers that are not exists in a MS SQL DB and create a new data record of the serial number in the MS SQL DB.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- <a href="https://nodejs.org/en"><strong>Node.js</strong></a>
- <a href="https://expressjs.com/en/"><strong>Express.js</strong></a>
- <a href="https://sequelize.org/"><strong>Sequelize</strong></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<ul>
  <li>The API will run automatically in Task Scheduler to check for new serial numbers in PostgreSQL and create new data records for the new serial numbers automatically in MS SQL DB.</li>
</ul>

## Test

Please refer to the [Documentation](http://localhost:8004/api-docs/).

### Example:

GET request using fetch with async/await:

```js
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
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Xiang Yi Kiong - xiangyi.kiong@guehring.de

Project Link: [https://github.com/kiongxiangyi/dateisystem-nodejs-api](https://github.com/kiongxiangyi/dateisystem-nodejs-api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Swagger Petstore](https://petstore.swagger.io/#/pet/findPetsByStatus)
- [NodeJS Swagger API Documentation Tutorial Using Swagger JSDoc](https://www.youtube.com/watch?v=S8kmHtQeflo&t=444s)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
