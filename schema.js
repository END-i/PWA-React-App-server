const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    nutritionList(sortBy: String): [Nutrition!]!
  }

  type Mutation {
    createNutrition(dessert: String!, nutritionInfo: NutritionInfoInput): Nutrition!
    deleteNutrition(ids: [String]): Ok
    resetData: Ok
  }

  type Ok {
    ok: Boolean
    message: String
  }

  input NutritionInfoInput {
    calories: String
    fat: String
    carbs: String
    protein: String
  }

  type NutritionInfo {
    calories: String
    fat: String
    carbs: String
    protein: String
  }

  type Nutrition {
    id: ID!
    dessert: String!
    nutritionInfo: NutritionInfo
  }
`;

module.exports = typeDefs;
