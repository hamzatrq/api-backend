const stream = require("stream");
const AWS = require("aws-sdk");
let config = require("fs").existsSync("./config.json")
  ? require("./config.json")
  : null;

const accessKeyId = process.env.accessKeyId || config.accessKeyId;
const secretAccessKey = process.env.secretAccessKey || config.secretAccessKey;

const awsConfig = new AWS.Config({
  credentials: new AWS.Credentials({
    accessKeyId,
    secretAccessKey,
  }),
  region: "us-west-1",
});
const s3 = new AWS.S3(awsConfig);

const ddb = new AWS.DynamoDB({
  ...awsConfig,
  apiVersion: "2012-08-10",
});

const ddbd = new AWS.DynamoDB.DocumentClient({
  ...awsConfig,
  apiVersion: "2012-08-10",
});

const defaultDynamoTable = "sidechain-cache";

async function getDynamoItem(id, TableName) {
  const params = {
    TableName,
    Key: {
      id,
    },
  };

  try {
    return await ddbd.get(params).promise();
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function putDynamoItem(id, data, TableName) {
  const params = {
    TableName,
    Item: {
      ...data,
      id,
    },
  };

  try {
    return ddbd.put(params).promise();
  } catch (e) {
    console.error(e);
    return false;
  }
}

async function getDynamoAllItems(TableName = defaultDynamoTable) {
  const params = {
    TableName,
  };

  try {
    const o = await ddbd.scan(params).promise();
    const items = (o && o.Items) || [];
    return items;
  } catch (e) {
    console.error(e);
    return null;
  }
}

function uploadFromStream(bucket, key, type) {
  const pass = new stream.PassThrough();
  const params = { Bucket: bucket, Key: key, Body: pass, ACL: "public-read" };
  if (type) {
    params["ContentType"] = type;
  }
  s3.upload(params, function (err, data) {
    console.log("emit done", !!err, !!data);
    if (err) {
      pass.emit("error", err);
    } else {
      pass.emit("done", data);
    }
  });
  return pass;
}

module.exports = {
  ddb,
  ddbd,
  getDynamoItem,
  putDynamoItem,
  getDynamoAllItems,
  uploadFromStream,
};
