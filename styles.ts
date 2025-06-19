import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      gap: 10,
    },
    avatar: {
    color: '#000',
      width: 36,
      height: 36,
      borderRadius: 18,
    },
    searchContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f1f1f1',
      paddingHorizontal: 10,
      borderRadius: 20,
      marginHorizontal: 8,
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
      color: '#333',
    },
    icon : {
      position: 'relative',
      padding: 6,
    },
    cartaoSaldo: {
      backgroundColor: '#00a680',
      borderRadius: 16,
      padding: 16,
      margin: 16,
    },
    balanceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    saldoTitle: {
      color: '#fff',
      fontWeight: 'bold',
    },
    linkText: {
      color: '#fff',
      textDecorationLine: 'underline',
    },
    saldoConta: {
      color: '#fff',
      fontSize: 22,
      marginVertical: 8,
    },
    saldoSubtitle: {
      color: '#fff',
    },
    cardButton: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 50,
      marginTop: 12,
      alignItems: 'center',
    },
    altCardText: {
      color: '#000',
      fontWeight: '500',
    },
    
  });