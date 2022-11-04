import { SET_CLICKED_DAY, SET_MODAL_STATUS } from "store/actions/actionTypes";

export const setClickedDay = (data: string) => {
    return {
        type: SET_CLICKED_DAY,
        payload: data
    }
};

export const setModalStatus = (data: boolean) => {
    return {
        type: SET_MODAL_STATUS,
        payload: data
    }
};