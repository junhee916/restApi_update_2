const express = require('express')

const {
    commends_delete_commend,
    commends_post_commend,
    commends_get_commend,
    commends_update_commend
} = require('../controller/commend')
const router = express.Router()

// detail get commend
router.get('/:commendId', commends_get_commend)

// register commend
router.post('/', commends_post_commend)

// update commend
router.patch('/:commedId', commends_update_commend)

// detail delete commend
router.delete('/:commendId', commends_delete_commend)

module.exports = router