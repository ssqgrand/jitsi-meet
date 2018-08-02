// @flow

import { ReducerRegistry } from '../base/redux';

import { SET_GOOGLE_API_STATE } from './actionTypes';
import { GOOGLE_API_STATES } from './constants';

/**
 * The default state is the Google API needs loading.
 *
 * @type {{googleAPIState: number}}
 */
const DEFAULT_STATE = {
    googleAPIState: GOOGLE_API_STATES.NEEDS_LOADING
};

/**
 * Reduces the Redux actions of the feature features/google-api.
 */
ReducerRegistry.register('features/google-api',
    (state = DEFAULT_STATE, action) => {
        switch (action.type) {
        case SET_GOOGLE_API_STATE:
            return {
                ...state,
                googleAPIState: action.googleAPIState
            };
        }

        return state;
    });
