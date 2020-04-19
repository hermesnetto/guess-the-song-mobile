import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Option } from '../components/Option';
import { metrics, colors } from '../theme';
import { selectPlaylistAction } from '../store/actionCreators';
import { selectPlaylist } from '../store/selectors';

type Playlist = {
  id: string;
  name: string;
};

const getSelectedFill = (selected: Playlist, current: Playlist): string | undefined => {
  return current.id === selected.id ? colors.success : undefined;
};

export const PlaylistSelector: React.FC = () => {
  const dispatch = useDispatch();
  const selectedPlaylist = useSelector(selectPlaylist);
  const randomPlaylist = {
    id: 'random',
    name: 'Random',
  };
  const [playlists] = useState<Playlist[]>([
    { id: 'jazz-brasileiro', name: 'Jazz brasileiro' },
    { id: 'jazz-relax', name: 'Jazz relax' },
    { id: 'jazz-x-press', name: 'Jazz X-Press' },
    { id: 'coffee-table-jazz', name: 'Coffee table Jazz' },
  ]);

  const randomFill = getSelectedFill(selectedPlaylist, randomPlaylist);

  const handleSelectPlaylist = (playlist: Playlist) => {
    dispatch(selectPlaylistAction(playlist));
  };

  return (
    <View style={styles.list}>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() => handleSelectPlaylist(randomPlaylist)}
      >
        <Option title={randomPlaylist.name} fill={randomFill} />
      </TouchableOpacity>

      {playlists.map(playlist => {
        let fill = getSelectedFill(selectedPlaylist, playlist);

        return (
          <TouchableOpacity
            style={styles.item}
            key={playlist.id}
            activeOpacity={1}
            onPress={() => handleSelectPlaylist(playlist)}
          >
            <Option title={playlist.name} fill={fill} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {},
  item: {
    marginBottom: metrics.baseMargin,
  },
});
