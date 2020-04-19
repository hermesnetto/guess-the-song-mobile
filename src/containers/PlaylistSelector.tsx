import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Option } from '../components/Option';
import { metrics } from '../theme';
import { selectPlaylistAction } from '../store/actionCreators';
import { playlistSelector, genreSelector } from '../store/selectors';
import { useFetchPlaylists } from '../hooks/useFetchPlaylists';
import { Playlist } from '../types';
import { useSpotifyToken } from '../hooks/useSpotifyToken';

const getSelectedState = (selected: Playlist, current: Playlist): 'success' | undefined => {
  return current.id === selected.id ? 'success' : undefined;
};

export const PlaylistSelector: React.FC = () => {
  const dispatch = useDispatch();
  const selectedPlaylist = useSelector(playlistSelector);
  const genre = useSelector(genreSelector);
  const { token } = useSpotifyToken();
  const [playlists, fetchAndSetPlaylists] = useFetchPlaylists();
  const randomPlaylist = {
    id: 'random',
    name: 'Random',
  };
  const stateRandom = getSelectedState(selectedPlaylist, randomPlaylist);

  const selectPlaylist = (playlist: Playlist) => {
    dispatch(selectPlaylistAction(playlist));
  };

  useEffect(() => {
    fetchAndSetPlaylists(genre.name, token);
  }, [genre, token]);

  return (
    <View style={styles.list}>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() => selectPlaylist(randomPlaylist)}
      >
        <Option title={randomPlaylist.name} state={stateRandom} />
      </TouchableOpacity>

      {playlists.map(playlist => {
        let state = getSelectedState(selectedPlaylist, playlist);

        return (
          <TouchableOpacity
            style={styles.item}
            key={playlist.id}
            activeOpacity={1}
            onPress={() => selectPlaylist(playlist)}
          >
            <Option title={playlist.name} state={state} />
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
