import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',

    },
    background: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 30,
    },
    title: {
        fontSize: 16,
        color: 'black',
        marginTop: 12,
        marginBottom: 3,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
    },
    logo: {
        flex: 1,
        height: 120,
        width: 120,
        alignSelf: "center",
        margin: 30,
        marginTop: 100,
        borderRadius: 15,
    },
    image: {

        height: '40%',
        width: '90%',
        alignSelf: "center",
        margin: 30
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
        paddingLeft: 16,
        borderColor: 'black',
        borderWidth: 0.7,
    },
    pickerInput: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        paddingTop: 15,
    },
    pagination: {
        marginBottom: 10,
        marginTop: 10,
        alignSelf: "center",
    },
    button: {
        backgroundColor: '#F2C94C',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: 'center',
    },
    googlebutton: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 2,
        borderColor: '#F2C94C',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: 'center',
    },
    applebutton: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#F2C94C',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    googleTitle: {
        color: '#F2C94C',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#F2C94C",
        fontWeight: "bold",
        fontSize: 16
    }
})