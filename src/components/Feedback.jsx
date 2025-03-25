const Feedback =({feedback, total, positive}) =>{
    return (
        <div>
            <h3>Feedback Statiscs</h3>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {total}</p>
            <p>Positive Feedback: {positive}%</p>
        </div>
    );
};
export default Feedback;