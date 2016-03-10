
var pg = require("pg");

app.get('/packages', function(request, response) {
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		
		if (err) {
			console.error(err);
			response.render('errors/db_error', {error:err});
			return;
		}

		client.query('SELECT * FROM test_table', function(err, result) {
			done();

			if (err) { 
				console.error(err);
				response.render('errors/db_error', {error:err});
				return;
			}
			
			response.render('pages/db', {results: result.rows} ); 
		});
	});
});
