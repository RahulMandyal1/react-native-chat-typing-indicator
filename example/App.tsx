import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { TypingIndicator } from '../src';
import { useState } from 'react';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionContent}>{children}</View>
    </View>
  );
}

function InteractiveSection({ 
  title, 
  animationPreset,
  initialSpeed = 0.15 
}: { 
  title: string; 
  animationPreset?: 'wave' | 'bounce' | 'pulse' | 'fade';
  initialSpeed?: number;
}) {
  const [speed, setSpeed] = useState(initialSpeed);

  return (
    <Section title={title}>
      <View style={styles.interactiveContainer}>
        <View style={styles.bubble}>
          <TypingIndicator animationPreset={animationPreset} dotSpeed={speed} />
        </View>
        <View style={styles.controls}>
          <Text style={styles.label}>Speed: {speed.toFixed(2)}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0.05}
            maximumValue={0.5}
            step={0.01}
            value={speed}
            onValueChange={setSpeed}
            minimumTrackTintColor="#1a1a1a"
            maximumTrackTintColor="#000000"
            thumbTintColor="#1a1a1a"
          />
        </View>
      </View>
    </Section>
  );
}

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar style="dark" />

      <Text style={styles.title}>react-native-chat-typing-indicator</Text>
      <Text style={styles.subtitle}>Animation Presets</Text>

      <InteractiveSection title="Wave (Default)" animationPreset="wave" />
      <InteractiveSection title="Bounce" animationPreset="bounce" />
      <InteractiveSection title="Pulse" animationPreset="pulse" />
      <InteractiveSection title="Fade" animationPreset="fade" />

      <Section title="Custom Sizes">
        <View style={styles.row}>
          <View style={styles.bubble}>
            <TypingIndicator dotRadius={2} dotAmplitude={2} />
          </View>
          <View style={styles.bubble}>
            <TypingIndicator dotRadius={4} dotAmplitude={4} />
          </View>
          <View style={styles.bubble}>
            <TypingIndicator dotRadius={6} dotAmplitude={5} />
          </View>
        </View>
      </Section>

      <Section title="Colors (Wave)">
        <View style={styles.row}>
          <View style={[styles.bubble, { backgroundColor: '#000' }]}>
            <TypingIndicator dotColor="#FFF" />
          </View>
          <View style={[styles.bubble, { backgroundColor: '#5865F2' }]}>
            <TypingIndicator dotColor="#FFF" />
          </View>
          <View style={[styles.bubble, { backgroundColor: '#25D366' }]}>
            <TypingIndicator dotColor="#FFF" />
          </View>
        </View>
      </Section>

      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  sectionContent: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
  },
  interactiveContainer: {
    alignItems: 'center',
    gap: 12,
  },
  controls: {
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    fontVariant: ['tabular-nums'],
  },
  slider: {
    width: '100%',
    height: 40,
  },
  presetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  presetLabel: {
    fontSize: 15,
    color: '#333',
  },
  bubble: {
    backgroundColor: '#E8E8E8',
    borderRadius: 18,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footer: {
    height: 40,
  },
});
