const { addition, subtraction } = require("mathOperator");

exports.lambdaHandler = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const operation = event.pathParameters.operation;
  let result;

  if (operation) {
    if (operation === "addition") {
      result = addition(body.a, body.b);
    } else if (operation === "substraction") {
      result = subtraction(body.a, body.b);
    }
    sendResponse(200, { result: result }, callback);
  } else {
    sendResponse(500, { message: "internal error" }, callback);
  }
};

function sendResponse(statusCode, message, callback) {
  const response = {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
  callback(null, response);
}
