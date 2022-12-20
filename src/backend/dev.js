// const sql = require("mssql");

// const sqlConfig = {
//   user: "",
//   password: "",
//   database: "sklad_uchet",
//   server: "localhost",
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000,
//   },
//   options: {
//     encrypt: true,
//     trustServerCertificate: false,
//   },
// };

// async () => {
//   try {
//     await sql.connect(sqlConfig);
//     const result = await sql.query`select * from cars where id = ${carsID}`;
//     console.log(result);
//   } catch (err) {
//     console.log("error " + err);
//   }
// };
