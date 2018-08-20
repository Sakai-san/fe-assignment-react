import listings from '../listings.json';

export const FETCH_ACCOMMODATIONS = 'FETCH_ACCOMMODATIONS';

export const fetchAccommodations = () => ({
    type: FETCH_ACCOMMODATIONS,
    payload: listings
})


/*
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