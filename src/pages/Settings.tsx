import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet,
  Switch,
  Dimensions
} from 'react-native';
import { motion } from 'motion/react';
import { Bell, Palette, HelpCircle, LogOut, Clock, ChevronRight } from 'lucide-react-native';
import { useTheme } from '../context/ThemeContext';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Settings() {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Preferences</Text>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        {/* Reminders */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Bell size={16} color="var(--primary)" />
            <Text style={styles.sectionTitle}>Reminders</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.settingRow}>
              <View>
                <Text style={styles.settingTitle}>Daily Reflection</Text>
                <Text style={styles.settingSubtitle}>Morning prayer notification</Text>
              </View>
              <Switch 
                value={true}
                trackColor={{ false: 'var(--surface-container-highest)', true: 'var(--primary)' }}
                thumbColor="#fff"
              />
            </View>
            <View style={styles.divider} />
            <View style={styles.timePickerContainer}>
              <Text style={styles.timePickerLabel}>Reminder Time</Text>
              <TouchableOpacity style={styles.timePickerButton}>
                <Text style={styles.timeValue}>
                  07:30 <Text style={styles.timeAmPm}>AM</Text>
                </Text>
                <Clock size={16} color="var(--primary)" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Appearance */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Palette size={16} color="var(--primary)" />
            <Text style={styles.sectionTitle}>Appearance</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.appearanceGroup}>
              <Text style={styles.appearanceTitle}>Reading Theme</Text>
              <View style={styles.themeGrid}>
                {[
                  { id: 'light', label: 'Light', bg: '#fcf9f4' },
                  { id: 'dark', label: 'Dark', bg: '#0e0e0e' },
                  { id: 'sepia', label: 'Sepia', bg: '#f4ead5' },
                ].map((t) => (
                  <TouchableOpacity 
                    key={t.id}
                    onPress={() => setTheme(t.id as any)}
                    style={[
                      styles.themeButton,
                      theme === t.id && styles.themeButtonActive
                    ]}
                  >
                    <View style={[styles.themePreview, { backgroundColor: t.bg }]} />
                    <Text style={styles.themeLabel}>{t.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.appearanceGroup}>
              <View style={styles.fontSizeHeader}>
                <Text style={styles.appearanceTitle}>Font Size</Text>
                <Text style={styles.fontSizeValue}>{fontSize}</Text>
              </View>
              <View style={styles.fontSizeContainer}>
                <View style={styles.fontSizeTrack} />
                <View style={styles.fontSizeButtons}>
                  {[
                    { id: 'small', label: 'Aa', size: 12 },
                    { id: 'standard', label: 'Aa', size: 16 },
                    { id: 'large', label: 'Aa', size: 20 }
                  ].map((s) => (
                    <TouchableOpacity
                      key={s.id}
                      onPress={() => setFontSize(s.id as any)}
                      style={[
                        styles.fontSizeButton,
                        fontSize === s.id && styles.fontSizeButtonActive
                      ]}
                    >
                      <Text style={[
                        styles.fontSizeButtonText, 
                        { fontSize: s.size },
                        fontSize === s.id && { color: 'var(--on-primary)' }
                      ]}>
                        {s.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Support */}
        <View style={styles.supportSection}>
          <TouchableOpacity style={styles.supportButton}>
            <View style={styles.supportButtonContent}>
              <View style={styles.supportIconContainer}>
                <HelpCircle size={20} color="var(--tertiary)" />
              </View>
              <View>
                <Text style={styles.supportTitle}>Support & Resources</Text>
                <Text style={styles.supportSubtitle}>Tutorials and FAQs</Text>
              </View>
            </View>
            <ChevronRight size={16} color="var(--outline)" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.signOutButton}>
            <LogOut size={16} color="#dc2626" />
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.versionText}>v2.4.0 • Daily Devotional</Text>
          <View style={styles.footerLinks}>
            <TouchableOpacity><Text style={styles.footerLink}>Privacy</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.footerLink}>Terms</Text></TouchableOpacity>
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
  header: {
    marginBottom: 40,
  },
  headerLabel: {
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 2.5,
    color: 'var(--primary)',
    fontWeight: '700',
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: 'var(--on-surface)',
  },
  section: {
    marginBottom: 40,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: 'var(--primary)',
  },
  card: {
    backgroundColor: 'var(--surface-container-low)',
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(var(--outline-variant-rgb), 0.1)',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingTitle: {
    fontSize: 18,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--on-surface)',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 12,
    color: 'var(--on-surface-variant)',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(var(--outline-variant-rgb), 0.1)',
    marginVertical: 24,
  },
  timePickerContainer: {
    gap: 8,
  },
  timePickerLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: 'var(--outline)',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  timePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(var(--surface-container-high-rgb), 0.5)',
    padding: 16,
    borderRadius: 16,
  },
  timeValue: {
    fontSize: 20,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--on-surface)',
  },
  timeAmPm: {
    fontSize: 12,
    fontFamily: 'System',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    opacity: 0.6,
  },
  appearanceGroup: {
    marginBottom: 32,
  },
  appearanceTitle: {
    fontSize: 18,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--on-surface)',
    marginBottom: 16,
  },
  themeGrid: {
    flexDirection: 'row',
    gap: 8,
  },
  themeButton: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
    padding: 8,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: 'rgba(var(--surface-container-high-rgb), 0.3)',
  },
  themeButtonActive: {
    borderColor: 'var(--primary)',
    backgroundColor: 'var(--surface-bright)',
  },
  themePreview: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(var(--outline-variant-rgb), 0.1)',
  },
  themeLabel: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: -0.5,
    color: 'var(--on-surface)',
  },
  fontSizeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  fontSizeValue: {
    fontSize: 10,
    fontWeight: '700',
    color: 'var(--primary)',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  fontSizeContainer: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  fontSizeTrack: {
    position: 'absolute',
    left: 8,
    right: 8,
    height: 4,
    backgroundColor: 'var(--surface-container-highest)',
    borderRadius: 2,
  },
  fontSizeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fontSizeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'var(--surface-container-highest)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontSizeButtonActive: {
    backgroundColor: 'var(--primary)',
    transform: [{ scale: 1.1 }],
  },
  fontSizeButtonText: {
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    color: 'var(--outline)',
  },
  supportSection: {
    gap: 12,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'var(--surface-container-low)',
    padding: 20,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(var(--outline-variant-rgb), 0.1)',
  },
  supportButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  supportIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: 'rgba(var(--tertiary-container-rgb), 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  supportTitle: {
    fontSize: 16,
    fontFamily: 'Georgia',
    fontWeight: '600',
    fontStyle: 'italic',
    color: 'var(--on-surface)',
  },
  supportSubtitle: {
    fontSize: 12,
    color: 'var(--on-surface-variant)',
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: 'rgba(220, 38, 38, 0.05)',
    padding: 20,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(220, 38, 38, 0.1)',
  },
  signOutText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#dc2626',
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 3,
    color: 'var(--outline)',
    marginBottom: 12,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 24,
  },
  footerLink: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: 'var(--on-surface-variant)',
  },
});
