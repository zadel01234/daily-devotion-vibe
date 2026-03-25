import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.container}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={styles.content}
          >
            <View style={styles.iconContainer}>
              <Sparkles size={40} color="var(--primary)" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Daily Devotional</Text>
              <Text style={styles.subtitle}>A Moment of Stillness</Text>
            </View>
          </motion.div>

          <View style={styles.loaderContainer}>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={styles.loaderTrack}
            >
              <motion.div 
                animate={{ x: [-120, 120] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                style={styles.loaderBar}
              />
            </motion.div>
          </View>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'var(--background)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    gap: 24,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  textContainer: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    fontWeight: '700',
    color: 'var(--primary)',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 3,
    color: 'var(--outline)',
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
  },
  loaderTrack: {
    height: 2,
    backgroundColor: 'rgba(var(--primary-rgb), 0.2)',
    overflow: 'hidden',
  },
  loaderBar: {
    width: 60,
    height: '100%',
    backgroundColor: 'var(--primary)',
  },
});
