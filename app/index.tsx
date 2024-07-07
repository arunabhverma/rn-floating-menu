import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import FloatingMenu from "@/components/FloatingMenu";
import MenuItem from "@/components/MenuItem";

const Main = () => {
  const theme = useTheme();
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{
        uri: "https://i.pinimg.com/originals/c6/f8/ea/c6f8ea31a9ba7dae55542599a777e989.jpg",
      }}
    >
      <FloatingMenu>
        <View style={styles.container}>
          <View style={styles.rows}>
            <MenuItem
              icon={
                <Ionicons
                  name="film-outline"
                  size={28}
                  color={theme.colors.text}
                />
              }
              title={"Media"}
            />
            <MenuItem
              icon={
                <Ionicons
                  name="copy-outline"
                  size={28}
                  color={theme.colors.text}
                />
              }
              title={"Template"}
            />
            <MenuItem
              icon={
                <Ionicons
                  name="calendar-outline"
                  size={28}
                  color={theme.colors.text}
                />
              }
              title={"Event"}
            />
          </View>
          <View style={styles.rows}>
            <MenuItem
              icon={
                <Ionicons name="gift" size={28} color={theme.colors.text} />
              }
              title={"Celebrate"}
            />
            <MenuItem
              icon={
                <Ionicons
                  name="briefcase-outline"
                  size={28}
                  color={theme.colors.text}
                />
              }
              title={"Job"}
            />
            <MenuItem
              icon={
                <Ionicons
                  name="stats-chart"
                  size={28}
                  color={theme.colors.text}
                />
              }
              title={"Poll"}
            />
          </View>
          <View style={styles.rows}>
            <MenuItem
              icon={
                <Ionicons
                  name="folder-open"
                  size={28}
                  color={theme.colors.text}
                />
              }
              title={"Document"}
            />
            <MenuItem
              icon={<Ionicons name="cog" size={28} color={theme.colors.text} />}
              title={"Services"}
            />
            <View />
          </View>
        </View>
      </FloatingMenu>
    </ImageBackground>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  rows: {
    flexDirection: "row",
    gap: 20,
  },
});
