const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')


async function login(email, password) {
    logger.debug(`auth.service - login with email: ${email}`)

    const user = await userService.getByEmail(email)
    if (!user) return Promise.reject('Invalid email or password')
    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid email or password')

    delete user.password
    return user
}

async function signup(email, password, name) {
    const saltRounds = 10

    logger.debug(`auth.service - signup with email: ${email}, name: ${name}`)
    if (!email || !password || !name) return Promise.reject('name, email and password are required!')

    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({ email, password: hash, name })
}

module.exports = {
    signup,
    login,
}