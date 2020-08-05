const initialState = [
  {
    id: 1596094317871,
    dessert: "Oreo",
    nutritionInfo: {
      calories: 437,
      fat: 18,
      carbs: 63,
      protein: 4,
    },
  },
  {
    id: 1596094324141,
    dessert: "Nougat",
    nutritionInfo: {
      calories: 308,
      fat: 19,
      carbs: 9,
      protein: 37,
    },
  },
  {
    id: 1596094331701,
    dessert: "Marshmallow",
    nutritionInfo: {
      calories: 318,
      fat: 3,
      carbs: 81,
      protein: 2,
    },
  },
  {
    id: 1596094338629,
    dessert: "Lollipop",
    nutritionInfo: {
      calories: 398,
      fat: 2,
      carbs: 98,
      protein: 0,
    },
  },
  {
    id: 1596094347189,
    dessert: "KitKat",
    nutritionInfo: {
      calories: 518,
      fat: 26,
      carbs: 65,
      protein: 60,
    },
  },
];

const db = {
  nutritionList: [...initialState],
};

module.exports = { db, initialState };
