import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet,
  Dimensions
} from 'react-native';
import { motion } from 'motion/react';
import { Plus, MoreHorizontal, Book, Sprout, ChevronDown } from 'lucide-react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Journal() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Personal Reflection</Text>
          <Text style={styles.headerTitle}>My Journal</Text>
        </View>

        {/* Bento Grid */}
        <View style={styles.grid}>
          {/* Quick Action Card */}
          <View style={styles.quickActionCard}>
            <View style={styles.quickActionTextContainer}>
              <Text style={styles.quickActionTitle}>Capture a Moment</Text>
              <Text style={styles.quickActionDescription}>
                Reflections are the seeds of wisdom. Let your thoughts flow.
              </Text>
            </View>
            <TouchableOpacity style={styles.newEntryButton}>
              <Plus size={20} color="var(--on-primary)" />
              <Text style={styles.newEntryText}>New Entry</Text>
            </TouchableOpacity>
          </View>

          {/* Entry 1 */}
          <TouchableOpacity style={styles.entryCardLarge}>
            <View style={styles.entryImageContainer}>
              <Image 
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQCHeRnTuTgF8TVb2cEGq9kmmgG2NV_yLWfKG8jNE_o1miubvo2bKTGsmMnYI6BXsUsB9o2I_VzunXqZbnaEXkX9Xt3KQw4my8d3m9nHPG2KKfeNk59nCr2feXUxhixWqwSjqF0kQ1Q7QsGivN80-aFNcqKOvyAT9MLjamtsFZJvqrCrogr4CbdO0zIw-pT-f05RHwKJ2cBNIG-ApxnnKUEDkrVExlBWpKYcqx6sFtGB4SjQGLzG1mpyKO5GTksTstmbR1fzOlbA8" }}
                style={styles.entryImage}
              />
            </View>
            <View style={styles.entryContent}>
              <View style={styles.entryHeader}>
                <View style={styles.dateBadge}>
                  <Text style={styles.dateBadgeText}>October 24, 2023</Text>
                </View>
                <MoreHorizontal size={16} color="rgba(var(--outline-rgb), 0.4)" />
              </View>
              <Text style={styles.entryTitleLarge}>Finding Stillness in the City</Text>
              <Text style={styles.entryExcerpt} numberOfLines={2}>
                Today I walked through the park at dawn. The fog was thick, obscuring the skyscrapers and for a moment, the world felt ancient...
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.secondaryGrid}>
            {/* Entry 2 */}
            <TouchableOpacity style={styles.entryCardSecondary}>
              <Text style={styles.secondaryDate}>October 21, 2023</Text>
              <Text style={styles.secondaryTitle}>Gratitude for Small Mercies</Text>
              <Text style={styles.secondaryExcerpt}>
                The warmth of tea, the weight of a good book, and the kindness of a stranger at the market.
              </Text>
              <View style={styles.tagContainer}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Daily</Text>
                </View>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Gratitude</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Entry 3 */}
            <TouchableOpacity style={styles.entryCardWhite}>
              <View style={styles.entryIconHeader}>
                <Book size={16} color="var(--tertiary)" />
                <Text style={styles.iconHeaderText}>October 18, 2023</Text>
              </View>
              <Text style={styles.whiteTitle}>A Prayer for Guidance</Text>
              <Text style={styles.whiteExcerpt}>
                Feeling at a crossroads today. Choosing the path of patience over the path of speed. It is difficult to wait when my heart wants to run.
              </Text>
            </TouchableOpacity>

            {/* Entry 4 */}
            <TouchableOpacity style={styles.entryCardWhite}>
              <View style={styles.entryIconHeader}>
                <Sprout size={16} color="#065f46" />
                <Text style={styles.iconHeaderText}>October 15, 2023</Text>
              </View>
              <Text style={styles.whiteTitle}>The Breath of the Woods</Text>
              <Text style={styles.whiteExcerpt}>
                Pine needles underfoot and the scent of damp earth. Nature doesn't hurry, yet everything is accomplished.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.pastReflectionsButton}>
            <Text style={styles.pastReflectionsText}>Past Reflections</Text>
            <ChevronDown size={16} color="var(--outline)" />
          </TouchableOpacity>
        </View>
      </motion.div>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 40,
  },
  headerLabel: {
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 2.5,
    color: 'var(--tertiary)',
    fontWeight: '700',
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 32,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    fontWeight: '700',
    color: 'var(--on-surface)',
  },
  grid: {
    gap: 16,
  },
  quickActionCard: {
    backgroundColor: 'rgba(var(--primary-container-rgb), 0.2)',
    borderRadius: 32,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(var(--primary-rgb), 0.05)',
    gap: 16,
  },
  quickActionTextContainer: {
    alignItems: 'center',
    gap: 4,
  },
  quickActionTitle: {
    fontSize: 20,
    fontFamily: 'Georgia',
    color: 'var(--on-primary-container)',
    fontWeight: '600',
  },
  quickActionDescription: {
    fontSize: 12,
    color: 'rgba(var(--on-primary-container-rgb), 0.7)',
    textAlign: 'center',
    maxWidth: 240,
    lineHeight: 18,
  },
  newEntryButton: {
    width: '100%',
    backgroundColor: 'var(--primary)',
    height: 56,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  newEntryText: {
    color: 'var(--on-primary)',
    fontSize: 14,
    fontWeight: '700',
  },
  entryCardLarge: {
    backgroundColor: 'var(--surface-container-low)',
    borderRadius: 32,
    overflow: 'hidden',
  },
  entryImageContainer: {
    aspectRatio: 16/9,
    width: '100%',
  },
  entryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  entryContent: {
    padding: 24,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateBadge: {
    backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  dateBadgeText: {
    fontSize: 8,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: 'var(--primary)',
    fontWeight: '700',
  },
  entryTitleLarge: {
    fontSize: 20,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--on-surface)',
    marginBottom: 8,
    fontWeight: '600',
  },
  entryExcerpt: {
    fontSize: 14,
    color: 'var(--on-surface-variant)',
    lineHeight: 22,
  },
  secondaryGrid: {
    gap: 16,
  },
  entryCardSecondary: {
    backgroundColor: 'rgba(var(--secondary-container-rgb), 0.2)',
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(var(--secondary-rgb), 0.05)',
  },
  secondaryDate: {
    fontSize: 8,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: 'var(--secondary)',
    fontWeight: '700',
    marginBottom: 12,
  },
  secondaryTitle: {
    fontSize: 18,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--on-secondary-container)',
    marginBottom: 8,
    fontWeight: '600',
  },
  secondaryExcerpt: {
    fontSize: 12,
    color: 'rgba(var(--on-secondary-container-rgb), 0.8)',
    lineHeight: 18,
    marginBottom: 16,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  tag: {
    backgroundColor: 'rgba(var(--surface-variant-rgb), 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 100,
  },
  tagText: {
    fontSize: 8,
    textTransform: 'uppercase',
    color: 'var(--on-surface-variant)',
    fontWeight: '700',
  },
  entryCardWhite: {
    backgroundColor: 'var(--surface-container-lowest)',
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(var(--outline-variant-rgb), 0.1)',
  },
  entryIconHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  iconHeaderText: {
    fontSize: 8,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: 'var(--outline)',
    fontWeight: '700',
  },
  whiteTitle: {
    fontSize: 18,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--on-surface)',
    marginBottom: 8,
    fontWeight: '600',
  },
  whiteExcerpt: {
    fontSize: 12,
    color: 'var(--on-surface-variant)',
    lineHeight: 18,
  },
  footer: {
    marginTop: 48,
    alignItems: 'center',
    paddingBottom: 32,
  },
  pastReflectionsButton: {
    alignItems: 'center',
    gap: 6,
  },
  pastReflectionsText: {
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 3,
    color: 'var(--outline)',
    fontWeight: '700',
  },
});
