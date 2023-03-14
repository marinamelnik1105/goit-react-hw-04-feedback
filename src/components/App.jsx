import { useState } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Layout } from "./Layout.styled";
import { GlobalStyle } from "./GlobalStyle.styled";
export const App = () =>
{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)
  
 const handleIncrement = (e)=>{
   const value = e.currentTarget.textContent;
   console.log(value)
    // setState(prevState => {
    //   return {
    //     [value]: prevState[value] + 1,
    //   };
    // });
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
    
  }
 const countTotalFeedback = ()=>{
    return good+neutral+bad }
const countPositiveFeedbackPercentage = () =>{
return ((good * 100) / countTotalFeedback())}
  
    const totalFeetback = countTotalFeedback();
    const positiveFeetbackPercentage = countPositiveFeedbackPercentage();
     return (
       <Layout>
         <GlobalStyle/>
         <Section title='Please leave feedback'>
           <FeedbackOptions onLeaveFeedback={handleIncrement}/>
   
         </Section>
  
         {totalFeetback !== 0 ? (<Section title='Statistics'>
           <Statistics good={good} neutral={neutral} bad={neutral} total={totalFeetback} positiveFeedbackPercentage={positiveFeetbackPercentage} />
           </Section>) : (<Notification message="There is no feedback"/>)}
   
    
    
    </Layout>
  );
 
};
