import type React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dot } from './Dot';
import type { TypingIndicatorProps } from './types';

/**
 * TypingIndicator component.
 * Displays a set of animated dots to indicate typing activity.
 */
export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  style,
  dotColor = '#000',
  dotStyles,
  dotRadius = 2.5,
  dotMargin = 3,
  dotCount = 3,
  animationPreset = 'wave',
  dotSpeed = 0.15,
  dotAmplitude = 3,
  dotY = 0,
  showEnteringAnimation = true,
}) => {
  const dotSize = dotRadius * 2;

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: dotCount }).map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: Dots are static and have no unique IDs
        <View key={index} style={dotStyles}>
          <Dot
            index={index}
            size={dotSize}
            color={dotColor}
            margin={dotMargin}
            speed={dotSpeed}
            amplitude={dotAmplitude}
            yOffset={dotY}
            preset={animationPreset}
            showEntering={showEnteringAnimation}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
