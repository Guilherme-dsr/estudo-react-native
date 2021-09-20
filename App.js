import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    ImageBackground,
    ScrollView, 
    View 
} from 'react-native';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text> Voltar </Text>
        <Text> Titulo </Text>
        <Text> Perfil </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}> Titulo </Text>
        <Text style={styles.postDescription}> A expressão Lorem ipsum em design gráfico... </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}> Titulo </Text>
        <Text style={styles.postDescription}> A expressão Lorem ipsum em design gráfico... </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}> Titulo </Text>
        <Text style={styles.postDescription}> A expressão Lorem ipsum em design gráfico... </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}> Titulo </Text>
        <Text style={styles.postDescription}> A expressão Lorem ipsum em design gráfico... </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}> Titulo </Text>
        <Text style={styles.postDescription}> A expressão Lorem ipsum em design gráfico... </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}> Titulo </Text>
        <Text style={styles.postDescription}> A expressão Lorem ipsum em design gráfico... </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}> Titulo </Text>
        <Text style={styles.postDescription}> A expressão Lorem ipsum em design gráfico... </Text>
      </View>

    </ScrollView> 
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#333',
    paddingTop:40,
  },
  header: {
    height:70,
    backgroundColor:'#fff',
    paddingHorizontal:30,
    paddingTop:20,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
  },
  postContainer: {
    marginHorizontal:20,
    marginVertical:30,
    padding:20,
    backgroundColor:'#fff',
    borderRadius:3,
  },
  postTitle: {
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20,
  },
  postDescription: {
    color:'#666'
  },
});

