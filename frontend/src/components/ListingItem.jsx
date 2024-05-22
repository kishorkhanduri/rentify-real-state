import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from 'react-redux';
import { FaHeart, FaRegHeart, } from 'react-icons/fa';
import axios from 'axios';

export default function ListingItem({ listing }) {

  const user = useSelector(state => state.user.currentUser);
  const handleLike = async (id) => {
    try {
      await axios.put(`/like/${id}`);
      // Refresh the listing or update the state to reflect the change
    } catch (error) {
      console.error('Error liking listing:', error);
    }
  };

  const handleUnlike = async (id) => {
    try {
      await axios.put(`/unlike/${id}`);
      // Refresh the listing or update the state to reflect the change
    } catch (error) {
      console.error('Error unliking listing:', error);
    }
  };

  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
          }
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold ">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="text-slate-700 flex gap-4 items-center">
            <div className="font-bold text-xs">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className="font-bold text-xs">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
          </div>
        </div>
      </Link>
      <div className="flex pt-2 pb-2">
        {listing.like.includes(user?._id) ? (
          <FaHeart size={26}
            onClick={() => handleUnlike(listing._id)}
            className="text-red-500 text-4xl pt-2 px-2 cursor-pointer"
          />
        ) : (
          <FaRegHeart
            onClick={() => handleLike(listing._id)}
            className="text-red-500 pt-2 text-4xl px-2 cursor-pointer"
          />
        )}
        <div className="pt-2">{listing.like.length} like</div>
      </div>

    </div>
  );
}
