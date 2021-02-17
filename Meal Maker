const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers(){
      return this._appetizers
    },
    set appetizers(a){
      this.appetizers = a
    },
    get mains(){
      return this._mains
    },
    set mains(m){
      this._mains = m
    },
    get desserts(){
      return this._desserts
    },
    set desserts(d){
      this._desserts = d
    },
  },
  get courses(){
    return this._courses.appetizers.concat(this._courses.mains).concat(this._courses.desserts)
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    }
    this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName]
    const randomNumber = Math.floor(Math.random() * dishes.length)
    return dishes[randomNumber]
  },
  generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse('appetizers')
    let main = this.getRandomDishFromCourse('mains')
    let dessert = this.getRandomDishFromCourse('desserts')
    return `Appetizer: ${appetizer.name}, Main: ${main.name}, Dessert: ${dessert.name}, Total Price: ${appetizer.price + main.price + dessert.price}`
  }
}

menu.addDishToCourse('appetizers', 'Queijo', 2.99)
menu.addDishToCourse('appetizers', 'Presunto', 3.99)
menu.addDishToCourse('appetizers', 'Rabanada', 2.39)
menu.addDishToCourse('mains', 'Pizza', 8.99)
menu.addDishToCourse('mains', 'Strogonoff', 12.99)
menu.addDishToCourse('mains', 'Beef', 14.99)
menu.addDishToCourse('desserts', 'Ice Cream', 6.19)
menu.addDishToCourse('desserts', 'Banana', 1.99)
menu.addDishToCourse('desserts', 'Lemon Pie', 15.99)

const meal = menu.generateRandomMeal()
console.log(meal)
