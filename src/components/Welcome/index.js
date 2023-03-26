// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClicked: true}

  clickthebutton = () => {
    const {isClicked} = this.state
    if (isClicked === true) {
      this.setState({isClicked: false})
      return {isClicked}
    }

    this.setState({isClicked: true})
    return {isClicked}
  }

  render() {
    const {isClicked} = this.state
    console.log(isClicked)

    // if (isClicked === true) {
    //   this.state.isClicked = false
    // } else {
    //   this.state.isClicked = true
    // }
    return (
      <div className="bg_container">
        <h1 className="main_heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <div>
          <button
            onClick={this.clickthebutton}
            className="button"
            type="button"
          >
            {isClicked ? 'Subscribe' : 'Subscribed'}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
