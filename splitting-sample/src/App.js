import React, {useState, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import lodable from '@loadable/component';

// const SplitMe = React.lazy(() => import('./components/SplitMe'));
const SplitMe = lodable(() => import("./components/SplitMe"), {fallback: <div>loading...</div>});


function App() {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  }

  const onMouseOver = () => {
      SplitMe.preload();
  }

  // onClick = () => {
  //   import('./notify').then(result => result.default());
  //   import('./notify').then(result => result.test());
  // }
  //
  // handleClick = async () => {
  //   const loadedModule = await import('./components/SplitMe');
  //
  //   this.setState({
  //     SplitMe: loadedModule.default
  //   })
  // }

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p onClick={onClick} onMouseOver={onMouseOver}>Hello React2</p>
          {/*<Suspense fallback={<div>loading...</div>}>*/}
            {visible && <SplitMe/>}
          {/*</Suspense>*/}
        </header>
      </div>
  );
}

export default App;
