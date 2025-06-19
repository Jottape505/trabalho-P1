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
    iconWrapper: {
      position: 'relative',
      padding: 6,
    },
    badge: {
      position: 'absolute',
      top: -4,
      right: -4,
      backgroundColor: 'red',
      borderRadius: 8,
      minWidth: 16,
      height: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
   
    balanceCard: {
      backgroundColor: '#00a680',
      borderRadius: 16,
      padding: 16,
      margin: 16,
    },
    balanceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    balanceTitle: {
      color: '#fff',
      fontWeight: 'bold',
    },
    linkText: {
      color: '#fff',
      textDecorationLine: 'underline',
    },
    balanceAmount: {
      color: '#fff',
      fontSize: 22,
      marginVertical: 8,
    },
    balanceSubtitle: {
      color: '#fff',
    },
    altCardButton: {
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
    quickActions: {
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
      padding: 12,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    sectionTitle: {
      fontSize: 14,
    },
    payButton: {
      backgroundColor: '#000',
      paddingHorizontal: 16,
      paddingVertical: 6,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    payText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 12,
      borderTopWidth: 1,
      borderTopColor: '#ddd',
    },
    navItem: {
      alignItems: 'center',
    },
    navItemSelected: {
      alignItems: 'center',
      backgroundColor: '#00a680',
      padding: 10,
      borderRadius: 30,
    },
    navTextSelected: {
      color: '#fff',
      fontSize: 12,
    },
  });