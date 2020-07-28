import React from 'react'
import { WebView } from 'react-native-webview' //não funciona na versão atual do expo em android

function Profile({ route }) {
  const { github_username } = route.params

  return <WebView style={{ flex: 1 }} source={{ uri: `https://github/${github_username}` }} />
}

export default Profile