import React from 'react';

const Article = ({ title, date, preview, minutes }) => {
  const defaultDate = "January 1, 1970";

  // Function to calculate 'Minutes to Read'
  const calculateMinutesToRead = (minutes) => {
    const coffeeCupEmoji = "☕️";
    const bentoBoxEmoji = "🍱";
    const coffeeCupPerFiveMinutes = Math.ceil(minutes / 5);
    const bentoBoxPerTenMinutes = Math.ceil(minutes / 10);

    if (minutes < 30) {
      return coffeeCupEmoji.repeat(coffeeCupPerFiveMinutes) + ` ${minutes} min read`;
    } else {
      return bentoBoxEmoji.repeat(bentoBoxPerTenMinutes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
      <p>{calculateMinutesToRead(minutes)}</p>
    </article>
  );
};

export default Article;
