import React, {Component} from 'react';

import HooksList from './HooksList';
import Countries from '../../../../util/countries';
import Fonts from '../../../../util/fonts';

class LessonHooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontColor: '#000000',
      lastUpdated: new Date().toString(),
      countries: null,
    };

    this.toggleFontColor = this.toggleFontColor.bind(this);
  }

  componentWillMount() {
    console.log('...componentWillMount...');
    setTimeout(() => {
      this.setState({countries: Countries, lastUpdated: new Date().toString()});
    }, 5000);
  }

  componentDidMount() {
    console.log('...componentDidMount...');
  }

  getRandomFont = () => {
    return Fonts[parseInt(Math.random() * 10 % Fonts.length, 10)];
  };
  toggleFontColor() {
    this.setState({
      fontColor: this.getRandomFont(),
    });
  }

  render() {
    console.log('...render...');

    // eslint-disable-next-line no-unused-vars
    const {fontColor, countries, lastUpdated} = this.state;

    return (
        <section className="lesson-hooks info-panel">
          <h2>Lifecycle Hooks</h2>
          <div className="data">
            <HooksList countries={countries} fontColor={fontColor}/>
          </div>
          {
            countries && (
                <div className="action-prompt" style={{textAlign: 'center'}}>
                  <button onClick={this.toggleFontColor}>Toggle Font</button>
                </div>
            )
          }
          <h2>Last Updated: {lastUpdated}</h2>
        </section>
    );
  }
}

export default LessonHooks;
