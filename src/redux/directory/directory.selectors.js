import { createSelector } from "reselect"; 

const selectSections = state => state.directory;

export const selectDirectory = createSelector(
    [selectSections],
    (directory) => directory.sections
);
