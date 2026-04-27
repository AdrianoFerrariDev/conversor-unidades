export function createUnitSystem(unitSystem) {
  const units = Object.entries(unitSystem).reduce((acc, [systemKey, system]) => {
    Object.entries(system.units).forEach(([unitKey, unit]) => {
      acc[unitKey] = {
        ...unit,
        system: systemKey,
      }
    })
    return acc
  }, {})

  return {
    unitSystem,
    units,
  }
}