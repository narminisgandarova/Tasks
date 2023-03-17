import React, { Component } from 'react'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Four from './components/Four'
import Six from './components/Six'
import Seven from './components/Seven'
import Eight from './components/Eight'
import Nine from './components/Nine'
import Ten from './components/Ten'
import Footer from './components/Footer'
export class App extends Component {
  render() {
    return (
      <div>
        <First/>
        <Second/>
        <Third/>
        <Four/>
        <Six/>
        <Seven/>
        <Eight/>
        <Nine/>
        <Ten/>
        <Footer/>
      </div>
    )
  }
}

export default App