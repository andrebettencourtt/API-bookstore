const express = require("express")

exports.get = (req, res, next ) => {
    res.status(200).json({
        livros: [{ title: "João e Maria", ano: "1990", ISBNs: "1234235325"}]
    })
};

exports.post = (req, res, next ) => {
    const title = req.body.title;
    const ano = req.body.ano;
    const isbns = req.body.ISBNs;

    res.status(201).json({
        message: "Salvo com sucesso!",
        post: { id: new Date().toISOString(), title: title, ano: ano, isbns: isbns}
    })
}
