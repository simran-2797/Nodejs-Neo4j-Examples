var express = require('express');
var router = express.Router();
var neo4jDriver = require('../neo4jDriver');
var mongoose = require('mongoose');

const driver = neo4jDriver();
const session = driver.session();

const { ObjectId } = mongoose.Types;

/**
 * @param {String} authorName - Name of the author
 * @param {String} dateOfBirth - Date of Birth of the author
 */
router.post('/addAuthor', function(req, res, next) {
  const authorId = ObjectId().toString();
  session.run(`CREATE (a:Author{_id:"${authorId}",
    name:"${req.body.authorName}",
    dateOfBirth: "${req.body.dateOfBirth}"}) 
    RETURN a`)
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
 * @description Get all the authors
 */
router.get('/getAllAuthors',function(req,res){
  session.run(`MATCH (a:Author) RETURN a`)
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
 * @description update Author details
 * @param {String} authorId - Id of the author
 * @param {String} authorName - Name of the author
 * @param {String} dateOfBirth - BirthDate of the author
 */
router.post('/updateAuthor',function(req,res){
  let queryString = `MATCH (a:Author) WHERE a._id = "${req.body.authorId}" `;
  if(req.body.authorName){
    queryString += `SET a.name = "${req.body.authorName}" `; 
  }
  if(req.body.dateOfBirth){
    queryString += `SET a.dateOfBirth = "${req.body.dateOfBirth}" `;
  }
  queryString += `RETURN a`
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
 * @description - Delete Author
 * @param authorId - Id of the author to be deleted
 */
router.delete('/deleteAuthor',function(req,res){
  let queryString = `MATCH (a:Author) WHERE a._id = "${req.query.authorId}" DETACH DELETE a`; 
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
