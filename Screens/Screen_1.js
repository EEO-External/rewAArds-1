
import React, { useState, useCallback, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";


function Screen_1() {
    const navigation = useNavigation();
    const [setLastName, lastName] =  useState("")
    const [setRecordLocator, recordLocator] =  useState("")
    const [setPassword, password] =  useState("")
 
return(
    <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: "100%", backgroundColor: "white" }}
          keyboardShouldPersistTaps="always"
        >
        <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Record Locator"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setRecordLocator(text)}
            value={recordLocator}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
           <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Screen_2")}
          >
            <Text style={styles.buttonTitle}>Join AAdvantage in One Click</Text>
          </TouchableOpacity>
          </KeyboardAwareScrollView>
    </View>
)


}

export default Screen_1;
