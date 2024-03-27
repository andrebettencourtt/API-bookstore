const Books = require('../models/book')

exports.get = (req, res, next ) => {
    Books.find()
        .then(result => {
            res.status(201).json({
                book: result
            })
        })
        .catch(error => {
            console.log(error);
        })
};

exports.post = (req, res, next ) => {
    
    const title = req.body.title;
    const ano = req.body.ano;
    const isbns = req.body.isbns;

    const newBook = new Books ({
        title: title,
        ano: ano,
        isbns: isbns,
    })

    newBook 
        .save()
        .then((result) => {
            console.log(result)

            res.status(201).json({
                message: "Livro salvo com sucesso",
                error: false,
            })
        })
        .catch((err) => console.log(err));
    }
