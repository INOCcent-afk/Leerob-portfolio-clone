import React, { FC } from "react";
import { useQuery } from "react-query";

import Track from "../../components/Track";
import { getCurrentPlaylist } from "../../utils/api/getCurrentPlaylist";

type Props = {
  playlist: {
    tracks: {
      items: [];
    };
  };
};
type TrackProps = {
  track: {
    name: string;
    uri: string;
    artists: ArtistInfo;
  };
};
type ArtistInfo = {
  name: string;
};

const Tracks: FC<Props> = ({ playlist }: Props) => {
  const [tracks, setTracks] = React.useState([]);

  const { data } = useQuery("tracks", getCurrentPlaylist, {
    initialData: playlist,
  });

  React.useEffect(() => {
    setTracks(data.tracks.items);
  }, []);

  return (
    <div>
      {tracks &&
        tracks.map((item: TrackProps, index: number) => (
          <Track
            key={index + 1}
            trackAuthor={item.track.artists[0].name}
            trackNumber={index + 1}
            trackName={item.track.name}
            trackUri={item.track.uri}
          />
        ))}
    </div>
  );
};

export default Tracks;
