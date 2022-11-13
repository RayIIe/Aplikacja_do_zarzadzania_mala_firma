const express = require("express")
const router = express.Router()
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const JWT_SECRET =
    "GtR&tQoLDMBrANCPNTfF9KjNFG5moz@Dzkz?AJt5";

//Rejestrowanie nowych użytkowników, dodawanie rokordów do bazy danych
router.route("/register").post(async (req, res, next) => {
    console.log(req.body)
    const {name, email, password} = req.body;

    User.findOne({email: email}, async (err, user) => {
        if (user) {
            return res.send({message: "user already exist"})
        } else {
            const user = new User({name, email, password})
            await user.save(err => {
                console.log('err', err);
            })
                 await jwt.sign(
                    {userId: user.id, email},
                    JWT_SECRET,
                    {expiresIn: "1h"},
                    (err, token) => {
                        if(err) {
                            const error = new Error("Error! Something went wrong.");
                            return next(error);
                        }
                        return res
                            .status(200)
                            .json({
                                success: true,
                                data: {
                                    userId: user.id,
                                    email,
                                    token: token
                                },
                            });
                    }
                );

        }
    })
})

//logowanie i autentykacja
router.route("/login").post(async (req, res, next) => {
    const {email, password} = req.body;
    console.log(`${email} is trying to login ..`);

    let existingUser;
    try {
        existingUser = await User.findOne({email: email});
    } catch {
        const error = new Error("Error! Something went wrong.");
        return next(error);
    }
    if (!existingUser || existingUser.password != password) {
        const error = Error("Wrong details please check at once");
        return next(error);
    }
    let token;
    try {
        //Creating jwt token
        token = jwt.sign(
            {userId: existingUser.id, email: existingUser.email},
            JWT_SECRET,
            {expiresIn: "1h"}
        );
    } catch (err) {
        console.log(err);
        const error = new Error("Error! Something went wrong.");
        return next(error);
    }
    return res
        .status(200)
        .json({
            success: true,
            data: {
                userId: existingUser.id,
                email: existingUser.email,
                token: token,
            },
        });
})

router.route("/users").get((req, res) => {
    User.find()
        .then(foundUsers => res.json(foundUsers))
    //.catch((err))=>
})

router.route("/delete/:id").delete((req, res) => {
    User.findByIdAndDelete({_id: req.params.id})
        .then(doc => console.log(doc))
        .catch(err => console.log(err))
})

router.route("/update/:id").put((req, res) => {
    User.findByIdAndUpdate({_id: req.params.id}, {
        role: req.body.role
    }).then(doc => console.log(doc))
        .catch(err => console.log(err))
})
module.exports = router;