import React, { useState } from 'react';
import classes from '../modules/AccordionList.module.scss';
import Logo from '../assets/images/icon-star.svg';
import plus from '../assets/images/icon-plus.svg';
import minus from '../assets/images/icon-minus.svg';

const AccordionItem = ({ question, answer, isOpen, toggleAccordion }) => {
  return (
    <div className={classes['First-part']} onClick={toggleAccordion}>
       <div className={classes['dropdwon']}>
        <h1>{question}</h1>
        <img src={isOpen ? minus : plus} alt="" />
      </div>
      {isOpen && (
        <div>
          <p className={classes['title']}>{answer}</p>
        </div>
      )}
      </div>
  );
};

export const List = () => {
  const [accordionState, setAccordionState] = useState([false, false, false, false]);

  const toggleAccordion = (index) => {
    setAccordionState((prevState) =>
      prevState.map((state, i) => (i === index ? !state : false))
    );
  };

  return (
    <div className={classes['Main']}>
      <div className={classes['Top']}>
        <img src={Logo} alt="" />
        <h1>FAQs</h1>
      </div>
      <AccordionItem
        question="What is Frontend Mentor, and how will it help me?"
        answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        isOpen={accordionState[0]}
        toggleAccordion={() => toggleAccordion(0)}
      />
      <hr />
      <AccordionItem
        question="Is Frontend Mentor free?"
        answer="Yes, Frontend Mentor is free to use."
        isOpen={accordionState[1]}
        toggleAccordion={() => toggleAccordion(1)}
      />
      <hr />
      <AccordionItem
        question="Can I use Frontend Mentor projects in my portfolio?"
        answer="Yes, you can use Frontend Mentor projects in your portfolio."
        isOpen={accordionState[2]}
        toggleAccordion={() => toggleAccordion(2)}
      />
      <hr />
      <AccordionItem
        question="How can I get help if I'm stuck on a challenge?"
        answer="You can seek help from the community forums or use other available resources."
        isOpen={accordionState[3]}
        toggleAccordion={() => toggleAccordion(3)}
      />
    </div>
  );
};
