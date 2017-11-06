import React from 'react';

import { render } from 'react-dom';

const App = () =>  (
    <div className="app omg">
      <div className="landing">
        <h1>title</h1>
        <input type="text" placeholder="search" />
        <a href>link</a>
      </div>
    </div>
  );

render(<App />, document.getElementById('app'));
