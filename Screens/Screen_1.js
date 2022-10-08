import React, { useState, useContext } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ResponseType } from "expo-auth-session";

import { GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import * as Crypto from "expo-crypto";
import { Timestamp } from "firebase/firestore";

function LoginScreen() {

  React.useEffect(() => {
    const authListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("AppStack", { user: user, uid: user.uid });
      } else {
        navigation.navigate("Login");
      }
    });

    if (response?.type === "success") {
      const { authentication } = response;
    }
  }, [response]);

  return (
    <AuthProvider>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: "100%", backgroundColor: "white" }}
          keyboardShouldPersistTaps="always"
        >
          <Image
            style={styles.logo}
            source={require("../assets/gerald.JPG")}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => onLoginPress()}
          >
            <Text style={styles.buttonTitle}>Take Flight</Text>
          </TouchableOpacity>
         
          <View style={styles.footerView}>
            
          </View>
        </KeyboardAwareScrollView>
      </View>
    </AuthProvider>
  );
}

export default LoginScreen;
