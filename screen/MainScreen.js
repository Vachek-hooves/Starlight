import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const GAME_AREA_SIZE = Math.min(width, height) * 0.8;

const MainScreen = () => {
  const [stars, setStars] = useState([]);
  const [lines, setLines] = useState([]);
  const [selectedStar, setSelectedStar] = useState(null);
  const [score, setScore] = useState(100);

  useEffect(() => {
    initializeStars();
  }, []);

  const initializeStars = () => {
    const ursaMajorStars = [
      { id: 1, top: 50, left: 50, isConstellation: true },
      { id: 2, top: 70, left: 80, isConstellation: true },
      { id: 3, top: 100, left: 110, isConstellation: true },
      { id: 4, top: 130, left: 140, isConstellation: true },
      { id: 5, top: 120, left: 180, isConstellation: true },
      { id: 6, top: 90, left: 200, isConstellation: true },
      { id: 7, top: 60, left: 220, isConstellation: true },
    ];

    const randomStars = Array.from({ length: 8 }, (_, i) => ({
      id: i + 8,
      top: Math.random() * (GAME_AREA_SIZE - 20),
      left: Math.random() * (GAME_AREA_SIZE - 20),
      isConstellation: false,
    }));

    setStars([...ursaMajorStars, ...randomStars]);
  };

  const handleStarPress = (star) => {
    if (!selectedStar) {
      setSelectedStar(star);
    } else if (selectedStar.id !== star.id) {
      setLines([...lines, { start: selectedStar, end: star }]);
      setSelectedStar(null);
    }
  };

  const checkWin = () => {
    const correctConnections = [
      [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]
    ];

    const playerConnections = lines.map(line => 
      [line.start.id, line.end.id].sort((a, b) => a - b)
    );

    const isCorrect = correctConnections.every(conn => 
      playerConnections.some(playerConn => 
        playerConn[0] === conn[0] && playerConn[1] === conn[1]
      )
    );

    if (isCorrect) {
      alert('Congratulations! Youve correctly placed the Ursa Major constellation!');
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
    <View style={styles.container}>
      <Text style={styles.title}>Constellation Game: Ursa Major</Text>
      <View style={[styles.gameArea, { width: GAME_AREA_SIZE, height: GAME_AREA_SIZE }]}>
        {lines.map((line, index) => (
          <View
            key={index}
            style={[
              styles.line,
              {
                left: line.start.left,
                top: line.start.top,
                width: Math.sqrt(
                  Math.pow(line.end.left - line.start.left, 2) +
                  Math.pow(line.end.top - line.start.top, 2)
                ),
                transform: [{
                  rotate: `${Math.atan2(
                    line.end.top - line.start.top,
                    line.end.left - line.start.left
                  )}rad`
                }]
              }
            ]}
          />
        ))}
        {stars.map((star) => (
          <TouchableOpacity
            key={star.id}
            style={[
              styles.star,
              { top: star.top, left: star.left },
              star.isConstellation ? styles.constellationStar : styles.randomStar
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
        <TouchableOpacity style={styles.button} onPress={resetGame}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gameArea: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DDD',
  },
  star: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
  },
  constellationStar: {
    backgroundColor: 'blue',
  },
  randomStar: {
    backgroundColor: 'gray',
  },
  line: {
    height: 2,
    backgroundColor: 'blue',
    position: 'absolute',
    transformOrigin: 'left',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MainScreen;

