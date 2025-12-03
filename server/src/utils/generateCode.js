const generateCode = () => {
  return {
    code: Math.floor(100000 + Math.random() * 900000).toString(),
    expires: Date.now() + 10 * 60 * 1000

  }

}

export default generateCode
