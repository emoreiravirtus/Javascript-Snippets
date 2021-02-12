const getSleepHours = day => {
  if(day === 'monday') return 8
  else if(day === 'thursday') return 8
  else if(day === 'wednesday') return 8
  else if(day === 'tuesday') return 8
  else if(day === 'friday') return 8
  else if(day === 'saturday') return 8
  else if(day === 'sunday') return 8
  else return 0
}

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('thursday') + getSleepHours('wednesday') + getSleepHours('tuesday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
}

const getIdealSleepHours = () => {
  let idealHours = 7
  return idealHours * 7
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours()
  const difference = actualSleepHours - idealSleepHours
  console.log(actualSleepHours, idealSleepHours)
  actualSleepHours == idealSleepHours ? console.log('Perfect amount of sleep') : actualSleepHours > idealSleepHours ? console.log(`Got more sleep than needed: ${difference} hours more!`) : console.log(`Get Some rest: ${difference} hours less than ideal.`)
}

calculateSleepDebt()
