import produce, { Draft } from 'immer';
import { UserState } from './stateTypes';

const initialUserState: UserState = {
};

export const userReducer = produce((draft: Draft<UserState>, action: any) => {
    switch (action.type) {
        // case UserAT.SET_USER_DATA:
        //     draft.userData = action.payload;
        //     draft.status = LoadingStatus.SUCCESS;
        //     break;
        //
        default:
            break;
    }
}, initialUserState);
