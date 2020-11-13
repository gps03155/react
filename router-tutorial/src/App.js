import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Profiles from './Component/Profiles';
import HistorySample from './Component/HistorySample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
            <Link to="/profiles">프로필</Link>
        </li>
        <li>
            <Link to="/history">history</Link>
        </li>
      </ul>
      <Switch>
          {/* exact : 경로가 완전히 똑같을 때만 페이지 이동 */}
          <Route path="/" exact={true} component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/profiles" component={Profiles}/>
          <Route path="/history" component={HistorySample}/>
          <Route render={({location}) => (
              <div>
                  <h2>이 페이지는 존재하지 않습니다.</h2>
                  <p>{location.pathname}</p>
              </div>
          )}/>
      </Switch>
    </div>
  );
}

export default App;
