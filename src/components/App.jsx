// import {Component} from 'react';
import {Container} from './Container/Container';
import {Section} from './Section/Section';
import {ButtonContainer} from './FeedbackOption/FeedbackOption';
import {Statistics} from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';
import { feedbacks } from './Utils/Feedback';



export const App = () => {
  const initialFeedback = { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(initialFeedback);


  const changeOnClick = option => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] +1, 
    }));
  };


  const countTotalFeedback = () => {
    const {good, neutral, bad} = feedback;
      return good + neutral + bad;
  };


  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : (feedback.good / total) * 100;
  }


  const renderStatistics = () => {
    const {good, neutral, bad} = feedback;
    if(countTotalFeedback() === 0) {
      return <Notification message="There is no feedback, sorry" />
    } else {
      return(
        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        count={countPositiveFeedbackPercentage()}
        />
      );
    }
  };

  

  return(
    <Container>
      <Section title={'Please leave your feedback'}>
        <ButtonContainer
        option={Object.keys(feedbacks)} 
        changeOnClick={changeOnClick}/>
      </Section>
      <Section title="Statistics"> 
        {renderStatistics()}
      </Section>
    </Container>
  )
};







// ////////////////////////////////////////////
// INITIAL HOOKS BEFORE OPTIMIZATION
///////////////////////////////////////////////

 // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
  
  // const changeOnClickGood = prevGood => {
  //   setGood(prevGood => prevGood + 1) 
  // }
  // const changeOnClickNeutral = prevNeutral => {
  //   setNeutral(prevNeutral => prevNeutral + 1) 
  // }
  // const changeOnClickBad = prevBad => {
  //   setBad(prevBad => prevBad + 1) 
  // }

  // const changeOnClick = (option) => {
  //   switch (option){
  //     case "good":
  //       setGood(prevGood => prevGood + 1);
  //       break;
  //     case "neutral":
  //       setNeutral(prevNeutral => prevNeutral + 1);
  //       break;
  //     case "bad":
  //       setBad(prevBad => prevBad + 1);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // const countTotalFeedback = () => {
  //   return good + neutral + bad;
  // }

  // const countPositiveFeedbackPercentage = () => {
  //   const total = countTotalFeedback();
  //   return total === 0 ? 0 : (good / total) * 100;
  // }
///////////////////////////////////////////////////////



//////////////////////////////////////////////
// OLD CODE FOR CLASSES////////////////////////
//////////////////////////////////////////////

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   changeOnClick = (option) => {
//     this.setState ((prevState) => ({
//       [option]: prevState[option] + 1,
//     }))
//   };

//   countTotalFeedback = () => {
//     const {good, neutral, bad} = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () =>{
//     const total = this.countTotalFeedback();
//     return total === 0 ? 0 : (this.state.good / total) * 100;
//   }


  
//   render() {
//     const {good, neutral, bad} = this.state;
//     return (
//       <Container>
//         <Section title={'Please leave your feedback'}>
//           <ButtonContainer option={Object.keys(this.state)}
//             changeOnClick={this.changeOnClick}/>
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There is no feedback, sorry" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               count={this.countPositiveFeedbackPercentage()}
//             />
//           )}

//         </Section>
//       </Container>
//     );
//   }
// };

/////////////////////////////////////////////////////////////////
