import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import './stars.scss';

export class Stars extends React.Component {
    constructor() {
        super();

        this.computedScore = this.computedScore.bind(this);
    }
    
    computedScore() {
        const { score } = this.props;
        let reducedScore = score / 2;

        const stars = new Array(5);

        stars.fill(farStar);

        if (reducedScore >= 5) {
            stars.fill(faStar);
            return stars;
        }

        if (reducedScore < 1) {
            return stars;
        }

        if (score % 2 === 0) {
            stars.fill(faStar, 0, reducedScore);
        } else {
            stars.fill(faStar, 0, reducedScore);
            stars.fill(faStarHalfAlt,reducedScore, reducedScore + 1);
        }

        return stars;
    }

    render() {
        const { color, showScore } = this.props;

        if (color) {
            document.documentElement.style.setProperty('--rvk-star-color', color)
        }

        return (
            <span className={'rvk--reviews--score__stars'}>
                {this.computedScore().map((icon, key) => <FontAwesomeIcon icon={icon} key={key} />)}
                {showScore && <h2 className={'rvk--reviews--score__number'}>{this.props.score}</h2>}
            </span>
        )
    }
}

Stars.propTypes = {
    score: PropTypes.number.isRequired,

    color: PropTypes.string,
    showScore: PropTypes.bool,
}

export default Stars;