import React, { FC } from "react";

import PageHeading from "../components/PageHeading";
import DataContainer from "../containers/DataContainer";
import Track from "../components/Track";

import { motion } from "framer-motion";
import { PageAnimate } from "../animations/PageTransition";

const dashboard: FC = () => {
  return (
    <>
      <motion.div
        variants={PageAnimate}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <PageHeading bigTitle="Dashboard">
          <p>
            This is my personal dashboard, built with Next.js API routes
            deployed as serverless functions. I use this dashboard to track
            various metrics across platforms like Unsplash, YouTube, GitHub, and
            more. Want to build your own? Check out my
          </p>
        </PageHeading>
        <DataContainer />
        <PageHeading smallTitle="Top Tracks">
          <p>
            Curious what I'm currently jamming to? Here's my top tracks on
            Spotify updated daily.
          </p>
        </PageHeading>
        {/* will fetch another spotify api */}
        {/* <Tracks playlist={playlist} /> */}
        <Track
          trackAuthor="Craig David"
          trackNumber={1}
          trackName="Fill Me In"
          trackUri="https://open.spotify.com/artist/05SdqPzK4m3k1ljK2wrTSP"
        />
        <Track
          trackAuthor="The Wombats"
          trackNumber={2}
          trackName="Greek Tragedy"
          trackUri="https://open.spotify.com/artist/05SdqPzK4m3k1ljK2wrTSP"
        />
        <Track
          trackAuthor="T. Matthias, NEVRMIND"
          trackNumber={3}
          trackName="Addicted to You"
          trackUri="https://open.spotify.com/artist/05SdqPzK4m3k1ljK2wrTSP"
        />
        <Track
          trackAuthor="Playboi Carti"
          trackNumber={4}
          trackName="Magnolia"
          trackUri="https://open.spotify.com/artist/05SdqPzK4m3k1ljK2wrTSP"
        />
        <Track
          trackAuthor="17"
          trackNumber={5}
          trackName="MK"
          trackUri="https://open.spotify.com/artist/05SdqPzK4m3k1ljK2wrTSP"
        />
        <Track
          trackAuthor="RadioClub"
          trackNumber={6}
          trackName="Never Gonna Give You Up"
          trackUri="https://open.spotify.com/artist/05SdqPzK4m3k1ljK2wrTSP"
        />
        <Track
          trackAuthor="THRU THE NIGHT (feat. Bryson Tiller)"
          trackNumber={7}
          trackName="Jack Harlow, Bryson Tiller"
          trackUri="https://open.spotify.com/artist/05SdqPzK4m3k1ljK2wrTSP"
        />
        <Track
          trackAuthor="Playboi Carti, Lil Uzi Vert"
          trackNumber={8}
          trackName="wokeuplikethis*"
          trackUri="https://open.spotify.com/artist/05SdqPzK4m3k1ljK2wrTSP"
        />
        <Track
          trackAuthor="Tchami, Gunna"
          trackNumber={9}
          trackName="Praise (feat. Gunna)"
          trackUri="https://open.spotify.com/artist/05SdqPzK4m3k1ljK2wrTSP"
        />
      </motion.div>
    </>
  );
};

export default dashboard;

// export const getStaticProps = async () => {
//   const playlist = await getCurrentPlaylist();

//   return { props: { playlist } };
// };
