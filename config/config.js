require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "root1234",
    database: "jwt_uploads_sequelize",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}

// development: {
//   username: "bu9lgvf1t4y3nxlg",
//   password: process.env.db_PW,
//   database: "zefmahvdp9uys0h2",
//   host: "mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   dialect: "mysql"
// }
