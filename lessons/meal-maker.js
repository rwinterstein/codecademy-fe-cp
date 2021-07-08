let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(newAppetizer) {
    this._courses.appetizers = newAppetizer;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(newMain) {
    this._courses.appetizers = newMain;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(newDessert) {
    this._courses.appetizers = newDessert;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },

  getRandomDishFromMenu(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = menu.getRandomDishFromMenu("appetizers");
    const main = menu.getRandomDishFromMenu("mains");
    const dessert = menu.getRandomDishFromMenu("desserts");

    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal includes ${appetizer.name}, ${main.name}, and ${dessert.name} for a total of \$${totalPrice}.`;
  },
};

menu.addDishToCourse("appetizers", "Dumplings", 5);
menu.addDishToCourse("appetizers", "Spring Rolls", 4);
menu.addDishToCourse("mains", "Steak and Potatoes", 12);
menu.addDishToCourse("mains", "Chicken Fried Rice", 9);
menu.addDishToCourse("desserts", "Cheesecake", 7);
menu.addDishToCourse("desserts", "Chocolate Cake", 4);

let meal = menu.generateRandomMeal();

console.log(meal);
