import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  compose,
  lifecycle
} from 'recompose';
import { Link } from 'react-router-dom';
import { initAccommodations } from '../actions/accommodations';
import accommodations from '../listings.json';
import './Home.css';

export const renderOverviews = (accommodations, withDescription=false) => {
    return accommodations.map((accommodation, index) => 
        <li className="listing" key={index}>
            <Link
                to={`/detail/${accommodation.id}`}
            >
                {
                    accommodation && accommodation.images && accommodation.images[0] &&
                    <div className="img">
                        <img src={accommodation.images[0]} alt={accommodation.title}/>
                    </div>
                }
                <p>
                    {accommodation.title}
                </p>
            </Link>
            {
                withDescription &&
                <p>
                    {accommodation.description}
                </p>
            }
        </li>
    );
}

const Home = ({ accommodations }) => 
    <ul className="listing-list">
        {
            renderOverviews(accommodations)
        }
    </ul>


export const withLifeCycle = lifecycle({
  componentDidMount() {
    if(this.props.accommodations.length === 0) {
        this.props.initAccommodations(accommodations);
    }
  },
});

const mapStateToProps = (state) => ({ accommodations: state.accommodations });

const matchDispatchToProps = (dispatch) => (
  bindActionCreators({ initAccommodations }, dispatch)
);

export default compose(
    connect(mapStateToProps, matchDispatchToProps),
    withLifeCycle
)(Home);
