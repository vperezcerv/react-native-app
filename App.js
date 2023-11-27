import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {useState, useEffect} from 'react';

export default function App() {
  const [user, setUser] = useState("");

  useEffect(()=>{
    getBio('basarat').then(setUser);
  }, []);

  async function getBio(username){
    const url = `https://api.github.com/users/${username}`;

    const res=await fetch(url);
    const obj = await res.json();
    return {name: obj.name, bio: obj.bio}; 
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to this app that show github code</Text>
      {/* <Button title="Get user"/> */}
      <StatusBar style="auto" />{
        <View>
          <View style={styles.section}>
            <Text style={styles.heading}>Name</Text>
            <Text style={styles.paragraph}>{user.name}</Text>
          </View>
          <View>
            <Text style={styles.heading}>Bio</Text>
            <Text style={styles.paragraph}>{user.bio}</Text>
          </View>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
