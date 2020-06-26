import React from "react";
import HeadingOne from "../components/HeadingOne";
import LandingHeader from "../components/navs/LandingHeader";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_LISTINGS } from "../graphql/Queries";
import ListingCard from "../components/cards/ListingCard";
const Index = () => {
  const { loading, data, error } = useQuery(GET_ALL_LISTINGS);

  if (loading) return <p className="text-red">loading</p>;
  if (error) return <p className="text-red">{error}</p>;

  return (
    <>
      <LandingHeader />
      <div class="grid grid-cols-3 col-gap-32 p-10">
        {data.getAllListings.map((g) => (
          <>
            <ListingCard
              listingTitle="listing.listingName"
              listingLocation="listing.listingLocation"
              price="listing.price"
              rating="listing.rating"
              coverPhoto="listing.coverPhoto"
              class="mt-32"
            />
          </>
        ))}
      </div>
    </>
  );
};

export default Index;
