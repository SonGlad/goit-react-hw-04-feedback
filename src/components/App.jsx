import {Container} from './Container/Container';
import {Section} from './Section/Section';
import {ButtonContainer} from './FeedbackOption/FeedbackOption';
import {Statistics} from './Statistics/Statistics';
import {Component} from 'react';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  changeOnClick = (option) => {
    this.setState ((prevState) => ({
      [option]: prevState[option] + 1,
    }))
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  };

  countPositiveFeedbackPercentage = () =>{
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : (this.state.good / total) * 100;
  }
  
  render() {
    const {good, neutral, bad} = this.state;
    return (
      <Container>
        <Section title={'Please leave your feedback'}>
          <ButtonContainer option={Object.keys(this.state)}
            changeOnClick={this.changeOnClick}/>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback, sorry" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              count={this.countPositiveFeedbackPercentage()}
            />
          )}

        </Section>
      </Container>
    );
  }
};
