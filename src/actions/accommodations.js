
export const INIT_ACCOMMODATIONS = 'INIT_ACCOMMODATIONS';

export const initAccommodations = (accommodations) => ({
  type: INIT_ACCOMMODATIONS,
  payload: accommodations,
});

/*
import listings from './listings.json';

export function fetchListings() {
    return dispatch => {
        Promise.resolve(listings)
            .then((listings) => {
                dispatch({
                    type: 'FETCH_LISTINGS',
                    listings
                })
            })
    };
}
*/