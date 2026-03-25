import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions,
  ScrollView,
  Pressable
} from 'react-native';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function BottomSheet({ isOpen, onClose, title, children }: BottomSheetProps) {
  const insets = useSafeAreaInsets();

  return (
    <AnimatePresence>
      {isOpen && (
        <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={[styles.backdrop, { backgroundColor: 'rgba(0,0,0,0.4)' }]}
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: SCREEN_HEIGHT }}
            animate={{ y: 0 }}
            exit={{ y: SCREEN_HEIGHT }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={[
              styles.sheet, 
              { 
                backgroundColor: 'var(--background)',
                paddingBottom: insets.bottom || 20
              }
            ]}
          >
            {/* Handle */}
            <View style={styles.handleContainer}>
              <View style={[styles.handle, { backgroundColor: 'rgba(var(--outline-variant-rgb), 0.3)' }]} />
            </View>

            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity 
                onPress={onClose}
                style={[styles.closeButton, { backgroundColor: 'rgba(var(--surface-variant-rgb), 0.4)' }]}
              >
                <X size={20} color="var(--outline)" />
              </TouchableOpacity>
            </View>

            {/* Content */}
            <ScrollView 
              style={styles.content}
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
            >
              {children}
            </ScrollView>
          </motion.div>
        </View>
      )}
    </AnimatePresence>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 60,
  },
  sheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 70,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    maxHeight: SCREEN_HEIGHT * 0.9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 20,
  },
  handleContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 16,
  },
  handle: {
    width: 48,
    height: 6,
    borderRadius: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--primary)',
  },
  closeButton: {
    padding: 8,
    borderRadius: 20,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
});
