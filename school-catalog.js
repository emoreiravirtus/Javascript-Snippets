class School {
  contructor(name, level, numberOfStudents){
    this._name = name
    this._level = level
    this._numberOfStudents = numberOfStudents
  }

  get name(){
    return this._name
  }

  get level(){
    return this._level
  }

  get numberOfStudents(){
    return this._numberOfStudents
  }
  
  set numberOfStudents(number){
    this._numberOfStudents = number
  }

  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let randomNumber = Math.floor(Math.random() * (substituteTeacher.length - 1))
  }
}

class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy){  
    super(name, 'primary', numberOfStudents)
    this._pickupPolicy = pickupPolicy
  }

  get pickupPolicy(){
    return this.pickupPolicy
  }
}

class MiddleSchool extends School{
  constructor(name, numberOfStudents){
    super(name, 'middle', numberOfStudents)
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams ){
    super(name, 'high', numberOfStudents)
    this._sportsTeams = sportsTeams 
  }

  get sportsTeams(){
    for(let team in this._sportTeams){
      console.log(this._sportsTeams[team])
    }
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts()
