import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
// import img1 from './img/notepad-spring.jpg';
import {FeedbackImg} from './FeedbackImg/FeedbackImg';



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = evt => {
    if (evt === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (evt === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  countTotalFeedback = () => {
    return (this.state.good + this.state.neutral + this.state.bad);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return (total === 0) ? 0 : Math.round((this.state.good / total) * 100);
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',          
          flexWrap: 'wrap',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '750px',
          margin: '0 auto', 
          textAlign: 'center',
          fontSize: 40,
          color: '#010101',
          // flexDirection: 'column',
        }}
      >
        <FeedbackImg />
        <div
          style={{
            padding: '20px',
            boxShadow: '2px 4px 6px',
            width: '100%',
          }}
        >
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={['Good', 'Neutral', 'Bad']}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>

            <Section
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
              title="Statistics"> {
            this.countTotalFeedback() === 0 ? 
              <Notification message="There is no feedback"></Notification>
            : <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            }
          </Section>
        </div>
      </div>
    );
  };
};
