const Sequelize = require("sequelize");
const sequelize = require("../../config/database2");

//define date format to match DB date format
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  date = this._applyTimezone(date, options);
  return date.format("YYYY-MM-DD HH:mm:ss.SSS");
};

const Serialnummern = sequelize.define(
  "Serialnummern",
  {
    ID: { type: Sequelize.INTEGER, primaryKey: true },
    Artikel: { type: Sequelize.STRING },
    Serialnummer: { type: Sequelize.STRING },
    RFIDCode: { type: Sequelize.STRING },
    Anschaffungsdatum: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    Ausgangswert: { type: Sequelize.DECIMAL },
    Ausgangswert2: { type: Sequelize.DECIMAL },
    Restwert: { type: Sequelize.DECIMAL },
    Restwert2: { type: Sequelize.DECIMAL },
    AnzahlZyklen: { type: Sequelize.INTEGER },
    Restzyklen: { type: Sequelize.INTEGER },
    Artikelzustand: { type: Sequelize.STRING },
    Lieferantnummer: { type: Sequelize.STRING },
    Charge: { type: Sequelize.STRING },
    LagerplatzID: { type: Sequelize.INTEGER },
    Bestand: { type: Sequelize.DECIMAL },
    Stueckliste: { type: Sequelize.STRING },
    Stuecklistenvariante: { type: Sequelize.STRING },
    Maschine: { type: Sequelize.STRING },
    Verschrottet: { type: Sequelize.BOOLEAN },
    Verschrottungsdatum: { type: Sequelize.DATE },
    Bemerkung: { type: Sequelize.STRING },
    BuchungsID: { type: Sequelize.INTEGER },
    Krit1: { type: Sequelize.STRING, defaultValue: "" },
    Krit2: { type: Sequelize.STRING, defaultValue: "" },
    Krit3: { type: Sequelize.STRING, defaultValue: "" },
    Krit4: { type: Sequelize.STRING, defaultValue: "" },
    Krit5: { type: Sequelize.STRING, defaultValue: "" },
    Krit6: { type: Sequelize.STRING, defaultValue: "" },
    Krit7: { type: Sequelize.STRING, defaultValue: "" },
    Krit8: { type: Sequelize.STRING, defaultValue: "" },
    Krit9: { type: Sequelize.STRING, defaultValue: "" },
    Krit10: { type: Sequelize.STRING, defaultValue: "" },
    Krit11: { type: Sequelize.STRING, defaultValue: "" },
    Krit12: { type: Sequelize.STRING, defaultValue: "" },
    Krit13: { type: Sequelize.STRING, defaultValue: "" },
    Krit14: { type: Sequelize.STRING, defaultValue: "" },
    Krit15: { type: Sequelize.STRING, defaultValue: "" },
    Krit16: { type: Sequelize.STRING, defaultValue: "" },
    Krit17: { type: Sequelize.STRING, defaultValue: "" },
    Krit18: { type: Sequelize.STRING, defaultValue: "" },
    Krit19: { type: Sequelize.STRING, defaultValue: "" },
    Krit20: { type: Sequelize.STRING, defaultValue: "" },
    Einsatzzeit: { type: Sequelize.DECIMAL },
    Testwerkzeug: { type: Sequelize.BOOLEAN },
  },
  {
    tableName: "tblSerialnummern",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Serialnummern;
/* ID	int
Artikel	nvarchar(50)
Serialnummer	nvarchar(50)
RFIDCode	nvarchar(50)
Anschaffungsdatum	datetime
Ausgangswert	decimal(18, 3)
Ausgangswert2	decimal(18, 3)
Restwert	decimal(18, 3)
Restwert2	decimal(18, 3)
AnzahlZyklen	int
Restzyklen	int
Artikelzustand	nvarchar(50)
Lieferantnummer	nvarchar(50)
Charge	nvarchar(50)
LagerplatzID	int
Bestand	decimal(18, 3)
Stueckliste	nvarchar(100)
Stuecklistenvariante	nvarchar(100)
Maschine	nvarchar(100)
Verschrottet	bit
Verschrottungsdatum	datetime
Bemerkung	nvarchar(200)
BuchungsID	int
Krit1	nvarchar(100)
Krit2	nvarchar(100)
Krit3	nvarchar(100)
Krit4	nvarchar(100)
Krit5	nvarchar(100)
Krit6	nvarchar(100)
Krit7	nvarchar(100)
Krit8	nvarchar(100)
Krit9	nvarchar(100)
Krit10	nvarchar(100)
Krit11	nvarchar(100)
Krit12	nvarchar(100)
Krit13	nvarchar(100)
Krit14	nvarchar(100)
Krit15	nvarchar(100)
Krit16	nvarchar(100)
Krit17	nvarchar(100)
Krit18	nvarchar(100)
Krit19	nvarchar(100)
Krit20	nvarchar(100)
Einsatzzeit	decimal(18, 2)
Testwerkzeug	bit
	

*/
