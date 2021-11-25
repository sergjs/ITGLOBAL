import React from 'react';
import BY from './img/Icon_BY.png';
import KZ from './img/Icon_KZ.png';
import NL from './img/Icon_NL.png';
import TR from './img/Icon_TR.png';
import US from './img/Icon_US.png';
import RU from './img/Icon_RU.png';
import Header from './Component/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = [
      { icon: US, country: 'United States ', shortName: 'US', active: '' },
      { icon: NL, country: 'Netherlands', shortName: 'NL', active: '' },
      { icon: BY, country: 'Беларусь', shortName: 'BY', active: '' },
      { icon: RU, country: 'Россия', shortName: 'RU', active: true },
      { icon: KZ, country: 'Казахстан', shortName: 'KZ', active: '' },
      { icon: TR, country: 'Türkiye', shortName: 'TR', active: '' },
    ];
  }

  chengeState = (index, bool) => {
    this.state[index].active = bool
  }

  render() {
    return (
      <Header state={this.state} chengeState={this.chengeState} />
    )
  }
}


export default App;
