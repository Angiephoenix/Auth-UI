import React from "react";
import { View, Text } from "react-native";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {
    return(
        <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-white font-bold text-4xl text-center">
                    Let's Get Started!
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen;