import { BrowserRouter, Route } from 'react-router-dom';

import { HomeIfsp } from './pages/HomeIfsp/index';

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeIfsp} />
    </BrowserRouter>
  );
}
