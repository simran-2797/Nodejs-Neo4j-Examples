const neo4j = require("neo4j-driver").v1;
const neo4jUrl = "bolt://localhost:7687";
const neo4jUser = "neo4j";
const neo4jPassword = 'admin';
const neo4jConfig = {};

const neo4jDriver = () =>{
    const driver = neo4j.driver(neo4jUrl,
        neo4j.auth.basic(neo4jUser, neo4jPassword),
        neo4jConfig);
    console.log("Neo4j connection established");
    return driver;
}

module.exports = neo4jDriver;

