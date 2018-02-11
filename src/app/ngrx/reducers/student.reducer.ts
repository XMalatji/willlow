import * as studentActions from '../actions/student.actions'
export function studentReducer(state = [] , action : studentActions.Action){

    switch(action.type){
        case studentActions.LOAD_STUDENTS_SUCCESS : {
            return action.payload;
        }
        default : {
            return state;
        }
    }
}