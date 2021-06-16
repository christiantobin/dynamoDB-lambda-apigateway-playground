'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-west-1"});

exports.handler = async (event) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1"});

  return String(event.queryStringParameters.name);
  const params = event;
  
  try {
    const data = await documentClient.put(params).promise();
    console.log(data);
    return `Successfully added ${event.Item.Species_Name} to table`
  } catch (err) {
    console.log(err);
  }
}