import React from 'react';
import ColorBox from './components/ColorBox';
import {ColorProvider} from './contexts/color';
import SelectColors from './components/SelectColors';


function App() {
  return (
      //Provider는 value 값 명시해야함
      <ColorProvider>
        <div>
          <SelectColors/>
          <ColorBox/>
        </div>
      </ColorProvider>
  );
}

export default App;
