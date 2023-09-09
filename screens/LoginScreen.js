import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: "#7F8DED" }}
            className="bg-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/login-page.png")}
            style={{ height: 200, width: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            style={{
              backgroundColor: "white",
              elevation: 4,
              shadowColor: "rgba(0, 0, 0, 0.3)",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 1,
              shadowRadius: 4,
            }}
            className="p-4 bg-gray-100 text-gray-400 rounded-2xl mb-3"
            value="angie@gmail.com"
            placeholder="Enter Email"
          />
          <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput
            style={{
              backgroundColor: "white",
              elevation: 4,
              shadowColor: "rgba(0, 0, 0, 0.3)",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 1,
              shadowRadius: 4,
            }}
            className="p-4 bg-gray-100 text-gray-400 rounded-2xl"
            secureTextEntry
            value="test1234"
            placeholder="Enter Password"
          />
          <TouchableOpacity className="flex items-end mb-5">
            <Text className="text-gray-700">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{ backgroundColor: "#7F8DED" }}
            className="py-3 bg-400 rounded-2xl"
          >
            <Text className="font-xl font-bold text-center text-gray-700">Login</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-xl text-gray-700 font-bold text-center py-5">
            OR
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/google.png')} className="w-10 h-10"/>
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/apple.png')} className="w-10 h-10"/>
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/facebook.png')} className="w-10 h-10"/>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-7"> 
            <Text className="text-gray-500 font-semibold">Don't have an account?</Text>
            <Text> </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                <Text className="font-bold" style={{color:'#7F8DED'}}>Sign up</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

export default LoginScreen;
