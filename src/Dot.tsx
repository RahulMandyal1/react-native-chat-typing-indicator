import type React from 'react';
import { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useFrameCallback,
  withTiming,
  withDelay,
  withRepeat,
  withSequence,
  Easing,
  FadeInDown,
} from 'react-native-reanimated';
import type { AnimationPreset } from './types';

interface DotProps {
  index: number;
  size: number;
  color: string;
  margin: number;
  speed: number;
  amplitude: number;
  yOffset: number;
  preset: AnimationPreset;
  showEntering: boolean;
}

export const Dot: React.FC<DotProps> = ({
  index,
  size,
  color,
  margin,
  speed,
  amplitude,
  yOffset,
  preset,
  showEntering,
}) => {
  const counter = useSharedValue(0);
  const animValue = useSharedValue(0);

  // Wave/Bounce animation loop
  useFrameCallback(
    (frameInfo) => {
      if (preset === 'wave' || preset === 'bounce') {
        counter.value += speed;
      }
    },
    preset === 'wave' || preset === 'bounce'
  );

  // Pulse/Fade animation loop
  useEffect(() => {
    if (preset === 'pulse') {
      animValue.value = withDelay(
        index * 150,
        withRepeat(
          withSequence(
            withTiming(1, { duration: 400, easing: Easing.out(Easing.ease) }),
            withTiming(0, { duration: 400, easing: Easing.in(Easing.ease) })
          ),
          -1
        )
      );
    } else if (preset === 'fade') {
      animValue.value = withDelay(
        index * 150,
        withRepeat(
          withSequence(
            withTiming(1, { duration: 400, easing: Easing.inOut(Easing.ease) }),
            withTiming(0, { duration: 400, easing: Easing.inOut(Easing.ease) })
          ),
          -1
        )
      );
    }
  }, [preset, index, animValue]);

  const animatedStyle = useAnimatedStyle(() => {
    if (preset === 'wave') {
      const offset = index * 1;
      const y = yOffset + amplitude * Math.sin(counter.value - offset);
      return { transform: [{ translateY: y }] };
    }

    if (preset === 'bounce') {
      const offset = index * 1;
      const sinValue = Math.sin(counter.value - offset);
      const y = sinValue > 0 ? -amplitude * sinValue : 0;
      return { transform: [{ translateY: y }] };
    }

    if (preset === 'pulse') {
      return { transform: [{ scale: 1 + animValue.value * 0.4 }] };
    }

    if (preset === 'fade') {
      return { opacity: 0.3 + animValue.value * 0.7 };
    }

    return {};
  });

  const entering = showEntering
    ? FadeInDown.delay(index * 80)
        .springify()
        .damping(12)
    : undefined;

  return (
    <Animated.View entering={entering} style={{ marginHorizontal: margin / 2 }}>
      <Animated.View
        style={[
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color,
          },
          animatedStyle,
        ]}
      />
    </Animated.View>
  );
};
