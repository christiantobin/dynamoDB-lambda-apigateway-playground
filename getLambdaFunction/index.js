'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-west-1"});

exports.handler = async (event) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1"});
 
  const params = event;
  
  try {
    const data = await documentClient.get(params).promise();
    console.log(data);
    return data
  } catch (err) {
    console.log("Error: ", err);
  }
}