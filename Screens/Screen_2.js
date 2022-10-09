
import React, { useState, useCallback, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import card from "../assets/card.png"
import styles from "./styles";


function Screen_2() {
    const navigation = useNavigation();
    const [setLastName, lastName] =  useState("")
    const [setRecordLocator, recordLocator] =  useState("")
    const [setPassword, password] =  useState("")
 
return(
    <View style={styles.container}>
        <KeyboardAwareScrollView>
            <Text style={styles.heading}>5000 miles = $50 </Text><Text style={{ fontSize: 21,
    color: 'black',
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 12,
    fontWeight: '300'}}>You have 5000 miles{'\n'}as of 10/08/22</Text>
        <Image
            style={styles.card}
            source={require("../assets/card.png")}
          />
<Text style={styles.heading}>In-Flight Purchase</Text>
<View style={styles.itemFlex}>

<TouchableOpacity style={styles.itemCard} >
      <Image
        style={styles.thumb}
        source={require("../assets/wifi.png")}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Wifi</Text>
        <Text style={styles.price}>$ 10</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemCard} >
      <Image
        style={styles.thumb}
        source={require("../assets/potato-chips.png")}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Chips</Text>
        <Text style={styles.price}>$ 10</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemCard} >
      <Image
        style={styles.thumb}
        source={require("../assets/wine.png")}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Wine</Text>
        <Text style={styles.price}>$ 10</Text>
      </View>
    </TouchableOpacity>
</View>
<Text style={styles.heading}>Stores near you</Text>
<View style={styles.itemFlex}>

<TouchableOpacity style={styles.itemCard} >
      <Image
        style={styles.thumb}
        source={require("../assets/wifi.png")}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Chick-fil-a</Text>
        
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemCard} >
      <Image
        style={styles.thumb}
        source={require("../assets/potato-chips.png")}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Chiptole</Text>
        
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemCard} >
      <Image
        style={styles.thumb}
        source={require("../assets/wine.png")}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>McD</Text>
        
      </View>
    </TouchableOpacity>
</View>

        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Screen_3")}
          >
            <Text style={styles.buttonTitle}>Purchase</Text>
          </TouchableOpacity>
         
          </KeyboardAwareScrollView>
    </View>
)


}

export default Screen_2;
