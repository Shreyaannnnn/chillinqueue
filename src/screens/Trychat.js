import { View, Text,TextInput, SafeAreaView,Button, ImageBackground, Image, FlatList, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
// import { styled, withExpoSnack } from 'nativewind';
import TextField from '../components/TextField';
import LinearGradientButton from '../components/LinearGradientButton';
// const StyledView = styled(View);
// const StyledText = styled(Text);
import AntDesign from '@expo/vector-icons/AntDesign';
import io from 'socket.io-client';



const ChatScreen = () => {

    const [socket, setSocket] = useState(null)
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');


    useEffect(() => {
        // Connect to the Socket.IO server
        const newSocket = io('http://localhost:8000');
        // const newSocket = io('http://192.168.29.6:8000');
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
          };
        }, []);

    



    // const [messageInput, setMessageInput] = useState('');


    // useEffect(() => {
    //     socket.on('chat message', (data) => {
    //       setMessages((prevMessages) => [...prevMessages, data]);
    //     });
    //   }, []);
    
    //   const sendMessage = () => {
    //     if (messageInput.trim() !== '') {
    //       socket.emit('chat message', {
    //         text: messageInput,
    //         sender: 'You', // You can customize this
    //       });
    //       setMessageInput('');
    //     }
    //   };









    // useEffect(() => {
    //     socket.on('newMessage', (data) => {
    //       setMessages([...messages, data]);
    //     });
    //   }, [messages]);


      useEffect(() => {
        if (socket) {
          // Set up event listener for incoming messages
          socket.on('newMessage', (data) => {
            setMessages([...messages, data]);
          });
        }
      }, [socket]);



    
      const sendMessage = () => {
        if (inputText.trim() !== '') {
            console.log("send pressed");
          const newMessage = { text: inputText, incoming: false, timestamp: new Date() };
          socket.emit('newMessage', newMessage);
          setMessages([...messages, newMessage]);
          setInputText('');
          console.log(messages);
        }
      };

    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })



    function MessageBubble({ incoming, text, timestamp }) {
        return (
          <View style={[styles.messageBubble, incoming ? styles.incomingBubble : styles.outgoingBubble]}>
            <Text style={styles.messageText}>{text}</Text>
            <Text style={styles.timestamp}>{formatTimestamp(timestamp)}</Text>
          </View>
        );
      }
      
      function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        return `${date.getHours()}:${date.getMinutes()}`;
      }








    return (
        <SafeAreaView>
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require('../../assets/images/plainBackground.png')}>
                <View style={{ flex: 1, marginVertical: 100, alignItems: "center" }}>
                    


                {/* <View style={styles.container}>
                <FlatList
                    data={messages}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                    <View style={styles.messageContainer}>
                        <Text>{item.sender}: {item.text}</Text>
                    </View>
                    )}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    value={messageInput}
                    onChangeText={(text) => setMessageInput(text)}
                    />
                    <Button title="Send" onPress={sendMessage} />
                </View>
                </View> */}



                <View style={{ flex: 1, width:'90%' }}>
                <FlatList
                    data={messages}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                    <MessageBubble incoming={item.incoming} text={item.text} timestamp={item.timestamp} />
                    )}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                    placeholder="Type a message..."
                    />
                    <Button title="Send" onPress={sendMessage} />
                </View>
                </View>




                    
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ChatScreen
// export default withExpoSnack(Welcome)




// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3000');

// export default function App() {
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState('');

//   useEffect(() => {
//     socket.on('newMessage', (data) => {
//       setMessages([...messages, data]);
//     });
//   }, [messages]);

//   const sendMessage = () => {
//     if (inputText.trim() !== '') {
//       const newMessage = { text: inputText, incoming: false, timestamp: new Date() };
//       socket.emit('newMessage', newMessage);
//       setMessages([...messages, newMessage]);
//       setInputText('');
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={messages}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <MessageBubble incoming={item.incoming} text={item.text} timestamp={item.timestamp} />
//         )}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           value={inputText}
//           onChangeText={(text) => setInputText(text)}
//           placeholder="Type a message..."
//         />
//         <Button title="Send" onPress={sendMessage} />
//       </View>
//     </View>
//   );
// }

// function MessageBubble({ incoming, text, timestamp }) {
//   return (
//     <View style={[styles.messageBubble, incoming ? styles.incomingBubble : styles.outgoingBubble]}>
//       <Text style={styles.messageText}>{text}</Text>
//       <Text style={styles.timestamp}>{formatTimestamp(timestamp)}</Text>
//     </View>
//   );
// }

// function formatTimestamp(timestamp) {
//   const date = new Date(timestamp);
//   return `${date.getHours()}:${date.getMinutes()}`;
// }

const styles = StyleSheet.create({
  messageBubble: {
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    maxWidth: '70%',
  },
  incomingBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#EAEAEA',
  },
  outgoingBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 20,
  },
//   container:{
//     width:'100%'
//   }
});
