import type { StyleProp, ViewStyle } from 'react-native';

export type AnimationPreset = 'wave' | 'bounce' | 'pulse' | 'fade';

export interface TypingIndicatorProps {
  /**
   * Container styles
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Dot color
   * @default '#000'
   */
  dotColor?: string;

  /**
   * Dot styles
   */
  dotStyles?: StyleProp<ViewStyle>;

  /**
   * Dot radius
   * @default 2.5
   */
  dotRadius?: number;

  /**
   * Space between dots
   * @default 3
   */
  dotMargin?: number;

  /**
   * Number of dots
   * @default 3
   */
  dotCount?: number;

  /**
   * Animation preset
   * @default 'wave'
   */
  animationPreset?: AnimationPreset;

  /**
   * Dot amplitude (bounce height)
   * @default 3
   */
  dotAmplitude?: number;

  /**
   * Dot speed
   * @default 0.15
   */
  dotSpeed?: number;

  /**
   * Dot Y offset
   * @default 0
   */
  dotY?: number;

  /**
   * Show entering animation when component mounts
   * @default true
   */
  showEnteringAnimation?: boolean;
}
