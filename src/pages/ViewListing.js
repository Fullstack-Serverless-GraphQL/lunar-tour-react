import React from "react";
import RedBlockButton from "../components/buttons/RedBlockButton";
import { useQuery } from "@apollo/react-hooks";
import { GET_A_LISTING } from "../graphql/Queries";
import activy from "../assets/trip_type.svg";
import amenities from "../assets/trip_activity.svg";
import LandingHeader from "../components/navs/LandingHeader";
import { Skeleton } from "antd";

import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  BodyOne,
} from "../components/typography";
const ViewListing = (props) => {
  const { loading, data, error } = useQuery(GET_A_LISTING, {
    variables: {
      listingId: props.id,
    },
  });

  if (loading) return <Skeleton />;
  if (error) return <p className="text-red">{error}</p>;

  return (
    <>
      <LandingHeader imgURL={data.getAListing.coverPhoto} />
      <div className="grid grid-cols-13 p-5 mt-10">
        <div className="mr-16">
          <HeadingOne className="font-display  font-semibold text-3xl text-black">
            {data.getAListing.listingName}
          </HeadingOne>
          <HeadingTwo className="font-display text-xl text-black mt-4 mb-8">
            {data.getAListing.listingLocation}
          </HeadingTwo>
          <HeadingThree className="font-display font-bold text-xl text-center s:text-left mb-5 text-black ">
            $ {data.getAListing.price}
          </HeadingThree>
          <BodyOne className="font-display text-left text-black ">
            {data.getAListing.listingDescription}
          </BodyOne>

          <HeadingThree className="font-display text-2xl font-bold text-black mt-10">
            Trip ammenities
          </HeadingThree>

          <div className="flex flex-col p-3" key="types">
            {data.getAListing.listingType.map((t, index) => (
              <div key={index} className="flex flex-row">
                <img src={activy} alt="activity" />
                <BodyOne className="font-display ml-2 mt-2">{t.name}</BodyOne>
              </div>
            ))}
          </div>

          <HeadingThree className="font-display text-2xl font-bold text-black  mt-10">
            Activites
          </HeadingThree>
          <div className="flex flex-col p-3" key="activies">
            {data.getAListing.listingActivities.map((a, index) => (
              <div key={index} className="flex flex-row">
                <img src={amenities} alt="amend" />
                <BodyOne className="font-display ml-2 mt-2">{a.name}</BodyOne>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <RedBlockButton
              onClick={() => props.navigate(`/booking/${props.id}`)}
              className=" text-center s:pr-20 mb-10 mt-10"
            >
              Book
            </RedBlockButton>
          </div>
          <div>
            <HeadingThree className="font-display text-xl   text-black mt-10 mb-10">
              Your guide
            </HeadingThree>
            <img
              src={data.getAListing.guide.Avatar}
              alt="guide"
              className="rounded-lg h-48"
            />
          </div>
          <div>
            <HeadingThree className="font-display text-xl   text-black mt-10">
              {data.getAListing.guide.Name}
            </HeadingThree>
            <BodyOne className="font-display   text-black mt-5 ">
              {data.getAListing.guide.Bio}
            </BodyOne>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewListing;
