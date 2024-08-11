import * as React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const menuItemsToDisplay = [
  "Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta",
];

export default function MenuItems() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} indicatorStyle={"black"} horizontal={false}>
        <Text style={styles.headerText}>View Menu</Text>
        <Text style={styles.itemText}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        paddingHorizontal: 40, 
        paddingVertical: 40,
    },
    headerText: {
        fontSize: 34, 
        padding: 10, 
        color: "white", 
        flexWrap: "wrap",
    },
    itemText: {
        color: "#edefee", 
        fontSize: 28, 
        marginBottom: 20, 
        padding: 10, 
        textAlign: "auto",
    },
})