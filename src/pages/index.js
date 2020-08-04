import React from "react";
import LandingHeader from "../components/navs/LandingHeader";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_LISTINGS } from "../graphql/Queries";
import ListingCard from "../components/cards/ListingCard";
import { Link } from "@reach/router";
import { Skeleton } from "antd";

const Index = () => {
  const { loading, data, error } = useQuery(GET_ALL_LISTINGS);

  if (loading) return <Skeleton />;
  if (error) return <p className="text-red">{error}</p>;

  console.log(data, error);
  return (
    <>
      <LandingHeader
        imgURL="https://moon.nasa.gov/system/resources/detail_files/187_detail_as11-44-6551_orig.jpg"
        text="Book Vacations to Different Lunar Destinations"
      />
      <div className="grid grid-cols-3 col-gap-32 p-10">
        {data.getAllListings.map((listing) => (
          <div key={listing.listingId} className="mt-32">
            <Link to={`listing/${listing.listingId}`}>
              <ListingCard
                listingTitle={listing.listingName}
                listingLocation={listing.listingLocation}
                price={listing.price}
                rating={listing.rating}
                coverPhoto={listing.coverPhoto}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
