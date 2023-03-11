import { Component } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Layout } from "./Layout.styled";
import { GlobalStyle } from "./GlobalStyle.styled";
export class App extends Component {
  state ={
  good: 0,
  neutral: 0,
  bad: 0}
  handleIncrement = (e)=>{
   const value = e.currentTarget.textContent;
   console.log(value)
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
    
  }
  countTotalFeedback = ()=>{
    return this.state.good+this.state.neutral+this.state.bad }
countPositiveFeedbackPercentage = () =>{
return ((this.state.good * 100) / this.countTotalFeedback())}
  render(){
    const totalFeetback = this.countTotalFeedback();
    const positiveFeetbackPercentage = this.countPositiveFeedbackPercentage();
     return (
       <Layout>
         <GlobalStyle/>
         <Section title='Please leave feedback'>
           <FeedbackOptions onLeaveFeedback={this.handleIncrement}/>
   
         </Section>
  
         {totalFeetback !== 0 ? (<Section title='Statistics'>
           <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.neutral} total={totalFeetback} positiveFeedbackPercentage={positiveFeetbackPercentage} />
           </Section>) : (<Notification message="There is no feedback"/>)}
   
    
    
    </Layout>
  );}
 
};
