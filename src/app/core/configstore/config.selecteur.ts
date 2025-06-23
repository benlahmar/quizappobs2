import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ConfigStore } from "./config.store";

export const selectorConfigSate= createFeatureSelector<ConfigStore>('Config');

export const selectquizid=createSelector(
    selectorConfigSate,
    (state:ConfigStore)=>state.quizid
);

export const selectConfigAllowback=createSelector(
    selectorConfigSate,
    (state:ConfigStore)=>state.config.allowBack
);
export const selectConfigAllowreview=createSelector(
    selectorConfigSate,
    (state:ConfigStore)=>state.config.allowReview
);

export const selectConfigDuration=createSelector(
    selectorConfigSate,
    (state:ConfigStore)=>state.config.duration
);
export const selectConfigShowclock=createSelector(
    selectorConfigSate,
    (state:ConfigStore)=>state.config.showClock
);

export const selectConfig=createSelector(
    selectorConfigSate,
    (state:ConfigStore)=>state.config
)

