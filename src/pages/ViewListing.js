import React from "react";
import RedBlockButton from "../components/buttons/RedBlockButton";
import { useQuery } from "@apollo/react-hooks";
import { GET_A_LISTING } from "../graphql/Queries";
import activy from "../assets/trip_type.svg";
import amenities from "../assets/trip_activity.svg";
import LandingHeader from "../components/navs/LandingHeader";
const ViewListing = (props) => {
  console.log(props);

  const { loading, data, error } = useQuery(GET_A_LISTING, {
    variables: {
      listingId: props.id,
    },
  });

  if (loading) return <p className="text-red">loading</p>;
  if (error) return <p className="text-red">{error}</p>;

  console.log(data);

  return (
    <>
      <LandingHeader imgURL={data.getAListing.coverPhoto} />
      <div className="grid grid-cols-13 p-5 mt-10">
        <div className="mr-16">
          <h1 className="font-display  font-semibold text-3xl text-black">
            {data.getAListing.listingName}
          </h1>
          <h1 className="font-display text-xl text-black mt-4 mb-8">
            {data.getAListing.listingLocation}
          </h1>
          <h1 className="font-display font-bold text-xl text-center s:text-left mb-5 text-black ">
            $ {data.getAListing.price}
          </h1>
          <p className="font-display text-left text-black ">
            {data.getAListing.listingDescription}
          </p>

          <h3 className="font-display text-2xl font-bold text-black mt-10">
            Trip ammenities
          </h3>

          <div className="flex flex-row p-3" key="types">
            {data.getAListing.listingType.map((t) => (
              <>
                <img src={activy} alt="activity" />
                <p className="font-display ml-2">{t.name}</p>
              </>
            ))}
          </div>

          <h3 className="font-display text-2xl font-bold text-black  mt-10">
            Activites
          </h3>
          <div className="flex flex-row p-3" key="activies">
            {data.getAListing.listingActivities.map((a) => (
              <>
                <img src={amenities} alt="amend" />
                <p className="font-display ml-2">{a.name}</p>
              </>
            ))}
          </div>
        </div>
        <div className="flex flex-col ">
          <div>
            <RedBlockButton
              text="Book"
              className=" text-center s:pr-20 mb-10 mt-10"
            />
          </div>
          <div>
            <h3 className="font-display text-xl   text-black mt-10 mb-10">
              Your guide
            </h3>
            <img
              src={data.getAListing.guide.Avatar}
              alt="guide"
              className="rounded-lg h-48"
            />
          </div>
          <div>
            <h3 className="font-display text-xl   text-black mt-10">
              {data.getAListing.guide.Name}
            </h3>
            <p className="font-display   text-black mt-5 ">
              {data.getAListing.guide.Bio}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewListing;
