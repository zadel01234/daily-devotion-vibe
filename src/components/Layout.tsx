import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  Platform,
  StatusBar,
  ScrollView
} from 'react-native';
import { 
  Sparkles, 
  Library, 
  Edit3, 
  Settings, 
  Menu,
  Mic
} from 'lucide-react-native';
import { motion, AnimatePresence } from 'motion/react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const insets = useSafeAreaInsets();

  const navItems = [
    { path: '/', label: 'Today', icon: Sparkles },
    { path: '/library', label: 'Library', icon: Library },
    { path: '/journal', label: 'Journal', icon: Edit3 },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <View style={[styles.container, { backgroundColor: 'var(--background)' }]}>
      <StatusBar barStyle="dark-content" />
      
      {/* Top App Bar */}
      <View style={[styles.header, { paddingTop: insets.top || 20, borderBottomColor: 'var(--outline-variant)' }]}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.iconButton}>
            <Menu size={20} color="var(--primary)" />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Daily Devotional</Text>

          <TouchableOpacity style={styles.profileButton}>
            <Image 
              source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu9ptY19o2qYOx_7UcJTLAbqZcuoCzURqjWjq6lJYbSCMnwawnXi-leLQo_obMoN51VMpXj-LoJhrGvHwNhPc_gw4WKN6j6EuNWHFWcJIMR0UcGRpHv5NqK4CvG4TPPExJi6uGAvTlkP6c92xoBzUXPduScUP6s6WBzHZCBabVonk6AFXUR9PNNNq8LgJ2Uc7XEOZ8V90FQDgP6gnlBs2CxWnOOQ0AKGnMv-Xi4R98ws5dRrBSKf4_PAnEE76iRvwBu9Y_uBl3Nao" }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content Area */}
      <View style={styles.main}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            style={{ flex: 1 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={[styles.navbar, { paddingBottom: insets.bottom || 10, borderTopColor: 'var(--outline-variant)' }]}>
        <View style={styles.navContent}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{ flex: 1, textDecorationLine: 'none' }}
              >
                <View style={styles.navItem}>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={styles.navIndicator}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <item.icon 
                    size={20} 
                    color={isActive ? "var(--primary)" : "var(--outline)"} 
                    fill={isActive ? "var(--primary)" : "transparent"}
                  />
                  <Text style={[
                    styles.navLabel, 
                    { color: isActive ? "var(--primary)" : "var(--outline)" }
                  ]}>
                    {item.label}
                  </Text>
                </View>
              </Link>
            );
          })}
        </View>
      </View>

      {/* FAB */}
      <TouchableOpacity style={[styles.fab, { bottom: 80 + (insets.bottom || 0) }]}>
        <Mic size={24} color="var(--on-primary)" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  header: {
    backgroundColor: 'rgba(var(--background-rgb), 0.8)',
    borderBottomWidth: 1,
    zIndex: 50,
  },
  headerContent: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    fontWeight: '600',
    color: 'var(--primary)',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: -1,
  },
  iconButton: {
    padding: 8,
    borderRadius: 20,
  },
  profileButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(var(--outline-variant-rgb), 0.2)',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  main: {
    flex: 1,
  },
  navbar: {
    backgroundColor: 'rgba(var(--background-rgb), 0.9)',
    borderTopWidth: 1,
    zIndex: 50,
  },
  navContent: {
    flexDirection: 'row',
    height: 64,
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  navIndicator: {
    position: 'absolute',
    top: 0,
    width: 48,
    height: 4,
    backgroundColor: 'var(--primary)',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  navLabel: {
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    fontWeight: '700',
    marginTop: 4,
  },
  fab: {
    position: 'absolute',
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'var(--primary)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    zIndex: 40,
  },
});
