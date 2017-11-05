import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const Title = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const Component = function() {
  return ce(
    'div',
    { id: 'mfc' },
    ce(Title, { title: 'game of thrones', color: 'lime' }),
    ce(Title, { title: 'stranger things', color: 'pink' }),
    ce(Title, { title: 'i love lucy', color: 'red' })
  );
};

render(ce(Component), document.getElementById('app'));
