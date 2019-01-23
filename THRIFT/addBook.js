const driver = neo4jDriver();
const session = driver.session();
const { AddBookResponse, ResponseStatus, BookRequest, Author } = require('./gen-nodejs/books_types')
const addBook = async (request,result)=>{
    try{
        const bookId = ObjectId().toString();
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
        const responseStatus = new ResponseStatus({
            success: true,
            message: "BOOK ADDED SUCCESSFULLY",
        });
        const author = new Author({
            authorId: response.records[0]._fields[0].properties._id,
            name: response.records[0]._fields[0].properties.name,
            dateOfBirth: response.records[0]._fields[0].properties.dateOfBirth, 
        });
        const bookRequest = new BookRequest({
            bookId: response.records[0]._fields[1].properties._id,
            title: response.records[0]._fields[1].properties.title,
            description: response.records[0]._fields[1].properties.description,
            publishedOn: response.records[0]._fields[1].properties.publishedOn,
            type: response.records[0]._fields[1].properties.type,
            author,
        });
        const addBookResponse = new AddBookResponse({
            responseStatus,
            bookRequest,
        })
        result.status(200).send({
            addBookResponse
        });
    }catch(e){
        console.log(error);
        result.status(500).send({
          success:false,
          message: error.message
        })
    }
}
module.exports = addBook;