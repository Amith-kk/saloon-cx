import React, { useState } from 'react';

const Feedback = () => {
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review && name) {
      setSubmitted(true); // Mark as submitted
      setTimeout(() => {
        setReview('');
        setName('');
        setSubmitted(false); // Reset form after a delay
      }, 2000);
    }
  };

  return (
    <section id="feedback" className="py-16 bg-dark text-text">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-light tracking-wide">
          Share Your Feedback
        </h2>
        <p className="mt-4 text-light">
          We value your feedback! Let us know how we can improve.
        </p>

        <form
          className="mt-10 max-w-2xl mx-auto bg-medium p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-left text-light mb-2">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-dark text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-light"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="review" className="block text-left text-light mb-2">
              Your Review:
            </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-3 bg-dark text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-light"
              placeholder="Write your review here"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-light text-dark font-semibold rounded-lg hover:bg-text hover:text-light transition"
          >
            Submit
          </button>

          {submitted && (
            <p className="mt-4 text-light font-semibold animate-bounce">
              Thank you for your feedback!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Feedback;
