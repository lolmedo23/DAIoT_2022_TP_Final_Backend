const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {BigQuery} = require("@google-cloud/bigquery");
const cors = require("cors")({origin: true});

admin.initializeApp(functions.config().firebase);
const bigquery = new BigQuery({projectId: "daiot-lo"});

// Lista de todos los valores de un dispositivo
exports.getMedicionesDeviceID =
functions.https.onRequest((request, response) => {
  const table = "tp-lo-daiot.sensor_data_db.sensores_tph_5min_interval";
  console.log("Request.query.idDevice: ", request.query.idDevice );
  const query = `SELECT * 
  FROM \`${table}\` data WHERE data.dev_id = ${request.query.idDevice}`;

  return bigquery
      .query({
        query: query,
        useLegacySql: false}).then( (result) => {
        const rows = result[0];
        cors(request, response, () => {
          response.json(rows);
        } );
      });
});

// Ultimo valor de un dispositivo
// SELECT * FROM `sensor_data_db.sensores_tph_ultimos_valores_RES`
// data WHERE data.dev_id = 110
exports.getLastMedicionDeviceID =
functions.https.onRequest((request, response) => {
  const table = "tp-lo-daiot.sensor_data_db.sensores_tph_ultimos_valores_RES";
  const query = `SELECT *
  FROM \`${table}\` data WHERE data.dev_id = ${request.body.idDevice}`;
  return bigquery
      .query({
        query: query,
        useLegacySql: false}).then( (result) => {
        const rows = result[0];
        cors(request, response, () => {
          response.json(rows);
        } );
      });
});

// Lista todos los dispositivos
// SELECT * FROM `sensor_data_db.sensores_tph_desc_ubicacion`
exports.getListaDispositivos =
functions.https.onRequest((request, response) => {
  const table = "tp-lo-daiot.sensor_data_db.sensores_tph_desc_ubicacion";
  const query = `SELECT * FROM \`${table}\``;
  return bigquery
      .query({
        query: query,
        useLegacySql: false}).then( (result) => {
        const rows = result[0];
        cors(request, response, () => {
          response.json(rows);
        } );
      });
});
