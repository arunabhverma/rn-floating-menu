import {
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

const CustomBlurView = ({ bgColor }: { bgColor?: string }) => {
  const tint = useColorScheme();
  const { width, height } = useWindowDimensions();
  return (
    <BlurView
      style={[
        StyleSheet.absoluteFillObject,
        { width, height, backgroundColor: bgColor },
      ]}
      tint={tint === "dark" ? "systemMaterialDark" : "systemMaterialLight"}
      intensity={100}
    />
  );
};

export default CustomBlurView;
