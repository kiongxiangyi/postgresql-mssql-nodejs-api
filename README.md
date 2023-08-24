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
The other project's partners will store new files on the file system and this API is created for them to store the details of the files in DB.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- <a href="https://nodejs.org/en"><strong>Node.js</strong></a>
- <a href="https://expressjs.com/en/"><strong>Express.js</strong></a>
- <a href="https://sequelize.org/"><strong>Sequelize</strong></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Submit a HTTP POST request.
Please refer to the [Documentation](http://localhost:8000/api-docs/).

### Example:

POST request using fetch with async/await:

```js
const saveData = async () => {
  try {
    await fetch(
      `http://localhost:8000/ArtikelDokumente?Stueckliste=T1000&Dokumentpfad=C%3A%5Cowncloud.log`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: "React POST Request Example" }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};
saveData();
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
