// import Feedback from "./Feedback/Feedback";
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickFeedbackGood = () => {
            this.setState(state => ({good: state.good + 1}))
        }
        clickFeedbackNeutral = () => {
            this.setState(state => ({neutral: state.neutral + 1}))
        }
        clickFeedbackBad = () => {
            this.setState(state => ({bad: state.bad + 1}))
        }
        countTotalFeedback = () => {
let total = this.state.good + this.state.neutral + this.state.bad;
return total
            
        }
        
        countPositiveFeedbackPercentage = () => {
            let total = this.state.good + this.state.neutral + this.state.bad;
            let goodTotal = this.state.good + this.state.neutral;
            return Math.round((goodTotal)/(total)*100)
        }


  render() {
      const {good, neutral, bad} = this.state
      
    return (
      <section style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}>
        <div>
          <h1>Please leave feedback</h1>
          <button type='button' onClick={this.clickFeedbackGood}>Good</button>
          <button type='button' onClick={this.clickFeedbackNeutral}>Neutral</button>
          <button type='button' onClick={this.clickFeedbackBad}>Bad</button>
        </div>
        <div>
          <h1>Statistics</h1>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
        </div>
      </section>
    );
  }
}

export default App

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 20,
//         color: '#010101'
//       }}
//     >
//       <Feedback/>
//     </div>
//   );
// };
