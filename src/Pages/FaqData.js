import React, { useState } from 'react';

const faqData = [
  {
    question: 'What is this dashboard used for?',
    answer: 'This dashboard helps you manage users, view statistics, and handle administrative tasks efficiently.',
  },
  {
    question: 'Can I customize the components?',
    answer: 'Yes, you can easily customize the layout and components to match your requirements.',
  },
  {
    question: 'Is the dashboard mobile responsive?',
    answer: 'Absolutely! The dashboard adapts to different screen sizes for a seamless experience.',
  },
  {
    question: 'How do I add new users?',
    answer: 'Navigate to the Users page and click on "Add User" to fill in the user details.',
  },
  {
    question: 'Can I integrate third-party APIs?',
    answer: 'Yes, the dashboard supports integration with external APIs for extended functionalities.',
  },
  {
    question: 'Is there a dark mode available?',
    answer: 'Currently, the dashboard uses a dark theme by default. You can switch themes via settings if implemented.',
  },
  {
    question: 'How secure is the dashboard?',
    answer: 'Security is a top priority. The dashboard uses best practices for authentication and data protection.',
  }
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <h1 className='ms-2 mt-3 text-light'>FAQ</h1>
      <p style={{ color: '#1c9877', fontSize: '20px' }} className='mt-2 ms-2'>
        Frequently Asked Questions
      </p>

      <div style={{ padding: '30px', width:'90%' }}>
        {faqData.map((faq, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#1a2438',
              borderRadius: '8px',
              marginBottom: '35px',
              padding: '15px 20px',
              color: '#1c9877',
              cursor: 'pointer',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            }}
            onClick={() => toggleQuestion(index)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>{faq.question}</strong>
              <span>{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            {activeIndex === index && (
              <p style={{ marginTop: '10px', color: '#fff' }}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqPage;
