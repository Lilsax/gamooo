import React from 'react'
import { 
    Text, 
    SafeAreaView, 
    StyleSheet
} from 'react-native'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>HOME</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 30,
      color:'#F00',
      fontFamily: 'Workbench-Regular'
    }
});