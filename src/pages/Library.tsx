import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  TextInput,
  Dimensions
} from 'react-native';
import { motion } from 'motion/react';
import { 
  Search, 
  Clock, 
  BookOpen, 
  Droplets, 
  Sun, 
  Zap, 
  MoreHorizontal, 
  Calendar, 
  ArrowRight, 
  Heart 
} from 'lucide-react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Library() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={styles.content}
      >
        {/* Search & Header */}
        <View style={styles.headerSection}>
          <View style={styles.headerText}>
            <Text style={styles.headerLabel}>Archives</Text>
            <Text style={styles.headerTitle}>Spiritual Library</Text>
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.searchIcon}>
              <Search size={16} color="var(--outline)" />
            </View>
            <TextInput 
              style={styles.searchInput}
              placeholder="Search passages, topics, or dates..."
              placeholderTextColor="rgba(var(--outline-rgb), 0.6)"
            />
          </View>
        </View>

        {/* Recently Read */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recently Read</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.recentCard}>
            <View>
              <Text style={styles.recentLabel}>Yesterday</Text>
              <Text style={styles.recentTitle}>Psalm 23: The Good Shepherd</Text>
              <Text style={styles.recentQuote} numberOfLines={2}>
                "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures..."
              </Text>
            </View>
            <View style={styles.recentFooter}>
              <Clock size={14} color="var(--primary)" />
              <Text style={styles.recentFooterText}>8 Min Reflection</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.recentList}>
            <TouchableOpacity style={styles.listItem}>
              <View style={[styles.listIcon, { backgroundColor: 'var(--secondary-container)' }]}>
                <BookOpen size={20} color="var(--on-secondary-container)" />
              </View>
              <View>
                <Text style={styles.listDate}>Monday, Oct 23</Text>
                <Text style={styles.listItemTitle}>The Still Small Voice</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem}>
              <View style={[styles.listIcon, { backgroundColor: 'rgba(var(--tertiary-container-rgb), 0.2)' }]}>
                <Droplets size={20} color="var(--tertiary)" />
              </View>
              <View>
                <Text style={styles.listDate}>Sunday, Oct 22</Text>
                <Text style={styles.listItemTitle}>Streams in the Desert</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* By Topic */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>By Topic</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.topicScroll}
          >
            {[
              { label: 'Love', icon: Heart, color: 'rgba(16, 185, 129, 0.1)', textColor: '#065f46' },
              { label: 'Peace', icon: Droplets, color: 'rgba(120, 113, 108, 0.1)', textColor: 'var(--secondary)' },
              { label: 'Faith', icon: Sun, color: 'rgba(59, 130, 246, 0.1)', textColor: 'var(--tertiary)' },
              { label: 'Hope', icon: Zap, color: 'rgba(245, 158, 11, 0.1)', textColor: '#92400e' },
              { label: 'More', icon: MoreHorizontal, color: 'rgba(120, 113, 108, 0.1)', textColor: 'var(--on-surface-variant)' },
            ].map((topic) => (
              <TouchableOpacity 
                key={topic.label}
                style={[styles.topicCard, { backgroundColor: topic.color }]}
              >
                <topic.icon size={24} color={topic.textColor} />
                <Text style={[styles.topicLabel, { color: topic.textColor }]}>{topic.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* By Date */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>By Date</Text>
            <TouchableOpacity style={styles.calendarButton}>
              <Calendar size={14} color="var(--on-surface)" />
              <Text style={styles.calendarText}>Calendar</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.dateList}>
            {[
              { date: '24', month: 'OCT', title: 'Morning Mercies', quote: '"His compassions fail not; they are new every morning..." ' },
              { date: '23', month: 'OCT', title: 'Strength for the Weary', quote: '"But they that wait upon the Lord shall renew their strength..." ' },
              { date: '22', month: 'OCT', title: 'Walking in Wisdom', quote: '"If any of you lack wisdom, let him ask of God..." ', dimmed: true },
            ].map((entry, i) => (
              <TouchableOpacity key={i} style={[styles.dateItem, entry.dimmed && { opacity: 0.6 }]}>
                <View style={styles.dateColumn}>
                  <Text style={styles.monthLabel}>{entry.month}</Text>
                  <Text style={styles.dayLabel}>{entry.date}</Text>
                </View>
                <View style={styles.dateContent}>
                  <View style={styles.dateTextContainer}>
                    <Text style={styles.dateEntryTitle}>{entry.title}</Text>
                    <Text style={styles.dateEntryQuote} numberOfLines={1}>{entry.quote}</Text>
                  </View>
                  <ArrowRight size={16} color="var(--outline)" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Seasonal Archive */}
        <View style={styles.seasonalSection}>
          <Image 
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5vnv7nKjDrTmgEJfZE9rVgTbkDZJDZZaS6W-oVCJGOZDlFjwMVliEerWLQw5K7kSP_-CR82mUl3l31xVpOxdH8eNgP9oq2cgbZKwC4e33N7OpJ1jxCCiLEuxYKSKM-DMvZerBhQFL_74WfVAqgw9LreR_jk9b5VxssyHL5bo40LwHr61paAFCEB97aNfL0fOPkPOhbxSlE2nziEduJiK80HgPCFh5V8sJDKnFUS3kzKY6FTN1_jHEqh8LYUMLTEDxwird6JSaChI" }}
            style={styles.seasonalImage}
          />
          <View style={styles.seasonalOverlay} />
          <View style={styles.seasonalContent}>
            <Text style={styles.seasonalLabel}>Special Collection</Text>
            <Text style={styles.seasonalTitle}>Spring Renewal Archive</Text>
            <TouchableOpacity style={styles.seasonalButton}>
              <Text style={styles.seasonalButtonText}>Explore Vol. 1</Text>
            </TouchableOpacity>
          </View>
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
  headerSection: {
    marginBottom: 40,
  },
  headerText: {
    marginBottom: 24,
  },
  headerLabel: {
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 2.5,
    color: 'var(--tertiary)',
    fontWeight: '700',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: 'var(--on-surface)',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'var(--surface-container-low)',
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 56,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: 'var(--on-surface)',
  },
  section: {
    marginBottom: 48,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    fontWeight: '600',
    color: 'var(--primary)',
  },
  viewAll: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: 'var(--outline)',
    fontWeight: '700',
  },
  recentCard: {
    backgroundColor: 'var(--surface-container-lowest)',
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(var(--outline-variant-rgb), 0.1)',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  recentLabel: {
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: 'var(--primary)',
    fontWeight: '700',
    marginBottom: 12,
  },
  recentTitle: {
    fontSize: 20,
    fontFamily: 'Georgia',
    fontWeight: '600',
    color: 'var(--on-surface)',
    marginBottom: 8,
  },
  recentQuote: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'var(--on-surface-variant)',
    lineHeight: 22,
  },
  recentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    gap: 8,
  },
  recentFooterText: {
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: 'var(--on-surface)',
    fontWeight: '700',
  },
  recentList: {
    gap: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'var(--surface-container-low)',
    padding: 16,
    borderRadius: 24,
    gap: 16,
  },
  listIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listDate: {
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: -0.5,
    color: 'var(--outline)',
    fontWeight: '700',
    marginBottom: 2,
  },
  listItemTitle: {
    fontSize: 16,
    fontFamily: 'Georgia',
    color: 'var(--on-surface)',
    fontWeight: '600',
  },
  topicScroll: {
    gap: 12,
    paddingRight: 24,
  },
  topicCard: {
    width: 110,
    aspectRatio: 4/5,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  topicLabel: {
    fontSize: 18,
    fontFamily: 'Georgia',
    marginTop: 12,
  },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'var(--surface-container-high)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 8,
  },
  calendarText: {
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: 'var(--on-surface)',
    fontWeight: '700',
  },
  dateList: {
    gap: 12,
  },
  dateItem: {
    flexDirection: 'row',
    gap: 16,
  },
  dateColumn: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(var(--outline-variant-rgb), 0.2)',
    paddingVertical: 4,
  },
  monthLabel: {
    fontSize: 8,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: 'var(--outline)',
    fontWeight: '700',
  },
  dayLabel: {
    fontSize: 24,
    fontFamily: 'Georgia',
    fontWeight: '700',
    color: 'var(--on-surface)',
  },
  dateContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'var(--surface-container-low)',
    borderRadius: 24,
    padding: 16,
    gap: 12,
  },
  dateTextContainer: {
    flex: 1,
  },
  dateEntryTitle: {
    fontSize: 18,
    fontFamily: 'Georgia',
    color: 'var(--on-surface)',
    marginBottom: 2,
  },
  dateEntryQuote: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'var(--on-surface-variant)',
  },
  seasonalSection: {
    marginTop: 24,
    height: 224,
    borderRadius: 40,
    overflow: 'hidden',
    justifyContent: 'center',
    padding: 32,
  },
  seasonalImage: {
    ...StyleSheet.absoluteFillObject,
  },
  seasonalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(6, 95, 70, 0.4)',
  },
  seasonalContent: {
    zIndex: 10,
  },
  seasonalLabel: {
    fontSize: 8,
    textTransform: 'uppercase',
    letterSpacing: 3,
    color: '#fff',
    opacity: 0.8,
    marginBottom: 12,
    fontWeight: '700',
  },
  seasonalTitle: {
    fontSize: 24,
    fontFamily: 'Georgia',
    color: '#fff',
    marginBottom: 16,
  },
  seasonalButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  seasonalButtonText: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: '#065f46',
    fontWeight: '700',
  },
});
