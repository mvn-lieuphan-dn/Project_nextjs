// import MainLayout from "@app/components/layouts/MainLayout";
// import { useEffect, useState } from "react";
// // import firebase from "./../../fb/clientApp";

const Chat = () => {
  //   const [messages, setMessages] = useState([]);
  //   const [newMessage, setNewMessage] = useState("");
  //   //   const messagesRef = firebase.firestore().collection("messages");
  //   useEffect(() => {
  //     //     // Lắng nghe các tin nhắn mới
  //     //     const unsubscribe = messagesRef
  //     //       .orderBy("timestamp")
  //     //       .onSnapshot((snapshot) => {
  //     //         const updatedMessages = snapshot.docs.map((doc) => doc.data());
  //     //         setMessages(updatedMessages);
  //     //       });
  //     //     return () => unsubscribe();
  //     setMessages([]);
  //   }, []);
  //   const sendMessage = () => {
  //     // messagesRef.add({
  //     //   text: newMessage,
  //     //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //     // });
  //     setNewMessage("");
  //   };
  //   return (
  //     <MainLayout>
  //       <ul>
  //         {messages.map((message, index) => (
  //           <li key={index}>{message?.text}</li>
  //         ))}
  //       </ul>
  //       <input
  //         type="text"
  //         value={newMessage}
  //         onChange={(e) => setNewMessage(e.target.value)}
  //       />
  //       <button onClick={sendMessage}>Send</button>
  //     </MainLayout>
  //   );
};

export default Chat;
