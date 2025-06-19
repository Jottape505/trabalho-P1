import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput   } from "react-native";
import { styles } from "./styles"
import { Feather } from '@expo/vector-icons';
import {Perfil} from "./Lion.png"


const App = () => {
return(
<View>
<View style={styles.topBar}>
        <Image source={Perfil} style={styles.avatar} />
        <View style={styles.searchContainer}>
          <Feather name="search" size={16} color="#000" />
          <TextInput placeholder="Buscar" style={styles.searchInput} />
        </View>
        <TouchableOpacity style={styles.iconWrapper}>
          <Feather name="help-circle" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Feather name="message-square" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Feather name="bell" size={20} />
        </TouchableOpacity>
</View>


</View>
);

}

export default App;