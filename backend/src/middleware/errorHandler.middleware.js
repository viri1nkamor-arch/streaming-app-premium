const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[${status}] ${message}`);

  res.status(status).json({
    error: {
      status,
      message,
      timestamp: new Date(),
    },
  });
};

module.exports = errorHandler;
