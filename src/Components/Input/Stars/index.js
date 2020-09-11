import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import './stars.scss';

export class Stars extends React.Component {
  starsRef = React.createRef();

  constructor(props) {
    super(props);

    this.computedScore = this.computedScore.bind(this);
    this.changeScore = this.changeScore.bind(this);

    this.state = {
      score: 10
    }
  }

  changeScore(newScore) {
    this.setState({
      score: newScore*2
    });
  }

  computedScore() {
    const stars = new Array(5);

    stars.fill(faStar);

    return stars;
  }

  render() {
    const { color, showScore, input } = this.props
    const { score } = this.state;


    if (color) {
      document.documentElement.style.setProperty('--rvk-star-input-color', color);
    }

    return (
      <React.StrictMode>
        <React.Fragment>
          <input type={'hidden'}
                 id={input.id}
                 name={input.name? input.name : input.id}
                 value={score} />
          <span className={'rvk--reviews--input--score__stars'}>
              {this.computedScore().map((icon, key) => <FontAwesomeIcon
                className={['rvk--reviews--input--score__star', Number(score) === (key+1)*2 ? 'active' : ''].join(' ')}
                icon={icon}
                key={key}
                onClick={() => this.changeScore(key + 1)} />)}
            {showScore && <h2 className={'rvk--reviews--score__number'}>{score}</h2>}
          </span>
        </React.Fragment>
      </React.StrictMode>
    )
  }
}

Stars.propTypes = {
  input: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
  }).isRequired,

  color: PropTypes.string,
  showScore: PropTypes.bool,
}

export default Stars;
