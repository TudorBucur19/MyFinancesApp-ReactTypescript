import { AnyAction } from 'redux';

import { IGeneralReducer } from 'interfaces/IGeneralReducer';
import { SET_CLICKED_DAY, SET_MODAL_STATUS } from 'store/actions/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (
    state: IGeneralReducer = {
        clickedDay: '',
        modalStatus: false,
    },
    action: AnyAction = { type: '', payload: null },
) => {
    switch (action.type) {
        case SET_CLICKED_DAY: {
            return {
                ...state,
                clickedDay: action.payload,
            }
        }

        case SET_MODAL_STATUS: {
            return {
                ...state,
                modalStatus: action.payload,
            }
        };

        default:
            return state;
    }       
};
