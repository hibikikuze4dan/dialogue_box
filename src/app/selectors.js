import { createSelector } from "@reduxjs/toolkit";

export const getOpenSectionsState = (state) => state.open_sections;

export const getPerks = (state) => state.perks ?? [];

export const getDrawbacks = (state) => state.drawbacks ?? [];

export const getHideUnselected = (state) => state.hideUnselected ?? false;

export const getDialogOpen = (state) => state.dialogOpen ?? false;

export const getSelectedChoices = createSelector(
  getDrawbacks,
  getPerks,
  (drawbacks, perks) => {
    return [...drawbacks, ...perks];
  }
);

export const getBuildText = createSelector(
  getDrawbacks,
  getPerks,
  (drawbacks, perks) => {
    let text = "Dialogue Box Build:\n\nPerks:\n\n";
    let points = 12;
    perks.forEach((curr) => {
      points = points + curr.cost;
      text = `${text}${curr.title}: ${curr.cost} [${points}]\n\n`;
      return points;
    });
    text = `${text}Drawbacks:\n\n`;
    drawbacks.forEach((curr) => {
      points = points + curr.cost;
      text = `${text}${curr.title}: +${curr.cost} [${points}]\n\n`;
      return points;
    });
    text = `${text}Points Left: ${points}`;
    return text;
  }
);

export const getSelectedChoicesTitles = createSelector(
  getSelectedChoices,
  (choices) => choices.map((choice) => choice.title ?? "")
);

export const getSelectedChoicesCost = createSelector(
  getSelectedChoices,
  (choices) => choices.map((choice) => choice.cost ?? 0)
);

export const getCurrentPoints = createSelector(
  getSelectedChoicesCost,
  (costs) => 12 + costs.reduce((prev, curr) => prev + curr, 0)
);

export const getChoiceSelectedFunction = createSelector(
  getSelectedChoicesTitles,
  (titles) => (choiceTitle) => titles.includes(choiceTitle)
);

export const getExcludedChoicePresentFunction = createSelector(
  getSelectedChoicesTitles,
  (titles) => (exclude) => exclude ? titles.includes(exclude) : false
);

export const getRequiredChoicePresentFunction = createSelector(
  getSelectedChoicesTitles,
  (titles) => (requirements) =>
    requirements
      ? requirements.every((requirement) => titles.includes(requirement))
      : true
);

export const getChoiceDisabledFunction = createSelector(
  getExcludedChoicePresentFunction,
  getRequiredChoicePresentFunction,
  (exFunc, reqFunc) => (exclude, require) =>
    exFunc(exclude) || !reqFunc(require)
);
