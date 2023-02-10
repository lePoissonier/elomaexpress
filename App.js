import React, { useState } from 'react'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Switch, Text, View, TextInput, setInput } from "react-native";
import { useColorScheme } from "nativewind";
import ProductsList from "./components/ProductsList";
import { products } from './products';

export default function App() {

  const [input, setInput] = useState("");
  console.log(input);

  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#dcfae4] dark:bg-[#05443f]">
      <View className={"flex-row w-full gap-1 pt-10"}>
        <Text className="dark:text-white text-2xl font-bold pl-3">
          Dark Mode
        </Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <View style={{margin:10, padding:10, flexDirection: "row", width:"90%", backgroundColor:"#F8FFFD", borderRadius:10, alignItems:"center",}}>
                <TextInput 
                    value={input} 
                    onChangeText={(text) => setInput(text)}
                    style={{ fontSize: 15 }} 
                    placeholder="recherche" />
            </View>
      <ProductsList />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
