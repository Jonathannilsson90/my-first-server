const express = require('express')
const router = express.Router()
const {getPets,
    setPet,
    updatePets,
    deletePets
} = require('../controllers/petControllers')


router.route('/').get(getPets).post(setPet)

router.route('/:id').put(updatePets).delete(deletePets)

module.exports = router