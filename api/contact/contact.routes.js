const express = require('express')
const {getContact, getContacts, deleteContact, updateContact, addContact} = require('./contact.controller')
const router = express.Router()

router.get('/', getContacts)
router.get('/:id', getContact)
router.put('/:id',  updateContact)
router.post('/',  addContact)
router.delete('/:id', deleteContact)

module.exports = router