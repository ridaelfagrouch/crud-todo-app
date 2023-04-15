
import { StyleSheet } from 'react-native';


const COLORS = { primary: '#000', secondary: '#fff' };
const styles = StyleSheet.create({
    SafeArea: {
      flex: 1,
      backgroundColor: COLORS.primary,
    },
  
    header: {
      padding: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: COLORS.secondary,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      elevation: 20,
    },
  
    footer: {
      position: 'absolute',
      bottom: 0,
      color: COLORS.secondary,
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 20,
      alignItems: 'center',
    },
  
    inputContainer: {
      backgroundColor: COLORS.secondary,
      flex: 1,
      elevation: 40,
      height: 50,
      marginVertical: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 30,
    },
  
    IconContainer: {
      backgroundColor: COLORS.secondary,
      height: 50,
      width: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 40,
      marginLeft: 20,
    },
  
    ListItem: {
      padding: 20,
      backgroundColor: COLORS.secondary,
      flexDirection: 'row',
      elevation: 12,
      borderRadius: 10,
      marginVertical: 10,
      justifyContent: 'space-between',
      borderWidth: 2,
    },
  
    actionIcon: {
      height: 30,
      width: 30,
      borderWidth: 2,
      borderColor: COLORS.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 5,
      borderRadius: 50,
    },
  
    modal: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
  
    modalContent: {
      backgroundColor: 'white',
      width: '50%',
      height: 60,
      padding: 20,
      borderRadius: 10
    }
  });
  
  export default styles;