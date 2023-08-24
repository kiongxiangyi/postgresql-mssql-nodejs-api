const express = require("express");
const router = express.Router();
const prog = require("../../models/postgres/Prog");
const Serialnummern = require("../../models/mssql/Serialnummern");

//swagger DOC: https://petstore.swagger.io/#/pet/findPetsByStatus

/**
 * @swagger
 * tags:
 *    name: Proj
 *    description: Table Proj in PostgreSQL
 */

/**
 * @swagger
 * /Proj:
 *    get:
 *      summary: Find all the new inserted serial numbers
 *      tags: [Proj]
 *      responses:
 *       200:
 *        description: successful operation
 *        links: ""
 */

router.get("/", async (req, res) => {
  try {
    const arrNewSerialNo = [];
    const arrOldSerialNo = [];
    const findNewSerialNo = await prog.findAll();

    for (i = 0; i < findNewSerialNo.length; i++) {
      if (findNewSerialNo[i].Serialnumber !== 0) {
        arrNewSerialNo.push(findNewSerialNo[i].Serialnumber.toString()); //change int to string because postgresql is int and mssql is string
      }
    }

    const findExistingSerialNo = await Serialnummern.findAll();

    for (i = 0; i < findExistingSerialNo.length; i++) {
      if (findExistingSerialNo[i].Serialnummer !== 0) {
        arrOldSerialNo.push(findExistingSerialNo[i].Serialnummer);
      }
    }

    let arrCompareSerialNo = arrNewSerialNo.filter(
      (item) => arrOldSerialNo.indexOf(item) == -1
    );

    if (arrCompareSerialNo.length !== 0) {
      let validatedID = 0;
      const { count } = await Serialnummern.findAndCountAll({
        where: {
          ID: 1,
        },
      });

      if (count > 0) {
        const { ID } = await Serialnummern.findOne({
          order: [["ID", "DESC"]],
        });
        validatedID = ID;
      }

      for (i = 0; i < arrCompareSerialNo.length; i++) {
        await Serialnummern.create({
          ID: ++validatedID,
          Artikel: "",
          Serialnummer: arrCompareSerialNo[i],
          RFIDCode: "",
          Artikelzustand: "",
          Lieferantnummer: "",
          Charge: "",
          Stueckliste: "",
          Stuecklistenvariante: "",
          Maschine: "",
          Bemerkung: "",
          Verschrottungsdatum: null,
        });
      }

      const insertedSerialNo = Serialnummern.findAll({
        limit: arrCompareSerialNo.length,
        order: [["ID", "DESC"]],
      });
      res.json(insertedSerialNo);
    } else {
      res.json("No new serial no. is inserted.");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
