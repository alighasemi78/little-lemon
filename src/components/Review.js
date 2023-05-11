import user from "../assets/images/tamara-bellis-189613-1024x681.jpg";

const Review = () => {
  return (
    <article>
      <h3>Rating</h3>
      <main>
        <img src={user} alt="user" />
        <p>Name</p>
      </main>
      <p>Comment</p>
    </article>
  );
};

export default Review;
