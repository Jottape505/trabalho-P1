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
      paddingTop: 40,
    },
    // avatar: {
    // color: '#000',
    //   // width: 36,
    //   height: 36,
    //   borderRadius: 18,
    // },
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
      padding: 20,
      margin: 15,
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
    speedActions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 8,
      paddingHorizontal: 8,
    },
    actionItem: {
      backgroundColor: '#eee',
      borderRadius: 16,
      padding: 12,
      alignItems: 'center',
      width: 80,
    },
    actionItemSelected: {
      backgroundColor: '#00a680',
      borderRadius: 16,
      padding: 12,
      alignItems: 'center',
      width: 80,
    },
    actionText: {
      marginTop: 6,
      fontSize: 12,
    },
    actionTextSelected: {
      marginTop: 6,
      fontSize: 12,
      color: '#fff',
    },
    actionBadge: {
      fontSize: 10,
      color: '#000',
      backgroundColor: '#fff',
      paddingHorizontal: 6,
      marginTop: 4,
      borderRadius: 10,
    },
    cardSection: {
      backgroundColor: '#f1f1f1',
      marginHorizontal: 16,
      marginTop: 12,
      padding: 20,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    sectionTitle: {
      fontSize: 16,
    },
    payButton: {
      paddingHorizontal: 6,
      paddingVertical: 6,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 160,
    },
    payText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    
  });