
const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('contact')
        let contacts = await collection.find(criteria).toArray()
        return contacts
    } catch (err) {
        logger.error('cannot find contacts', err)
        throw err
    }
}

async function getById(contactId) {
    try {
        const collection = await dbService.getCollection('contact')
        const contact = await collection.findOne({ '_id': ObjectId(contactId)})
        return contact
    } catch (err) {
        logger.error(`while finding contact ${contactId}`, err)
        throw err
    }
}

async function remove(contactId) {
    try {
        const collection = await dbService.getCollection('contact')
        await collection.deleteOne({ '_id': ObjectId(contactId) })
    } catch (err) {
        logger.error(`cannot remove contact ${contactId}`, err)
        throw err
    }
}

async function update(contact) {
    try {
        const contactToSave = {
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        }
        const collection = await dbService.getCollection('contact')
        await collection.updateOne({ '_id': ObjectId(contact._id) }, { $set: contactToSave })
        return contactToSave;
    } catch (err) {
        logger.error(`cannot update contact ${contact._id}`, err)
        throw err
    }
}

async function add(contact) {
    try {
        const contactToAdd = {
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        }
        const collection = await dbService.getCollection('contact')
        await collection.insertOne(contactToAdd)
        return contactToAdd
    } catch (err) {
        logger.error('cannot insert contact', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.term) {
        const txtCriteria = { $regex: filterBy.term, $options: 'i' }
        criteria.$or = [
            {
                name: txtCriteria
            },
            {
                phone: txtCriteria
            },
            {
                email: txtCriteria
            }
        ]
    }
    return criteria
}