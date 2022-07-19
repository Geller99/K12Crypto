import React, { useState } from "react";
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
      question: "How does K12Crypto Work ?",
      answer:
        "Imagine an immersive experience where your children can grow real-world skills while earning enough to secure an education for the future. ",
      relatedQuestions: "More related questions",
    },
    {
      question: "Where are student earnings collected ?",
      answer:
        "Student earnings are collected in our K12 Deposit only wallet, which lets students accumulate earnings as they explore the platform.",
      relatedQuestions: "More related questions",
    },
    {
      question: "How do I get involved ?",
      answer:
        "K12Crypto has different paths for anyone looking to get involved; investors, district heads, institutions, content creators and even students all have a place in building the future crypto-powered education.",
      relatedQuestions: "More related questions",
    },
    {
      question: "What tokens do students earn in ?",
      answer:
        "Our learn to earn incentive system is powered on the $K12 native token, backed by our tokenomics model - our lite paper will be made public soon, but contact us at principalrahh@gmail.com. ",
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
