import user from "../assets/images/tamara-bellis-189613-1024x681.jpg";
import "../styles/Review.css";

const Review = () => {
  return (
    <article className="review">
      <h3>Rating</h3>
      <main className="reviewMain">
        <img src={user} alt="user" />
        <p>Name</p>
      </main>
      <p>Comment</p>
    </article>
  );
};

export default Review;
