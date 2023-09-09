import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center">
          Welcome!
        </Text>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/landing-page.png")}
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View className="space-y-4">
          <TouchableOpacity
          onPress={()=>navigation.navigate('SignUp')}
            style={{ backgroundColor: "#7F8DED" }}
            className="py-3 bg-400 mx-7 rounded-2xl"
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center"> 
            <Text className="text-white font-bold">Already have an account?</Text>
            <Text> </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text className="font-bold" style={{color:'#7F8DED'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
