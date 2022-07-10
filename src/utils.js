import cyoaData from "./cyoa_data";

const drawbacks = cyoaData.sections.choice_making.drawbacks;
const perks = cyoaData.sections.choice_making.perks;
export const plusOrMinus = (points = 0) => (points >= 0 ? "+" : "-");

export const getChoicesThatRequireACertainChoice = (choiceTitle = "") => {
  const choices = [...drawbacks.choices, ...perks.choices];
  return choices.filter(({ requirements }) =>
    requirements ? requirements.includes(choiceTitle) : false
  );
};
