import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// using tagged (styled), gets fed into styled-components template literal syntax
const Wrapper = styled.div`
    width: 32%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    overflow: hidden;
`;

const Image = styled.img`
    width: 46%;
    float: left;
    margin-right: 10px;
`;

const ShowCard = props => (
    <Wrapper>
        <Image alt={`${ props.title } Poster`} src={`/public/img/posters/${ props.poster }`} />
        <div>
            <h3>{ props.title }</h3>
            <h4>({ props.year })</h4>
            <p>{ props.description}</p>
        </div>
    </Wrapper>
);

ShowCard.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ShowCard;