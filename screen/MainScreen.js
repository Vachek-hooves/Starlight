import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';

const { width, height } = Dimensions.get('window');

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
      { id: 1, top: '10%', left: '20%', isConstellation: true },
      { id: 2, top: '15%', left: '30%', isConstellation: true },
      { id: 3, top: '25%', left: '40%', isConstellation: true },
      { id: 4, top: '35%', left: '50%', isConstellation: true },
      { id: 5, top: '30%', left: '60%', isConstellation: true },
      { id: 6, top: '20%', left: '70%', isConstellation: true },
      { id: 7, top: '15%', left: '80%', isConstellation: true },
    ];

    const randomStars = Array.from({ length: 8 }, (_, i) => ({
      id: i + 8,
      top: `${Math.random() * 70 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Constellation Game: Ursa Major</Text>
      <View style={styles.gameArea}>
        {lines.map((line, index) => (
          <View
            key={index}
            style={[
              styles.line,
              {
                left: line.start.left,
                top: line.start.top,
                width: Math.sqrt(
                  Math.pow(parseFloat(line.end.left) - parseFloat(line.start.left), 2) +
                  Math.pow(parseFloat(line.end.top) - parseFloat(line.start.top), 2)
                ) * width,
                transform: [{
                  rotate: `${Math.atan2(
                    parseFloat(line.end.top) - parseFloat(line.start.top),
                    parseFloat(line.end.left) - parseFloat(line.start.left)
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
      <View style={styles.infoContainer}>
        <Text style={styles.score}>Score: {score}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={checkWin}>
            <Text style={styles.buttonText}>Check Solution</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetGame}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e94560',
    textAlign: 'center',
    marginVertical: 20,
  },
  gameArea: {
    width: '100%',
    height: '80%',
    backgroundColor: '#16213e',
    position: 'relative',
  },
  star: {
    width: 12,
    height: 12,
    borderRadius: 6,
    position: 'absolute',
  },
  constellationStar: {
    backgroundColor: '#e94560',
  },
  randomStar: {
    backgroundColor: '#0f3460',
  },
  line: {
    height: 2,
    backgroundColor: '#e94560',
    position: 'absolute',
    transformOrigin: 'left',
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#0f3460',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e94560',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#e94560',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  resetButton: {
    backgroundColor: '#533483',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MainScreen;

