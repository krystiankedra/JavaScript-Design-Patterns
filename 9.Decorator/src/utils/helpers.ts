const uniqueID = () => Math.floor(Math.random() * Date.now())

export const withUniqueId = (callback: Function) => {
  const id = uniqueID()
  return { ...callback(), id }
}
