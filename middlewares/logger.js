const logger = (req, res, next) => {
  console.log('request Information');
  console.log('Header:', req.headers);
  console.log('URL:', req.url);
  console.log('Method,', req.method);

  next();
};

module.exports = logger;
