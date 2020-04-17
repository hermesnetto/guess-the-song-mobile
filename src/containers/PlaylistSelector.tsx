import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// import { useNavigation } from '../hooks/useNavigation';
import { Option } from '../components/Option';
import { metrics } from '../theme';

type Playlist = {
  id: string;
  name: string;
};

export const PlaylistSelector: React.FC = () => {
  const [playlists] = useState<Playlist[]>([
    { id: 'jazz-brasileiro', name: 'Jazz brasileiro' },
    { id: 'jazz-relax', name: 'Jazz relax' },
    { id: 'jazz-x-press', name: 'Jazz X-Press' },
    { id: 'coffee-table-jazz', name: 'Coffee table Jazz' },
  ]);
  // const navigation = useNavigation();

  return (
    <View style={styles.list}>
      <View style={styles.item}>
        <Option title="Random" />
      </View>

      {playlists.map(({ id, name }) => (
        <View style={styles.item} key={id}>
          <Option title={name} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {},
  item: {
    marginBottom: metrics.baseMargin,
  },
});
