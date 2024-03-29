const User = require("../models/user")

exports.signUpUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const user = new User({
        name: name,
        email: email,
        password: password,
    })

    user.save()
        .then(result => {
            res.status(201).json({
                massage: "User criado com sucesso!",
                result: result
            })
        }).catch(error => {
            res.status(500).json({
                massage: "Erro ao cria user",
                result: error
            })
        })
}

exports.signInUser = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                const error = new Error("Falha de validação");
                error.statusCode = 422;
                throw error
            }

            if (password == user.password) {
                res.json({
                    message: "Login efeituado com sucesso"
                })
            } else {
                res.json({
                    message: "Senha incorreta"
                })
            }

            loadedUser = user
        }).then(passIsEqual => {
            if (!passIsEqual) {
                const error = new Error("Email ou senha inválida...");
                error.statusCode = 401;
                throw error;
            }
        })

}