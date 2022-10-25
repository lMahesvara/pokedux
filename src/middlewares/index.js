export const logger = store => next => action => {
  console.log('dispatching', action)
  next(action)
}

/* export const enumerating = store => next => action => {
  const enumerated = action.action?.payload?.map(
    (pokemon, index) => ({
      ...pokemon,
      id: '#' + (index + 1).toString().padStart(3, '0')
    })
  )
  const updatedAction = {
    ...action,
    action: { ...action.action, payload: enumerated }
  }
  console.log('enumerated', enumerated)
  next(updatedAction)
} */
