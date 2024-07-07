import {
  Platform,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { useTheme } from "@react-navigation/native";

const CustomBlurView = ({ bgColor }: { bgColor?: string }) => {
  const tint = useColorScheme();
  const theme = useTheme();

  const { width, height } = useWindowDimensions();
  return (
    <BlurView
      style={[
        StyleSheet.absoluteFillObject,
        {
          width,
          height,
          backgroundColor:
            Platform.OS === "android" ? theme.colors.card : bgColor,
        },
      ]}
      tint={tint === "dark" ? "systemMaterialDark" : "systemMaterialLight"}
      intensity={Platform.OS === "android" ? 0 : 100}
    />
  );
};

export default CustomBlurView;
