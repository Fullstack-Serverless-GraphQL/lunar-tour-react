import React from "react";
import { Rate } from "antd";

import "antd/dist/antd.css";

const ListingCard = ({
  listingTitle,
  listingLocation,
  price,
  rating,
  coverPhoto,
}) => (
  <>
    <div class="rounded-px w-card h-card shadow-lg-card cursor-pointer">
      <img src={coverPhoto} class="w-full h-48 rounded-t-px" alt="cover" />
      <div class="flex flex-col p-2">
        <div class="flex flex-row mt-2 ">
          <p class="font-display text-base">{listingTitle}</p>
          <p class="font-display text-sm text-grey">{listingLocation}</p>
        </div>

        <p class="font-display text-lg mt-8">${price}</p>
        <Rate disabled defaultValue={rating} />
      </div>
    </div>
  </>
);
export default ListingCard;
