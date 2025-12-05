const generateUsername = () => {
  const randomNumbers = Math.floor(Math.random() * 100000)
                    .toString()
                    .padStart(5, "0")

  return `usuario-${randomNumbers}`

}

export default generateUsername
