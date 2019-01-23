var express = require('express');
var router = express.Router();
var neo4jDriver = require('../neo4jDriver');
var mongoose = require('mongoose');

const driver = neo4jDriver();
const session = driver.session();

const { ObjectId } = mongoose.Types;

/**
 * @description - Creates a book node
 * @param {String} req.title - Title of the book to be added
 * @param {String} req.description - Description of the book to be added
 * @param {String} req.publishedOn - Date of publication for the Book
 * @param {String} req.type - Type of the book
 * @param {String} authorId - Id of the author who has written the book
 */
router.post('/addBook', function(req, res, next) {
  const bookId = ObjectId().toString();
  const queryString = `CREATE (b:Books{_id: "${bookId}",
  title: "${req.body.title}",
  description: "${req.body.description}",
  publishedOn: "${req.body.publishedOn}",
  authorId: "${req.body.authorId}",
  type: "${req.body.type}"}) \
  WITH b as b
  MATCH (a:Author) WHERE a._id = "${req.body.authorId}"
  CREATE (b)-[:WRITTEN_BY]->(a)
  RETURN a,b`;
  console.log(queryString);

  session
      .run(queryString)
      .then(result =>{
        res.status(200).send({
          success:true,
          data: result.records
          });
          return;
        })
      .catch(error => {
        console.log(error);
        res.status(500).send({
          success:false,
          message: error.message
        })
      });
});

/**
 * @description - Gets all the books
 */
router.get('/getBooks',function(req,res,next){
  session.run(`MATCH (b:Books) RETURN b`)
  .then(result =>{
    res.status(200).send({
      success:true,
      data: result.records
      });
      return;
  })
  .catch(error => {
    console.log(error);
    res.status(500).send({
      success:false,
      message: error.message
    })
  });
});


/**
 * @description - Update book details
 * @param {String} bookId - Id of the book
 * @param {String} title - New title
 * @param {String} description -new description 
 * @param {String} publishedOn - new date of publication
 * @param {String} author - New author Name
 */
router.post('/updateBook',function(req,res,next){
  let queryString = `MATCH (b:Books) WHERE b._id = "${req.body.bookId}" `;
  if(req.body.title){
    queryString += `SET b.title = "${req.body.title}" `; 
  }
  if(req.body.description){
    queryString += `SET b.description = "${req.body.description}" `;
  }
  if(req.body.publishedOn){
    queryString += `SET b.publishedOn = "${req.body.publishedOn}" `;
  }
  if(req.body.type){
    queryString += `SET b.type = "${req.body.type}" `;
  }
  queryString += `RETURN b`
  session.run(queryString)
  .then(result =>{
    res.status(200).send({
      success:true,
      data: result.records
      });
      return;
  })
  .catch(error => {
    console.log(error);
    res.status(500).send({
      success:false,
      message: error.message
    })
  });
});

/**
 * @description - Delete Books
 * @param bookId - Id of the book to be deleted
 */
router.delete('/deleteBook',function(req,res){
  let queryString = `MATCH (b:Books) WHERE b._id = "${req.query.bookId}" DETACH DELETE b`; 
  session.run(queryString)
  .then(result =>{
    res.status(200).send({
      success:true,
      data: result.records
      });
      return;
  })
  .catch(error => {
    console.log(error);
    res.status(500).send({
      success:false,
      message: error.message
    })
  });
});

/**
 * @description - find Book
 * @param {String} req.title - Title of the book which you want to find (Optional)
 * @param {String} req.publishedOn - Date of publication of a book
 * @param {String} req.type - Type of the book 
 */
router.post('/filterBooks',function(req,res,next){
  let queryString = `MATCH (b:Books{`;
  if(req.body.title){
    queryString += `b.title: "${req.body.title}, " `;
  }
  if(req.body.publishedOn){
    queryString += `b.publishedOn: "${req.body.publishedOn}", `;
  }
  if(req.body.type){
    queryString += `b.type: "${req.body.type}," `;
  }
  queryString+= `}) RETURN n`;
  session.run(queryString)
  .then(result =>{
    res.status(200).send({
      success:true,
      data: result.records
      });
      return;
  })
  .catch(error => {
    console.log(error);
    res.status(500).send({
      success:false,
      message: error.message
    })
  });
});

/**
 * @description - Update book details
 * @param {String} bookId - Id of the book
 * @param {String} title - New title
 * @param {String} description -new description 
 * @param {String} publishedOn - new date of publication
 * @param {String} author - New author Name
 */
router.post('/updateBook',function(req,res,next){
  let queryString = `MATCH (b:Books) WHERE b._id = "${req.body.bookId}" `;
  if(req.body.title){
    queryString += `SET b.title = "${req.body.title}" `; 
  }
  if(req.body.description){
    queryString += `SET b.description = "${req.body.description}" `;
  }
  if(req.body.publishedOn){
    queryString += `SET b.publishedOn = "${req.body.publishedOn}" `;
  }
  if(req.body.type){
    queryString += `SET b.type = "${req.body.type}" `;
  }
  queryString += `RETURN b`
  session.run(queryString)
  .then(result =>{
    res.status(200).send({
      success:true,
      data: result.records
      });
      return;
  })
  .catch(error => {
    console.log(error);
    res.status(500).send({
      success:false,
      message: error.message
    })
  });
});

/**
 * @description - Delete Books
 * @param bookId - Id of the book to be deleted
 */
router.delete('/deleteBook',function(req,res){
  let queryString = `MATCH (b:Books) WHERE b._id = "${req.query.bookId}" DETACH DELETE b`; 
  console.log(queryString);
  session.run(queryString)
  .then(result =>{
    res.status(200).send({
      success:true,
      data: result.records
      });
      return;
  })
  .catch(error => {
    console.log(error);
    res.status(500).send({
      success:false,
      message: error.message
    })
  });
});
module.exports = router;
