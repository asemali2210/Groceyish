import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
export default function StarRating({rating,maxStars = 5}) {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5; 
  return (
    <div className="star__rating" style={{color: '#FDC040'}}>
        {
            [...Array(maxStars)].map((_, index)=> (
                index < filledStars ? (
                    <IoStar />
                  ) : index === filledStars && hasHalfStar ? (
                    <IoStarHalf />
                  ) : (
                    <IoStarOutline />
                  )
            ))
        }
    </div>
  )
};