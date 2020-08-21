import { StyleSheet, Dimensions } from 'react-native'

 const styles = StyleSheet.create({   
    container: {
        flex: 1
    },
    materialHeader1: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.08,
        backgroundColor: "rgba(0,122,255,1)",
        alignSelf: "center"
      },
      footerItem:{
        flex:1,
        backgroundColor: "rgba(0,122,255,1)",
        borderColor: 'darkblue', 
        borderWidth: 0.2,
        height: Dimensions.get('window').height*0.08
      },
      footerWriting: {
        fontSize:20,
        alignSelf: "center",
        color: "white",
      },
      footerImage: {
        width: 25,
        height: 25,
        alignSelf: "center",
      },
      header:{
        fontSize: 30,
        alignSelf: "center"
      },
      button: {
        backgroundColor: "#007AFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 16,
        paddingLeft: 16,
        borderRadius: 5
      },
      caption: {
        color: "#fff",
        fontSize: 17,
        fontFamily: "roboto-500"
      }
 })
  
 export { styles } 