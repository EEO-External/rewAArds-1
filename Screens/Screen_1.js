
import React, { useState, useCallback, useEffect } from "react";
import { View } from "react-native";
import styles from "Screens/styles.js"


export function Screen_1() {
 
return(
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
    </View>
)


}

export default Screen_1;
