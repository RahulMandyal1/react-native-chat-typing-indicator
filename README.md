# react-native-chat-typing-indicator

A lightweight, customizable typing indicator for React Native apps. Built with `react-native-reanimated` for smooth 60fps animations.

## Installation

```bash
npm install react-native-chat-typing-indicator react-native-reanimated
```

> **Note**: This package requires `react-native-reanimated`. After installing, make sure to follow the [Reanimated installation guide](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/) to complete the setup (e.g., adding the babel plugin).

## Usage

```tsx
import { TypingIndicator } from 'react-native-chat-typing-indicator';

function Example() {
  return (
    <View>
      <TypingIndicator />
    </View>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `ViewStyle` | - | Container styles |
| `dotColor` | `string` | `'#000'` | Dot color |
| `dotStyles` | `ViewStyle` | - | Custom styles for each dot wrapper |
| `dotRadius` | `number` | `2.5` | Dot radius in pixels |
| `dotMargin` | `number` | `3` | Space between dots |
| `dotCount` | `number` | `3` | Number of dots |
| `dotAmplitude` | `number` | `3` | Bounce height for wave/bounce animations |
| `dotSpeed` | `number` | `0.15` | Animation speed (higher = faster) |
| `dotY` | `number` | `0` | Vertical offset for dots |
| `animationPreset` | `AnimationPreset` | `'wave'` | Animation style: `'wave'`, `'bounce'`, `'pulse'`, `'fade'` |
| `showEnteringAnimation` | `boolean` | `true` | Show enter animation on mount |

## Examples

### Animation Presets

```tsx
// Wave (default) - dots animate in sequence
<TypingIndicator animationPreset="wave" />

// Bounce - all dots bounce together
<TypingIndicator animationPreset="bounce" />

// Pulse - dots scale up and down
<TypingIndicator animationPreset="pulse" />

// Fade - dots fade in and out
<TypingIndicator animationPreset="fade" />
```

### Custom Styling

```tsx
// Gray Wave
<TypingIndicator
  dotColor="#8E8E93"
  dotRadius={4}
  dotMargin={3}
  dotAmplitude={3}
/>

// Blue Bounce
<TypingIndicator
  dotColor="#1264A3"
  dotRadius={3}
  dotCount={3}
  animationPreset="bounce"
/>

// Large and slow
<TypingIndicator
  dotRadius={6}
  dotAmplitude={8}
  dotSpeed={0.08}
/>

// Fast animation
<TypingIndicator dotSpeed={0.25} />
```

### With Container Styling

```tsx
<TypingIndicator
  style={{
    backgroundColor: '#E8E8E8',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
  }}
  dotColor="#666"
/>
```

## Requirements

- React Native >= 0.64.0
- React >= 17.0.0
- react-native-reanimated >= 3.0.0

## License

MIT
