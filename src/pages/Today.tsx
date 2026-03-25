import React, { useState } from 'react';
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
  Edit3, 
  Share2, 
  BookOpen, 
  Volume2, 
  ArrowRight, 
  PlayCircle, 
  Heart, 
  Send 
} from 'lucide-react-native';
import BottomSheet from '../components/BottomSheet';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Today() {
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [reflectionText, setReflectionText] = useState('');

  const handleJournalSubmit = () => {
    console.log("Saving reflection:", reflectionText);
    setIsJournalOpen(false);
    setReflectionText('');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroCard}>
            <Image 
              source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNzMbnqGKYp10VW6il3k12Yn9t4dBrwGbLICH7RpdnJxW5HQBblX2tQTAOaGWAKAhmyiNs235cyL1p89Cizi8ga7sljZS3VUilVQdQtFGhpwJctZow3Aidf6KkgFbfGGMpGj8WWuDFPWSXQXmGfpt82M5hBxaTbBR_zS-8w4G75RdTbHVXWRcwjrvWIzlJ8mB4ukuH3GEQTtQdHUe501ghTI0G6zBvDm4F5cFFF2wofPe7feiNJ_Y-ED1SbQgLic4rmb8GGCZPpKY" }}
              style={styles.heroImage}
            />
            <View style={styles.heroOverlay} />
            <View style={styles.heroContent}>
              <Text style={styles.heroLabel}>Morning Meditation</Text>
              <Text style={styles.heroTitle}>The Stillness{"\n"}of Dawn</Text>
            </View>
          </View>
        </View>

        {/* Content Area */}
        <View style={styles.contentArea}>
          {/* Scripture */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.line} />
              <Text style={styles.sectionLabel}>Psalm 46:10</Text>
            </View>
            <Text style={styles.scriptureText}>
              "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth."
            </Text>
          </View>

          {/* Reflection */}
          <View style={styles.section}>
            <View style={styles.reflectionBody}>
              <Text style={styles.reflectionText}>
                <Text style={styles.dropCap}>I</Text>n the frantic pace of the modern era, stillness is often mistaken for stagnation. Yet, the Psalter reminds us that stillness is the soil from which true knowledge grows. It is not an absence of movement, but an intentional alignment of the soul.
              </Text>
              <Text style={styles.reflectionText}>
                Today, consider the quiet spaces between your breaths. Notice the way the light rests on the surfaces around you. In these unremarkable moments, the Eternal Presence is as vibrant and active as in the greatest of cosmic shifts.
              </Text>
            </View>

            {/* Actions */}
            <View style={styles.actions}>
              <TouchableOpacity 
                onPress={() => setIsJournalOpen(true)}
                style={styles.primaryButton}
              >
                <Edit3 size={20} color="var(--on-primary)" />
                <Text style={styles.primaryButtonText}>Reflect and Journal</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.secondaryButton}>
                <Share2 size={20} color="var(--on-secondary-container)" />
                <Text style={styles.secondaryButtonText}>Share Wisdom</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Closing Prayer */}
          <View style={styles.prayerCard}>
            <View style={styles.prayerHeader}>
              <View style={styles.prayerIconContainer}>
                <Heart size={20} color="var(--primary)" fill="var(--primary)" />
              </View>
              <Text style={styles.prayerTitle}>Closing Prayer</Text>
            </View>
            <Text style={styles.prayerText}>
              "Lord, in the quiet of this moment, I surrender my busyness and my noise. Guide me into the sanctuary of Your stillness, that I might know You more deeply. Let Your peace rest in my heart as I move through this day. Amen."
            </Text>
          </View>

          {/* Next Steps */}
          <View style={styles.nextSteps}>
            <TouchableOpacity style={styles.stepCard}>
              <View style={[styles.stepIcon, { backgroundColor: 'rgba(var(--tertiary-container-rgb), 0.2)' }]}>
                <BookOpen size={24} color="var(--tertiary)" />
              </View>
              <Text style={styles.stepTitle}>Continue the Study</Text>
              <Text style={styles.stepDescription}>
                Explore more verses on peace and the tranquility of spirit.
              </Text>
              <View style={styles.stepLink}>
                <Text style={styles.stepLinkText}>Explore Library</Text>
                <ArrowRight size={16} color="var(--primary)" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.stepCard, { backgroundColor: 'rgba(var(--primary-container-rgb), 0.2)' }]}>
              <View style={[styles.stepIcon, { backgroundColor: 'var(--primary)' }]}>
                <Volume2 size={24} color="var(--on-primary)" />
              </View>
              <Text style={styles.stepTitle}>Listen to Audio</Text>
              <Text style={styles.stepDescription}>
                A guided 5-minute meditation based on today's scripture.
              </Text>
              <View style={styles.stepLink}>
                <Text style={styles.stepLinkText}>Play Meditation</Text>
                <PlayCircle size={16} color="var(--primary)" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </motion.div>

      {/* Journaling Bottom Sheet */}
      <BottomSheet 
        isOpen={isJournalOpen} 
        onClose={() => setIsJournalOpen(false)}
        title="My Reflection"
      >
        <View style={styles.journalContent}>
          <View style={styles.journalInputContainer}>
            <Text style={styles.journalQuote}>
              "Be still, and know that I am God..."
            </Text>
            <TextInput 
              value={reflectionText}
              onChangeText={setReflectionText}
              placeholder="What does stillness mean to you today?"
              placeholderTextColor="var(--outline)"
              multiline
              style={styles.journalInput}
            />
          </View>

          <TouchableOpacity 
            onPress={handleJournalSubmit}
            disabled={!reflectionText.trim()}
            style={[styles.saveButton, !reflectionText.trim() && styles.disabledButton]}
          >
            <Send size={20} color="var(--on-primary)" />
            <Text style={styles.saveButtonText}>Save to Journal</Text>
          </TouchableOpacity>

          <Text style={styles.journalFooter}>
            Saved to your private collection
          </Text>
        </View>
      </BottomSheet>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroSection: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  heroCard: {
    aspectRatio: 4/5,
    width: '100%',
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  heroContent: {
    position: 'absolute',
    bottom: 40,
    left: 32,
    right: 32,
  },
  heroLabel: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 2.5,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 12,
    fontWeight: '600',
  },
  heroTitle: {
    fontSize: 36,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: '#fff',
    lineHeight: 42,
  },
  contentArea: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 48,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  line: {
    height: 1,
    width: 32,
    backgroundColor: 'var(--outline-variant)',
    marginRight: 16,
  },
  sectionLabel: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: 'var(--secondary)',
    fontWeight: '600',
  },
  scriptureText: {
    fontSize: 28,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--primary)',
    lineHeight: 34,
  },
  reflectionBody: {
    marginBottom: 32,
  },
  reflectionText: {
    fontSize: 18,
    color: 'var(--on-surface-variant)',
    lineHeight: 28,
    marginBottom: 16,
  },
  dropCap: {
    fontSize: 48,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--primary)',
  },
  actions: {
    gap: 16,
  },
  primaryButton: {
    backgroundColor: 'var(--primary)',
    paddingVertical: 18,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  primaryButtonText: {
    color: 'var(--on-primary)',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  secondaryButton: {
    backgroundColor: 'var(--secondary-container)',
    paddingVertical: 18,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  secondaryButtonText: {
    color: 'var(--on-secondary-container)',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  prayerCard: {
    backgroundColor: 'var(--surface-container-high)',
    borderRadius: 40,
    padding: 32,
    marginBottom: 48,
  },
  prayerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  prayerIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prayerTitle: {
    fontSize: 24,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--primary)',
  },
  prayerText: {
    fontSize: 20,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--on-surface-variant)',
    lineHeight: 28,
  },
  nextSteps: {
    gap: 16,
  },
  stepCard: {
    backgroundColor: 'var(--surface-container-low)',
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(var(--outline-variant-rgb), 0.1)',
  },
  stepIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  stepTitle: {
    fontSize: 20,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--on-surface)',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 14,
    color: 'var(--on-surface-variant)',
    lineHeight: 20,
    marginBottom: 16,
  },
  stepLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepLinkText: {
    fontSize: 12,
    fontWeight: '700',
    color: 'var(--primary)',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  journalContent: {
    gap: 24,
  },
  journalInputContainer: {
    backgroundColor: 'var(--surface-container-low)',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(var(--outline-variant-rgb), 0.1)',
  },
  journalQuote: {
    fontSize: 18,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--primary)',
    marginBottom: 16,
  },
  journalInput: {
    height: 200,
    fontSize: 16,
    color: 'var(--on-surface)',
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: 'var(--primary)',
    paddingVertical: 18,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  disabledButton: {
    opacity: 0.5,
  },
  saveButtonText: {
    color: 'var(--on-primary)',
    fontSize: 16,
    fontWeight: '700',
  },
  journalFooter: {
    textAlign: 'center',
    fontSize: 10,
    color: 'var(--outline)',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});
