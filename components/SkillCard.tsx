import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SkillCardProps {
  emoji: string;
  name: string;
}

export function SkillCard({ emoji, name }: SkillCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(30, 30, 30, 1.00)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 1.00)',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  emoji: {
    fontSize: 28,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFD700',
  },
});