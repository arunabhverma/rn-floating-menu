import React, { ReactNode, useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CustomBlurView from "./CustomBlurView";

const FloatingMenu = ({ children }: { children: ReactNode }) => {
  const { right, bottom } = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderRadius: isOpen ? withTiming(20) : withTiming(50),
      padding: isOpen ? 15 : 0,
    };
  }, [isOpen]);

  const iconRotation = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: isOpen ? withSpring("-45deg") : withSpring("0deg") },
      ],
    };
  });

  return (
    <Animated.View
      entering={FadeIn}
      style={[
        styles.mainContainerWrapper,
        {
          maxWidth: width - 2 * (width / 20 + right),
          bottom: height / 30 + bottom,
          right: width / 20 + right,
        },
      ]}
      layout={LinearTransition}
    >
      <Animated.View
        style={[styles.containerWrapper, animatedStyle]}
        layout={LinearTransition}
      >
        <CustomBlurView />
        {isOpen && (
          <Animated.View
            entering={FadeIn.delay(300)}
            exiting={FadeOut.duration(100)}
            layout={LinearTransition}
            style={styles.childrenWrapper}
          >
            {children}
          </Animated.View>
        )}
        <Animated.View
          layout={LinearTransition}
          style={[
            styles.iconWrapper,
            { backgroundColor: theme.colors.card },
            iconRotation,
          ]}
          onTouchEndCapture={() => setIsOpen((prev) => !prev)}
        >
          <CustomBlurView bgColor="rgba(100,100,100,0.5)" />
          <Ionicons name="add" size={35} color={theme.colors.text} />
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default FloatingMenu;

const styles = StyleSheet.create({
  iconWrapper: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  childrenWrapper: {
    paddingBottom: 30,
    flex: 1,
  },
  containerWrapper: {
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  mainContainerWrapper: {
    position: "absolute",
  },
});
