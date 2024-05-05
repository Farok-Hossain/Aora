import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className=" w-72 h-56"
        resizeMode="contain"
      />

      <Text className=" font-pmedium text-sm text-gray-100">{title}</Text>
      <Text className="text-xl text-white text-center font-psemibold mt-2">
        {subtitle}
      </Text>
    </View>
  );
};

export default EmptyState;
