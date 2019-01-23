const uuid = require("uuid/v4");
var thrift = require("thrift");
const assert = require("assert");

var BookService = require("./gen-nodejs/BookAuthorInformation");
const { Author, AddBookRequest } = require("./gen-nodejs/books_types");

const thriftOptions = {
  protocol: thrift.TCompactProtocol,
  transport: thrift.TFramedTransport
};

const connection = thrift.createConnection("localhost", 3000, thriftOptions);

connection.on("error", err => {
  console.log(err);
});

const client = thrift.createClient(BookService, connection);
const addBookRequest = new AddBookRequest({
  title: "A",
  description: "B",
  publishedOn: `${Date.now()}`,
  type: "Fiction",
  authorId: "ee71f895-d850-4c9e-af35-72ebce414e64"
});

client.addBook(addBookRequest, (err, result) => {
  if (err) console.log(err);
  else console.log(result);
});
