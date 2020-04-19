import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { metrics, colors } from '../theme';
import { Song } from '../types';

type Props = {
  song: Song;
};

export const SongCard: React.FC<Props> = ({ song, children }) => {
  const { album, artists, name } = song;

  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{
          uri: album.images[0].url,
        }}
      />
      <View style={styles.cardContent}>
        <View style={styles.cardRow}>
          <Text style={{ ...styles.cardText, ...styles.cardTextBold }}>Band:</Text>
          <Text style={styles.cardText}>{artists[0].name}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={{ ...styles.cardText, ...styles.cardTextBold }}>Album:</Text>
          <Text style={styles.cardText}>{album.name}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={{ ...styles.cardText, ...styles.cardTextBold }}>Music:</Text>
          <Text style={styles.cardText}>{name}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={{ ...styles.cardText, ...styles.cardTextBold }}>Year:</Text>
          <Text style={styles.cardText}>1998</Text>
        </View>
        <View style={styles.childrenRow}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2B2B2B',
    borderRadius: metrics.xlargeRadius,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 300,
  },
  cardContent: {
    paddingHorizontal: metrics.baseMargin,
    paddingTop: metrics.baseMargin,
    paddingBottom: metrics.baseMargin,
  },
  cardRow: {
    flexDirection: 'row',
    marginBottom: metrics.smallMargin,
  },
  childrenRow: {
    marginTop: metrics.baseMargin,
  },
  cardTextBold: {
    fontWeight: 'bold',
    marginRight: metrics.smallMargin,
  },
  cardText: {
    color: colors.text,
    fontSize: 18,
  },
});
