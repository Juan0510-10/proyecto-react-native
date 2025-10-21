import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { SkillCard } from '@/components/SkillCard';
import { ProjectCard } from '@/components/ProjectCard';

// ===================================
// 1. Interfaces y Datos
// ===================================
interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface Skill {
  id: string;
  emoji: string;
  name: string;
}

interface Project {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tags: string[];
}

const personalInfo = {
  name: 'Juand Diego Rodríguez León',
  title: 'Desarrollador Full-Stack',
  avatar: require('@/assets/images/avatar.jpg'),
  bio: 'Apasionado por la creación de soluciones tecnológicas innovadoras. Experiencia en el desarrollo de aplicaciones web y móviles, con un fuerte enfoque en la experiencia de usuario y el rendimiento. Buscando siempre aprender y aplicar nuevas tecnologías para resolver problemas complejos.',
};

const contacts: ContactInfo[] = [
  { icon: '📧', label: 'Email', value: 'juandisrod2019@gmail.com' },
  { icon: '📍', label: 'Ubicación', value: 'Bogotá, Colombia' },
  { icon: '🔗', label: 'GitHub', value: 'https://github.com/Juan0510-10' },
  { icon: '💼', label: 'LinkedIn', value: 'https://linkedin.com/in/juand-diego' },
];

const skills: Skill[] = [
  { id: '1', emoji: '⚛️', name: 'React & React Native' },
  { id: '2', emoji: '📘', name: 'TypeScript' },
  { id: '3', emoji: '🟢', name: 'Node.js' },
  { id: '4', emoji: '🐍', name: 'Python' },
  { id: '5', emoji: '☁️', name: 'Bases de Datos SQL & NoSQL' },
  { id: '6', emoji: '🐳', name: 'Docker' },
  { id: '7', emoji: '🎨', name: 'UI/UX Design' },
  { id: '8', emoji: '⚙️', name: 'CI/CD' },
];

const projects: Project[] = [
  {
    id: '1',
    emoji: '🛒',
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración de productos.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: '2',
    emoji: '📊',
    title: 'Dashboard de Analíticas',
    description: 'Dashboard interactivo para la visualización de datos en tiempo real, utilizando gráficos y tablas dinámicas.',
    tags: ['React', 'D3.js', 'TypeScript', 'Firebase'],
  },
  {
    id: '3',
    emoji: '🤖',
    title: 'Chatbot de Soporte',
    description: 'Chatbot inteligente para atención al cliente, integrado con servicios de procesamiento de lenguaje natural (NLP).',
    tags: ['Python', 'Dialogflow', 'Flask'],
  },
];

// ===================================
// 🖥️ Componente Principal
// ===================================
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>MI APP PERSONAL</Text>
        </View>

        {/* Avatar y Nombre */}
        <View style={styles.profileContainer}>
          <Image source={personalInfo.avatar} style={styles.avatar} />
          <View style={styles.textCenter}>
            <Text style={styles.name}>{personalInfo.name}</Text>
            <Text style={styles.title}>{personalInfo.title}</Text>
          </View>
        </View>

        {/* Contactos */}
        <View style={styles.section}>
          <View style={styles.card}>
            {contacts.map((contact, index) => (
              <View
                key={index}
                style={[
                  styles.contactRow,
                  index < contacts.length - 1 && { marginBottom: 16 },
                ]}
              >
                <Text style={styles.contactIcon}>{contact.icon}</Text>
                <View style={styles.contactTextContainer}>
                  <Text style={styles.contactLabel}>{contact.label}</Text>
                  <Text style={styles.contactValue}>{contact.value}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Sobre Mí */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>📖 Sobre Mí</Text>
            <Text style={styles.bio}>{personalInfo.bio}</Text>
          </View>
        </View>

        {/* Habilidades */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>💡 Mis Habilidades</Text>
          {skills.map((skill) => (
            <SkillCard key={skill.id} emoji={skill.emoji} name={skill.name} />
          ))}
        </View>

        {/* Proyectos */}
        <View style={[styles.section, { paddingBottom: 40 }]}>
          <Text style={styles.sectionHeader}>🚀 Mis Proyectos</Text>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              emoji={project.emoji}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ===================================
// 🎨 ESTILOS
// ===================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  header: {
    backgroundColor: '#4f46e5',
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 48,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  headerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -80,
    marginBottom: 16,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 9999,
    borderWidth: 4,
    borderColor: '#f1f5f9',
  },
  textCenter: {
    alignItems: 'center',
    marginTop: 16,
  },
  name: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
  },
  title: {
    fontSize: 18,
    color: '#4338ca',
    fontWeight: '600',
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactIcon: {
    fontSize: 24,
    marginRight: 16,
    width: 28,
    textAlign: 'center',
  },
  contactTextContainer: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  contactValue: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    borderBottomWidth: 1,
    borderBottomColor: '#c7d2fe',
    paddingBottom: 8,
    marginBottom: 8,
  },
  bio: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 22,
  },
  sectionHeader: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
  },
});