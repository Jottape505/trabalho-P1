import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput   } from "react-native";
import { styles } from "./styles"
import { Feather, MaterialIcons } from '@expo/vector-icons';
import {Perfil} from "./Lion.png"


const App = () => {
return(
<View>
  <View style={styles.topBar}>
    <Image source={Perfil} style={styles.avatar} />
    <View style={styles.searchContainer}>
      <Feather 
        name="search" 
        size={16} 
        color="#000"
      />
      <TextInput placeholder="Buscar" style={styles.searchInput} />
    </View>
    <TouchableOpacity style={styles.icon}>
      <Feather 
        name="help-circle" 
        size={20} 
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.icon}>
      <Feather 
        name="message-square" 
        size={20} 
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.icon}>
      <Feather 
        name="bell" 
        size={20}
      />
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
      <MaterialIcons 
      name="pix" 
      size={24} 
      color="#fff" 
    />
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
      <Feather 
        name="bar-chart" 
        size={24} 
        color="#000" 
      />
      <Text style={styles.actionText}>
        Pagamentos
      </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.actionItem}>
      <Feather 
      name="credit-card" 
      size={24} 
      color="#000" 
    />
      <Text style={styles.actionText}>
        Adicionar cartão
      </Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.actionItem}>
      <Feather 
      name="archive" 
      size={24} 
      color="#000" 
    />
      <Text style={styles.actionText}>
         Guardar no cofrinho
      </Text>
    </View>
    </TouchableOpacity>
  </View>

</View>
);

}

export default App;