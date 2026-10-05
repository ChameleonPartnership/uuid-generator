module.exports = (req, res) => {
  res.statusCode = 410;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end('<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><title>410 Gone</title></head><body><h1>410 Gone</h1><p>This site has been retired.</p></body></html>');
};
