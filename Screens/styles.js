import { StyleSheet } from 'react-native';

export default StyleSheet.create({

container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 100

},
input: {
    height: 48,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 19,
    borderColor: 'black',
    borderWidth: 0.7,
    textAlign: 'center'
},
button: {
backgroundColor: 'blue',
marginLeft: 30,
marginRight: 30,
marginTop: 20,
height: 48,
borderRadius: 15,
alignItems: "center",
justifyContent: 'center',
},

buttonTitle: {
color: 'white',
fontSize: 16,
fontWeight: "bold"
},
card: {
    flex: 1,
    height: 200,
    width: 320,
    alignSelf: "center",
    margin: 30,
    marginTop: 40,
    borderRadius: 16,

},
itemFlex:{
    marginTop: 10,
    marginLeft: 22,
    flexDirection: "row",
    flexWrap: "wrap",
    flexBasis: "auto",
    flexGrow: 1,
},
itemCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
    width: 95,
    marginLeft: 10,
  },
  thumb: {
    height: 50,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: 50,
    marginLeft: 15,
    marginTop: 10,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  heading:{
    fontSize: 21,
    color: 'black',
    marginTop: 12,

    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
    fontWeight: 'bold'
  }



})