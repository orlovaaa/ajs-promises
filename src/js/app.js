import GameSavingLoader from './gameSavingLoader';
GameSavingLoader.load().then((saving) => {
    return saving;
  }, (error) => {
    throw new Error(error);
});