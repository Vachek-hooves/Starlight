import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const GAME_AREA_WIDTH = width * 0.9;
const GAME_AREA_HEIGHT = height * 0.7;
const STAR_SIZE = 16; // Increased by 30% from 12

const MainScreen = ({constellationId}) => {
  console.log(constellationId);
  const [stars, setStars] = useState([]);
  const [lines, setLines] = useState([]);
  const [selectedStar, setSelectedStar] = useState(null);
  const [score, setScore] = useState(100);

  useEffect(() => {
    initializeStars();
  }, []);

  const initializeStars = () => {
    const centerX = GAME_AREA_WIDTH * 0.5;
    const centerY = GAME_AREA_HEIGHT * 0.5;
    const scaleY = Math.min(GAME_AREA_WIDTH, GAME_AREA_HEIGHT) * 0.4; // Slightly reduced scale
    const scaleX = scaleY * 1.2; // Make the constellation 20% wider

    const constrainPosition = (x, y) => ({
      left: Math.max(
        STAR_SIZE / 2,
        Math.min(x, GAME_AREA_WIDTH - STAR_SIZE / 2),
      ),
      top: Math.max(
        STAR_SIZE / 2,
        Math.min(y, GAME_AREA_HEIGHT - STAR_SIZE / 2),
      ),
    });

    const ursaMajorStars = [
      {
        id: 1,
        ...constrainPosition(centerX - scaleX * 0.3, centerY - scaleY * 0.3),
        isConstellation: true,
      },
      {
        id: 2,
        ...constrainPosition(centerX - scaleX * 0.1, centerY - scaleY * 0.1),
        isConstellation: true,
      },
      {
        id: 3,
        ...constrainPosition(centerX + scaleX * 0.1, centerY + scaleY * 0.1),
        isConstellation: true,
      },
      {
        id: 4,
        ...constrainPosition(centerX + scaleX * 0.3, centerY + scaleY * 0.3),
        isConstellation: true,
      },
      {
        id: 5,
        ...constrainPosition(centerX + scaleX * 0.5, centerY + scaleY * 0.2),
        isConstellation: true,
      },
      {
        id: 6,
        ...constrainPosition(centerX + scaleX * 0.6, centerY),
        isConstellation: true,
      },
      {
        id: 7,
        ...constrainPosition(centerX + scaleX * 0.7, centerY - scaleY * 0.2),
        isConstellation: true,
      },
    ];

    const randomStars = Array.from({length: 13}, (_, i) => ({
      id: i + 8,
      ...constrainPosition(
        Math.random() * GAME_AREA_WIDTH,
        Math.random() * GAME_AREA_HEIGHT,
      ),
      isConstellation: false,
    }));

    setStars([...ursaMajorStars, ...randomStars]);
  };

  const handleStarPress = star => {
    if (!selectedStar) {
      setSelectedStar(star);
    } else if (selectedStar.id !== star.id) {
      setLines([...lines, {start: selectedStar, end: star}]);
      setSelectedStar(null);
    }
  };

  const checkWin = () => {
    const correctConnections = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
    ];

    const playerConnections = lines.map(line =>
      [line.start.id, line.end.id].sort((a, b) => a - b),
    );

    const isCorrect =
      correctConnections.every(conn =>
        playerConnections.some(
          playerConn => playerConn[0] === conn[0] && playerConn[1] === conn[1],
        ),
      ) && playerConnections.length === correctConnections.length;

    if (isCorrect) {
      alert(
        'Congratulations! Youve correctly placed the Ursa Major constellation!',
      );
    } else {
      alert('Not quite right. Try again!');
      setScore(Math.max(0, score - 10));
    }
  };

  const resetGame = () => {
    setLines([]);
    setSelectedStar(null);
    setScore(100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/img/bg/skybg.jpg')} // Adjust the path as needed
        style={styles.background}>
        <Text style={styles.title}>Constellation Game: Ursa Major</Text>
        <View
          style={[
            styles.gameArea,
            {width: GAME_AREA_WIDTH, height: GAME_AREA_HEIGHT},
          ]}>
          {lines.map((line, index) => {
            const startX = line.start.left + STAR_SIZE / 2;
            const startY = line.start.top + STAR_SIZE / 2;
            const endX = line.end.left + STAR_SIZE / 2;
            const endY = line.end.top + STAR_SIZE / 2;
            const length = Math.sqrt(
              Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2),
            );
            const angle = Math.atan2(endY - startY, endX - startX);

            return (
              <View
                key={index}
                style={[
                  styles.line,
                  {
                    left: startX,
                    top: startY,
                    width: length,
                    transform: [{rotate: `${angle}rad`}],
                  },
                ]}
              />
            );
          })}
          {stars.map(star => (
            <TouchableOpacity
              key={star.id}
              style={[
                styles.star,
                {top: star.top, left: star.left},
                star.isConstellation
                  ? styles.constellationStar
                  : styles.randomStar,
              ]}
              onPress={() => handleStarPress(star)}
            />
          ))}
        </View>
        <Text style={styles.score}>Score: {score}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={checkWin}>
            <Text style={styles.buttonText}>Check Solution</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.resetButton]}
            onPress={resetGame}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  gameArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  star: {
    width: STAR_SIZE,
    height: STAR_SIZE,
    borderRadius: STAR_SIZE / 2,
    position: 'absolute',
  },
  constellationStar: {
    backgroundColor: '#ffd700',
    shadowColor: '#ffd700',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  randomStar: {
    backgroundColor: '#ffffff',
    opacity: 0.7,
  },
  line: {
    height: 2,
    backgroundColor: 'rgba(255, 215, 0, 0.6)',
    position: 'absolute',
    transformOrigin: 'left',
    shadowColor: '#ffd700',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  score: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    gap: 10,
    paddingBottom: 50,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainScreen;
