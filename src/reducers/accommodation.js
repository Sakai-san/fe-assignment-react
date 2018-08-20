import { INIT_ACCOMMODATIONS } from '../actions/accommodations';

export default (state = [], action) => {
    switch (action.type) {
        case INIT_ACCOMMODATIONS:
            return action.payload;
        default:
            return state;
    }
};
