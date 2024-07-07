import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { MenuItemsType } from "@/types";
import Button from "./Button";

const MenuItem = ({ icon, title }: MenuItemsType) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Button style={styles.iconContainer}>{icon}</Button>
      <Text style={[{ color: theme.colors.text }, styles.textStyle]}>
        {title}
      </Text>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 80,
    gap: 5,
  },
  iconContainer: {
    width: 60,
    backgroundColor: "rgba(0,0,0,0.1)",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  textStyle: {
    fontSize: 13,
    fontWeight: "500",
  },
});
