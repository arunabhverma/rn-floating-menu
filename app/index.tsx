import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Main = () => {
  const { right, bottom } = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderRadius: isOpen ? withTiming(20) : withTiming(50),
    };
  });

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Animated.View
        style={{
          //   backgroundColor: "red",
          justifyContent: "center",
          alignItems: "flex-end",
          //   borderRadius: isOpen ? 10 : 50,
          //   padding: isOpen ? 10 : 0,
          position: "absolute",
          bottom: height / 30 + bottom,
          right: width / 20 + right,
          //   overflow: "hidden",
        }}
        layout={LinearTransition}
      >
        <Animated.View
          style={[
            {
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "flex-end",
              // borderRadius: isOpen ? 10 : 50,
              // padding: isOpen ? 10 : 0,
              // position: "absolute",
              // bottom: height / 30 + bottom,
              // right: width / 20 + right,
              //   overflow: "hidden",
            },
            animatedStyle,
          ]}
          layout={LinearTransition}
        >
          {isOpen && (
            <Animated.View
              entering={FadeIn.delay(300)}
              exiting={FadeOut.duration(100)}
              layout={LinearTransition}
              style={{
                padding: 10,
                // backgroundColor: "blue",
                flex: 1,
                // overflow: "hidden",
              }}
            >
              <Text>Hello world! How are you ?</Text>
              <Text>Hello world! How are you ?</Text>
              <Text>Hello world! How are you ?</Text>
              <Text>Hello world! How are you ?</Text>
              <Text>Hello world! How are you ?</Text>
            </Animated.View>
          )}
          <Animated.View
            layout={LinearTransition}
            style={{
              padding: 10,
              backgroundColor: "red",
              borderRadius: 50,
              //   transform: [{ rotate: isOpen ? "45deg" : "0deg" }],
            }}
            onTouchEndCapture={() => setIsOpen((prev) => !prev)}
          >
            <Ionicons name="add" size={24} color={theme.colors.text} />
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
