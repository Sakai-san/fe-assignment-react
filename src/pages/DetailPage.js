import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { initAccommodations } from '../actions/accommodations';
import { withLifeCycle } from './Home';

const DetailPage = ({ accommodations, match }) => {
    const currentAccommodation = accommodations.find (
        (accommodation) => accommodation.id === match.params.accommodationId  
    );

    if(!currentAccommodation){
        return null;
    }
    return (
        <div>
            {
                currentAccommodation.images && currentAccommodation.images[0] &&
                <div className="img">
                    <img src={currentAccommodation.images[0]} alt={currentAccommodation.title}/>
                </div>
            }
            <p>
                {currentAccommodation.title}
            </p>
        </div>
    );
}

const mapStateToProps = (state) => ({ accommodations: state.accommodations });

const matchDispatchToProps = (dispatch) => (
  bindActionCreators({ initAccommodations }, dispatch)
);

export default compose(
    connect(mapStateToProps, matchDispatchToProps),
    withLifeCycle
)(DetailPage);
