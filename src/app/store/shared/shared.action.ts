import { createAction, props } from "@ngrx/store";

export const SET_SHARED_SPINNER = '[shared spinner]set loading';
export const SET_ERROR_MESSAGE = '[shared spinner]set error message';


export const setloadingSpinner = createAction(SET_SHARED_SPINNER , props<{status : boolean}>());
export const setErrorMesage = createAction(SET_ERROR_MESSAGE , props<{message : string}>());
