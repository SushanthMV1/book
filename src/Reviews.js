const Reviews = ({ reviews }) => {
  return (
    <div id="reviews">
      {reviews.map((review) => (
        <div className="review">
          <div className="reviewTop">
            <div className="reviewImg">
              <img src={review.image} />
            </div>
            <div className="reviewTopContent">
              <div className="reviewName">{review.name}</div>
              <div className="reviewRating">{review.rating}</div>
            </div>
          </div>
          <div className="reviewBottom">
            <div className="reviewText">{review.review}</div>
            <div className="reviewSymbol">"</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
