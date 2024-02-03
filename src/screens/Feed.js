import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  Pressable,
  View,
  Image,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import config from '@utils/config';
import {setGameData} from '@store/actions/games';

export default function Feed() {
  const [games, setGames] = useState([]);
  const navigation = useNavigation();

  // to fetch the data for the game
  const getGamesData = async () => {
    try {
      const data = await axios.get(
        `https://api.rawg.io/api/games?key=${config.rawgKey}`,
      );
      setGames(data.data.results);
      setGameData(data.data.results[0]);
    } catch (e) {
      console.log('e', e);
    }
  };

  useEffect(() => {
    getGamesData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Button title="open drawer" onPress={() => navigation.openDrawer()} />

      <FlatList
        data={games}
        refreshing={true}
        renderItem={({item, index}) => (
          <Pressable
            onPress={() => {
              navigation.push('modal', {
                gameId: item.id,
                gameName: item.name,
              });
            }}
            key={index}
            style={styles.gamesContainer}>
            <Image
              style={styles.gameImage}
              source={{uri: item.background_image}}
            />
            <View style={styles.gameInfoContainer}>
              <Text style={styles.gameInfo}> {item.name}</Text>
              <Text style={styles.gameRating}> {item.rating}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    color: '#F00',
    fontFamily: 'Workbench-Regular',
    marginBottom: 50,
  },
  gamesContainer: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    marginBottom: 20,
  },
  gameInfoContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'gray',
    flexGrow: 1,
  },
  gameImage: {
    width: 70,
    height: 70,
    objectFit: 'cover',
  },
  gameInfo: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Workbench-Regular',
    marginBottom: 10,
  },
  gameRating: {
    fontSize: 12,
    color: '#700124',
    fontFamily: 'Workbench-Regular',
  },
});
