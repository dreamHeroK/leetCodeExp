/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
  let len = foods.length;
  this.foods = [];
  for (let i = 0; i < len; i++) {
    this.foods.push({
      food: foods[i],
      cuisine: cuisines[i],
      rating: ratings[i],
    });
  }
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  let index = this.foods.findIndex((item) => item.food === food);
  this.foods[index].rating = newRating;
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
  let list = this.foods.filter((item) => item.cuisine.includes(cuisine));
  list.sort((a, b) => {
    if (b.rating - a.rating > 0) {
      return 1;
    } else if (b.rating - a.rating === 0) {
      return a.food.localeCompare(b.food);
    } else {
      return -1;
    }
  });
  return list[0].food;
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
