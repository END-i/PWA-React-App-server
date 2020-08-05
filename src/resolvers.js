const { db, initialState } = require("./db");

const resolvers = {
  Query: {
    nutritionList: (parent, { sortBy = "dessert" }, context, info) => {
      const subField = sortBy === "dessert" ? "" : "nutritionInfo";
      const nutritionList = db.nutritionList.sort((_a, _b) => {
        const a = subField ? Number(_a[subField][sortBy]) : _a[sortBy].toLowerCase();
        const b = subField ? Number(_b[subField][sortBy]) : _b[sortBy].toLowerCase();
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });

      return nutritionList;
    },
  },
  Mutation: {
    createNutrition: (parent, { dessert, nutritionInfo }, context, info) => {
      const id = new Date().getTime();
      const newNutrition = { id, dessert, nutritionInfo };

      db.nutritionList.push(newNutrition);

      return newNutrition;
    },
    deleteNutrition: (parent, { ids }, context, info) => {
      ids.forEach((id) => {
        const nutritionIndex = db.nutritionList.findIndex(
          (nutrition) => String(nutrition.id) === id,
        );
        if (!!~nutritionIndex) {
          db.nutritionList.splice(nutritionIndex, 1);
        }
      });

      return {
        ok: true,
        message: "Desserts have been removed",
      };
    },
    resetData: () => {
      db.nutritionList = [...initialState];

      return {
        ok: true,
        message: "Data was reset",
      };
    },
  },
};

module.exports = resolvers;
