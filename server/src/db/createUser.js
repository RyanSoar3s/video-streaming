import user from "./user.js"

const createUser = async (model) => await user.create(model)

export default createUser
