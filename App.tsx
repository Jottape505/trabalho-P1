import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput   } from "react-native";
import { styles } from "./styles"
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Perfil from "./assets/Perfil/Cr7.jpg"



const App = () => {
return(
<View style={styles.container}>
  <View style={styles.topBar}>
    <Image source={Perfil} style={styles.avatar} />
    <View style={styles.searchContainer}>
      <Feather name="search" size={16} color="#000"/>
      <TextInput placeholder="Buscar" style={styles.searchInput} />
    </View>
    <TouchableOpacity style={styles.icon}>
      <Feather name="help-circle" size={20}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.icon}>
      <Feather name="message-square" size={20}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.icon}>
      <Feather name="bell" size={20}/>
    </TouchableOpacity>
  </View>

  <View style={styles.cartaoSaldo}>
    <View style={styles.balanceHeader}>
      <Text style={styles.saldoTitle}>
        Conta
      </Text>
      <Text style={styles.linkText}>
        Ver saldos e rendimentos 
      </Text>
    </View>
    <Text style={styles.saldoConta}>
      Saldo em conta
    </Text>
    <TouchableOpacity>
    <Feather name="eye" size={24} color="#fff" />
    </TouchableOpacity>
    <Text style={styles.saldoSubtitle}>
      Pode render 102% do CDI
    </Text>
    <TouchableOpacity style={styles.cardButton}>
      <Text style={styles.altCardText}>
        Use cartão de outro banco
      </Text>
    </TouchableOpacity>
  </View>

  <View style={styles.speedActions}>
    <TouchableOpacity>
    <View style={styles.actionItemSelected}>
      <MaterialIcons name="pix" size={24} color="#fff"/>
        <Text style={styles.actionTextSelected}>
          Pix
        </Text>
        <Text style={styles.actionBadge}>
          EM ATÉ 12X
        </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.actionItem}>
      <Feather name="bar-chart" size={24} color="#000"/>
      <Text style={styles.actionText}>
        Pagamentos
      </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.actionItem}>
    <MaterialIcons name="add-card" size={24} color="#000" />
      <Text style={styles.actionText}>
        Adicionar Cartão
      </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.actionItem}>
    <MaterialIcons name="monetization-on" size={24} color="#000" />
      <Text style={styles.actionText}>
         Guardar Dinheiro
      </Text>
    </View>
    </TouchableOpacity>
  </View>

  <TouchableOpacity>
    <View style={styles.cardSection}>
      <Text style={styles.sectionTitle}>
        Cartão
      </Text>
      <Feather name="credit-card" size={16} color="#000" />
    </View>
  </TouchableOpacity>
  <TouchableOpacity>
    <View style={styles.cardSection}>
      <Text style={styles.sectionTitle}>
        Empréstimos
      </Text>
      <MaterialIcons name="handshake" size={24} color="#000" />
    </View>
  </TouchableOpacity>
  <View style={styles.cardSection}>
    <TouchableOpacity style={styles.payButton}>
      <Text style={styles.sectionTitle}>
        Pagar com QR Code
      </Text>
      <Feather name="grid" size={16} color="#000" />
    </TouchableOpacity>
  </View>
  <TouchableOpacity>
    <View style={styles.cardSection}>
      <Text style={styles.sectionTitle}>
        Extratos
      </Text>
      <MaterialIcons name="sticky-note-2" size={24} color="#000" />
    </View>
  </TouchableOpacity>


  <View style={styles.bottomNav}>
    <TouchableOpacity>
      <View style={styles.navItemSelected}>
        <Feather name="home" size={20} color="#fff" />
        <Text style={styles.navTextSelected}>Início</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View style={styles.navItem}><Feather name="briefcase" size={20} />
        <Text>Carteira</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View style={styles.navItem}><Feather name="credit-card" size={20} />
        <Text>Cartão</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View style={styles.navItem}><Feather name="shopping-bag" size={20} />
        <Text>Shop</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View style={styles.navItem}><Feather name="menu" size={20} />
        <Text>Menu</Text>
      </View>
    </TouchableOpacity>
  </View>


</View>
);

}

export default App;