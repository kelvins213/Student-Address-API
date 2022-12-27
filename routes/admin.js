const express = require('express');
const mongoose = require('mongoose');
const studentLocation =  mongoose.model("location");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Location API");
})

router.get("/retrieveAdresses", 
    (req, res) => {
        studentLocation.find().then(
            (datas) => {
                res.status(200).json(datas);
            }
        ).catch(
            (err) => {
                console.error(err)
            })
    }
);

router.get("/retrieveAdress/:number", 
    (req, res) => {
        studentLocation.findOne({number: req.params.number}).then(
            (datas) => {
                res.status(200).json(datas);
            }
        ).catch(
            (err) => {
                console.error(err)
            }
        );
    }
);

router.get("/insertAdress/:country/:state/:city/:cep/:neighborhood/:street/:number", 
    (req, res) => {
        new studentLocation({
            country: req.params.country,
            state: req.params.state,
            city: req.params.city,
            cep: req.params.cep,
            neighborhood: req.params.neighborhood,
            street: req.params.street,
            number: req.params.number,
        }).save().then(
            () => {
                console.log("Location saved on MongoDB");
            }
        ).catch(
            (err) => {
                console.error(err)
            }
        );
    }
);

router.get("/updateAdress/:number", 
    (req, res) => {
        studentLocation.findOneAndUpdate({number: req.params.number}, {/*parâmetros para atualizar*/}).then(
            () => {
                console.log("Location updated on MongoDB");
            }
        ).catch(
            (err) => {
                console.error(err)
            }
        );
    }
);


router.get("/deteleAdress/:number", 
    (req, res) => {
        studentLocation.findOneAndDelete({number: req.params.number}).then(
            () => {
                console.log("Location deleted from MongoDB");
            }
        ).catch(
            (err) => {
                console.error(err)
            }
        );
    }
);

module.exports = router;