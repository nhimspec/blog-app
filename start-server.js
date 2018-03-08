import app from './server';

// Site path
// app.use('/', express.static(path.join(__dirname, '/client/front/build')))
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '/client/front/build', 'index.html'));
// });

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
