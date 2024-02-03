import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import config from '../utils/config';

export default function Model() {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  const {params} = route;

  // reading data from redux.
  const _game = useSelector(state => state);

  // read more about this
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.gameName,
    });
  }, []);

  // get the iinfo of the data
  const getGamesInfo = async () => {
    const gameData = await axios.get(
      `https://api.rawg.io/api/games/${params.gameId}?key=${config.rawgKey}`,
    );

    setGame(gameData.data);
    setLoading(false);
  };
  useEffect(() => {
    console.log('_game', _game);
    getGamesInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ImageBackground
          style={{flex: 1, flexGrow: 1, flexShrink: 1}}
          source={{uri: game.background_image}}>
          <Button onPress={() => navigation.goBack()} title="Go Back" />
        </ImageBackground>
      )}
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
  },
});
