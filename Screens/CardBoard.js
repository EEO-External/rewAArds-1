
import React, { useState, useCallback, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import card from "../assets/card.png"
import styles from "./styles";


function CardBoard() {
  const navigation = useNavigation();
  const [setLastName, lastName] =  useState("")
  const [setRecordLocator, recordLocator] =  useState("")
  const [setPassword, password] =  useState("")
  const [merchantLocationIdData, setData] = useState([]);
  const [customerNotificationData, setData1] = useState([]);
  const [merchantPaymentMethodByLocData, setData2] = useState([]);
  const [customerLocationData, setData3] = useState([]);
  ;

  var merchantLocationId = new Headers();
  merchantLocationId.append("Authorization", "OAuth oauth_consumer_key=\"BROZ0ZpHlz-0I_SL_TzfIjZDht9dOA_Tqo4Ht_Dq75293b78%21e6c0de455796494f8c357128f52384a40000000000000000\",oauth_signature_method=\"RSA-SHA256\",oauth_timestamp=\"1665327731\",oauth_nonce=\"NX80BPWKKTd\",oauth_version=\"1.0\",oauth_body_hash=\"47DEQpj8HBSa%2B%2FTImW%2B5JCeuQeRkm5NMpJWZG3hSuFU%3D\",oauth_signature=\"eRbupwLlIxlYjJhhV2IiE4hXldCM0kVUR3eq5WgtGrUHYjoqvapUlOcdBceiLD9e8mp9CXR9qWjVa7RS%2F6pHo%2B3AG3J%2BsCeKXXWltvWLfO01wHV0f7vAcW7pFrnDHBZQao4A%2FK2l2SS%2FDbczEy0SQSvlBzbPC3blCG7V%2BnDqzjfCjQKuJhoZ%2F1zhcHfHscwBHqKkHl65copa5vlbfMPOv5Rya6uG1RmbjLJChzWHgnrhXWUDJgWDdxVzQyjPJZjNAcoLVNEcnjPTe1ZOlvpYJJZdPf3cjZpQm3xIOOjCHF8ybKshAt%2FMPLKNPaZBZ9o83FaQSphPbkcPudjWgnqkmQ%3D%3D\"");
  fetch("https://sandbox.api.mastercard.com/location-intelligence/places-locator/places/300945305")
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  var customerNotification = new Headers();
  customerNotification.append("Authorization", "OAuth oauth_consumer_key=\"BROZ0ZpHlz-0I_SL_TzfIjZDht9dOA_Tqo4Ht_Dq75293b78%21e6c0de455796494f8c357128f52384a40000000000000000\",oauth_signature_method=\"RSA-SHA256\",oauth_timestamp=\"1665327731\",oauth_nonce=\"NX80BPWKKTd\",oauth_version=\"1.0\",oauth_body_hash=\"47DEQpj8HBSa%2B%2FTImW%2B5JCeuQeRkm5NMpJWZG3hSuFU%3D\",oauth_signature=\"eRbupwLlIxlYjJhhV2IiE4hXldCM0kVUR3eq5WgtGrUHYjoqvapUlOcdBceiLD9e8mp9CXR9qWjVa7RS%2F6pHo%2B3AG3J%2BsCeKXXWltvWLfO01wHV0f7vAcW7pFrnDHBZQao4A%2FK2l2SS%2FDbczEy0SQSvlBzbPC3blCG7V%2BnDqzjfCjQKuJhoZ%2F1zhcHfHscwBHqKkHl65copa5vlbfMPOv5Rya6uG1RmbjLJChzWHgnrhXWUDJgWDdxVzQyjPJZjNAcoLVNEcnjPTe1ZOlvpYJJZdPf3cjZpQm3xIOOjCHF8ybKshAt%2FMPLKNPaZBZ9o83FaQSphPbkcPudjWgnqkmQ%3D%3D\"");
  fetch("https://sandbox.api.mastercard.com/openapis/notifications/transactions")
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  var merchantPaymentMethodByLoc = new Headers();
  merchantPaymentMethodByLoc.append("Authorization", "OAuth oauth_consumer_key=\"BROZ0ZpHlz-0I_SL_TzfIjZDht9dOA_Tqo4Ht_Dq75293b78%21e6c0de455796494f8c357128f52384a40000000000000000\",oauth_signature_method=\"RSA-SHA256\",oauth_timestamp=\"1665327731\",oauth_nonce=\"NX80BPWKKTd\",oauth_version=\"1.0\",oauth_body_hash=\"47DEQpj8HBSa%2B%2FTImW%2B5JCeuQeRkm5NMpJWZG3hSuFU%3D\",oauth_signature=\"eRbupwLlIxlYjJhhV2IiE4hXldCM0kVUR3eq5WgtGrUHYjoqvapUlOcdBceiLD9e8mp9CXR9qWjVa7RS%2F6pHo%2B3AG3J%2BsCeKXXWltvWLfO01wHV0f7vAcW7pFrnDHBZQao4A%2FK2l2SS%2FDbczEy0SQSvlBzbPC3blCG7V%2BnDqzjfCjQKuJhoZ%2F1zhcHfHscwBHqKkHl65copa5vlbfMPOv5Rya6uG1RmbjLJChzWHgnrhXWUDJgWDdxVzQyjPJZjNAcoLVNEcnjPTe1ZOlvpYJJZdPf3cjZpQm3xIOOjCHF8ybKshAt%2FMPLKNPaZBZ9o83FaQSphPbkcPudjWgnqkmQ%3D%3D\"");
  fetch("https://sandbox.api.mastercard.com/merchants/v1/countrysubdivision?details=acceptance.paypass&country=USA&format=JSON")
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  var customerLocation = new Headers();
  customerLocation.append("Authorization", "OAuth oauth_consumer_key=\"BROZ0ZpHlz-0I_SL_TzfIjZDht9dOA_Tqo4Ht_Dq75293b78%21e6c0de455796494f8c357128f52384a40000000000000000\",oauth_signature_method=\"RSA-SHA256\",oauth_timestamp=\"1665327731\",oauth_nonce=\"NX80BPWKKTd\",oauth_version=\"1.0\",oauth_body_hash=\"47DEQpj8HBSa%2B%2FTImW%2B5JCeuQeRkm5NMpJWZG3hSuFU%3D\",oauth_signature=\"eRbupwLlIxlYjJhhV2IiE4hXldCM0kVUR3eq5WgtGrUHYjoqvapUlOcdBceiLD9e8mp9CXR9qWjVa7RS%2F6pHo%2B3AG3J%2BsCeKXXWltvWLfO01wHV0f7vAcW7pFrnDHBZQao4A%2FK2l2SS%2FDbczEy0SQSvlBzbPC3blCG7V%2BnDqzjfCjQKuJhoZ%2F1zhcHfHscwBHqKkHl65copa5vlbfMPOv5Rya6uG1RmbjLJChzWHgnrhXWUDJgWDdxVzQyjPJZjNAcoLVNEcnjPTe1ZOlvpYJJZdPf3cjZpQm3xIOOjCHF8ybKshAt%2FMPLKNPaZBZ9o83FaQSphPbkcPudjWgnqkmQ%3D%3D\"");
  fetch("https://www.googleapis.com/geolocation/v1/geolocate?key=our_key")
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  
return(
    <View style={styles.container}>
      <Text style={{justifyContent:'center', textalign: 'center', color: 'black',fontSize: 20, fontWeight: 'bold',}}>Your Personal Shopping Mall!</Text>
        <KeyboardAwareScrollView>
            <Text style={styles.heading}>5000 miles = $50 </Text><Text style={{ fontSize: 21,
    color: 'black',
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 12,
    fontWeight: '300'}}>You have 5000 miles{'\n'}as of this time, 10/08/22</Text>
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
      <TouchableOpacity onPress = {() => navigation.navigate("Inflight")}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Wifi</Text>
        <Text style={styles.price}>$ 10</Text>
      </View>
      </TouchableOpacity>
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
            onPress={() => navigation.navigate("Inflight")}
          >
            <Text style={styles.buttonTitle}>Purchase</Text>
          </TouchableOpacity>
         
          </KeyboardAwareScrollView>
    </View>
)
}

export default CardBoard;
