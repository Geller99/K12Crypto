import React, { useState } from "react";
import icon from "../../assets/svgs/Group 25.png";
import FAQCard from "../FAQCard";

const FAQs = () => {
  const [visible, setVisible] = useState(2);

  const showMoreItems = () => {
    setVisible((prevalue) => prevalue + 2);
  };

  const showLessItems = () => {
    setVisible((prevalue) => prevalue - 2);
  };

  const faqs = [
    {
      question: "Egestas leo nisl orci nulla cursus?",
      answer:
        "Modules and courses to help broaden your web 3 knowledge and put you up to speed on how it works ",
      relatedQuestions: "More related questions",
    },
    {
      question: "Egestas leo nisl orci nulla cursus?",
      answer:
        "Modules and courses to help broaden your web 3 knowledge and put you up to speed on how it works ",
      relatedQuestions: "More related questions",
    },
    {
      question: "Egestas leo nisl orci nulla cursus?",
      answer:
        "Modules and courses to help broaden your web 3 knowledge and put you up to speed on how it works ",
      relatedQuestions: "More related questions",
    },
    {
      question: "Egestas leo nisl orci nulla cursus?",
      answer:
        "Modules and courses to help broaden your web 3 knowledge and put you up to speed on how it works ",
      relatedQuestions: "More related questions",
    },
  ];

  return (
    <div className="Faqs">
      <div className="container">
        <div className="section-title">
          <span className="title"><h1>FAQs</h1></span>
          {/* underline */}
        </div>
        <div className="grid-container mobile-grid">
          {faqs.slice(0, visible).map((faq, index) => {
            return (
              <FAQCard
                key={index}
                question={faq.question}
                answer={faq.answer}
                relatedQuestions={faq.relatedQuestions}
              />
            );
          })}

          {/* button to show more faqs */}
          {visible < faqs.length ? (
            <div className="button-container">
              <button className="button" onClick={showMoreItems}>
                Show more
              </button>
            </div>
          ) : (
            <div className="button-container">
              <button className="button" onClick={showLessItems}>
                Show less
              </button>
            </div>
          )}
        </div>

        {/* on desktop */}
        <div className="grid-container desktop-grid">
          {faqs.map((faq, index) => {
            return (
              <FAQCard
                key={index}
                question={faq.question}
                answer={faq.answer}
                relatedQuestions={faq.relatedQuestions}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
