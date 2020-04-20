import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { metrics, colors } from '../theme';
import { Song } from '../types';

type Props = {
  song: Song;
};

export const SongDetailsCard: React.FC<Props> = ({ song }) => {
  return (
    <View style={styles.item} key={song.id}>
      <View style={styles.leftBlock}>
        <Image
          source={{
            uri: song.album.images[0].url,
          }}
          style={styles.thumb}
        />
        <View>
          <Text style={[styles.text, styles.songName]}>{song.name}</Text>
          <Text style={styles.text}>{song.artists[0].name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: metrics.smallMargin,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: metrics.smallMargin,
    alignItems: 'center',
    borderRadius: metrics.baseRadius,
  },
  leftBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: metrics.smallMargin,
  },
  text: {
    fontSize: 18,
    color: '#444',
  },
  points: {
    fontWeight: 'bold',
  },
  songName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    marginBottom: metrics.smallMargin,
  },
});
