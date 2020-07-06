import React from "react";
import { Rate } from "antd";
import BodyOne from "../typography/BodyOne";
import "antd/dist/antd.css";

const ListingCard = ({
  listingTitle,
  listingLocation,
  price,
  rating,
  coverPhoto,
}) => (
  <>
    <div class="rounded-px w-card h-auto shadow-lg-card cursor-pointer">
      <img src={coverPhoto} class="w-full h-48 rounded-t-px" alt="cover" />
      <div class="flex flex-col p-2">
        <div class="flex flex-row mt-2 ">
          <BodyOne className="text-lg">{listingTitle}</BodyOne>
          <BodyOne className="text-sm text-grey">{listingLocation}</BodyOne>
        </div>

        <BodyOne className=" text-lg mt-8 text-green-dark">${price}</BodyOne>
        <Rate disabled defaultValue={rating} />
      </div>
    </div>
  </>
);
export default ListingCard;
