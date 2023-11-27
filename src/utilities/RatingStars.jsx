import { FaStar } from "react-icons/fa";



const RatingStars = ({rate}) => {
  const RatingStars = () => {
    const rating = Math.floor(rate);
    console.log(rate)
    return [...Array(5)].map((_, index) => (
      <li key={index}>
        <FaStar key={index} className={index + 1 <= rating ? "text-yellow-500" : "text-gray-500"} />
      </li>
    ));
  };



  return (
    <ul className="flex gap-1">
      {RatingStars()}
    </ul>
  )
}

export default RatingStars