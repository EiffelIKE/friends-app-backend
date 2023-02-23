exports.success =  (req, res, message, status) => {
  let statusCode = status || 200;
  let statusMessage = message || '';

  res.status(statusCode).send({
    error: false,
    status: statusCode,
    data: statusMessage,
  })
};

exports.error = (req, res, message, status) => {
  let statusCode = status || 400;
  let statusMessage = message || '[error]: Bad request';
  
  res.status(statusCode).send({
    error: true,
    status: statusCode,
    data: statusMessage,
  })
};

exports.handler = (req, res, message) => {
  message ? this.success(req, res, message, 201) : this.error(req, res, message, 400)

};