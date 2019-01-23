const path = require("path");
const thrift = require("thrift");
const BookService = require("./gen-nodejs/BookAuthorInformation");
const apiController = require("./api");

/**
 * Thrift Connection
 */
const thriftOptions = {
  protocol: thrift.TCompactProtocol,
  transport: thrift.TFramedTransport
};
const app = thrift.createServer(BookService, apiController, thriftOptions);
app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(`CommandBook server running on : 3000`);
  }
})
module.exports = app;