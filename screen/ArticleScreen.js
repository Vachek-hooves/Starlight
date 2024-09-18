import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {MainLayout} from '../components/layout';
import {useAppContext} from '../store/context';
import LinearGradient from 'react-native-linear-gradient';

const ArticleCard = ({theme, articles}) => (
  <LinearGradient
    colors={['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.05)']}
    style={styles.card}>
    <Text style={styles.cardTheme}>{theme}</Text>
    {articles.map(article => (
      <TouchableOpacity key={article.id} style={styles.articleItem}>
        <Text style={styles.articleTitle}>{article.title}</Text>
      </TouchableOpacity>
    ))}
  </LinearGradient>
);

const ArticleScreen = () => {
  const {articles, totalScore} = useAppContext();

  return (
    // <ImageBackground
    //   // source={require('../assets//img/bg/space.jpg')}
    //   style={styles.background}
    //   >
    <MainLayout>
      <SafeAreaView></SafeAreaView>
      <Text style={styles.totalScore}>Total Score: {totalScore}</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {articles.map(themeGroup => (
          <ArticleCard
            key={themeGroup.theme}
            theme={themeGroup.theme}
            articles={themeGroup.article}
          />
        ))}
      </ScrollView>
    </MainLayout>
    // </ImageBackground>
  );
};

export default ArticleScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 16,
  },
  totalScore: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginVertical: 10,
    textShadowColor: 'rgba(255, 215, 0, 0.75)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
  },
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  cardTheme: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#FFFFFF',
    textShadowColor: 'rgba(255,255,255,0.75)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 5,
  },
  articleItem: {
    marginBottom: 8,
  },
  articleTitle: {
    fontSize: 16,
    color: '#E0E0E0',
  },
});
