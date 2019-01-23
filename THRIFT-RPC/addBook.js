const uuid = require("uuid/v4");
const neo4jDriver = require("./neo4jDriver");
const driver = neo4jDriver();
const session = driver.session();
const {
  AddBookResponse,
  ResponseStatus,
  BookRequest,
  Author,
  Exception
} = require("./gen-nodejs/books_types");
const addBook = async (request, result) => {
  try {
    const bookId = uuid();
    const queryString = `CREATE (b:Books{_id: "${bookId}",
        title: "${request.title}",
        description: "${request.description}",
        publishedOn: "${request.publishedOn}",
        authorId: "${request.authorId}",
        type: "${request.type}"}) \
        WITH b as b
        MATCH (a:Author) WHERE a._id = "${request.authorId}"
        CREATE (b)-[:WRITTEN_BY]->(a)
        RETURN a,b`;
    const response = await session.run(queryString);
    if (response.records.length) {
      const responseStatus = new ResponseStatus({
        success: true,
        message: "BOOK ADDED SUCCESSFULLY"
      });
      const author = new Author({
        authorId: response.records[0]._fields[0].properties._id,
        name: response.records[0]._fields[0].properties.name,
        dateOfBirth: response.records[0]._fields[0].properties.dateOfBirth
      });
      const bookRequest = new BookRequest({
        bookId: response.records[0]._fields[1].properties._id,
        title: response.records[0]._fields[1].properties.title,
        description: response.records[0]._fields[1].properties.description,
        publishedOn: response.records[0]._fields[1].properties.publishedOn,
        type: response.records[0]._fields[1].properties.type,
        author
      });
      const addBookResponse = new AddBookResponse({
        responseStatus,
        bookRequest
      });
      return result(null, addBookResponse);
    }
    throw new Exception("Unable to add Book");
  } catch (e) {
    console.log(e);
    result(new Exception(e.message), null);
  }
};
module.exports = addBook;
