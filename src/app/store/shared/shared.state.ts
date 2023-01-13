export interface sharedState{
    showloading : boolean;
    errorMessage : string;
}

export const initialstate : sharedState = {
   showloading : false,
   errorMessage : '',

}