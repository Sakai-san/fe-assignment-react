import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    withState,
    compose,
    lifecycle,
} from 'recompose';
import { fetchAccommodations } from '../actions/accommodations';
import { renderOverviews } from './Home';
import './Home.css';

const Multiple = ({ accommodations, firebaseIds }) => {
    if(firebaseIds.length === 0){
        return null;
    } 
    const relatedAccomodations = accommodations.filter (
        (accommodation) => firebaseIds.indexOf(accommodation.id) !==-1
    );
    return (
        <ul className="listing-list">
            {
            renderOverviews(relatedAccomodations, true)
            }
        </ul>
    );
}


const withLifeCycle = lifecycle({
  componentDidMount() {
    const currentId = this.props.match.params.accommodationId;
   fetch(`https://properties-34748.firebaseio.com/similar/${currentId}.json`,{

   })
      .then((response) => response.json())
      .then((r) => {
        if (r && typeof r === 'string') {
          this.props.setFirebaseIds(r.trim().split(','));
        }
      });

    if(this.props.accommodations.length === 0) {
        this.props.fetchAccommodations();
    }
  },
});

const mapStateToProps = (state) => ({ accommodations: state.accommodations });

const matchDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchAccommodations }, dispatch)
);

export default compose(
    withState("firebaseIds", 'setFirebaseIds', []),
    connect(mapStateToProps, matchDispatchToProps),
    withLifeCycle
)(Multiple);
