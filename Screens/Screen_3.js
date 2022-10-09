
import React, { useState, useCallback, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";


function Screen_3() {
    const navigation = useNavigation();
    const [setLastName, lastName] =  useState("")
    const [setRecordLocator, recordLocator] =  useState("")
    const [setPassword, password] =  useState("")
 
return(
    <View style={styles.container}>
        <KeyboardAwareScrollView>
            <Text>Screen_3</Text>
         
        </KeyboardAwareScrollView>
    </View>
)


}

export default Screen_3;
