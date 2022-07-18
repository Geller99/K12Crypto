import React from "react";


const FAQCard = ({question,answer}) => {
  return (
    <div className="FaqCard">
      <div className="box-container">
      <p className="faq-heading">{question}</p>
      <p className="faq-subheading">{answer} </p>
      <p className="related-question">More related questions</p>
        
      </div>
    </div>
  );
};

export default FAQCard;
