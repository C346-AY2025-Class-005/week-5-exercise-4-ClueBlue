import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, StatusBar, Alert, Platform } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';


const datasource = [
  {
    title: "N64",
    data: [
      { key: 'Mario Party', image: 'https://static.wikia.nocookie.net/mario/images/7/70/Mario_Party_%28North_American_cover%29.png/revision/latest?cb=20130120185406' },
      { key: 'Mario Party 2', image: 'https://static.wikia.nocookie.net/mario/images/2/23/Marioparty2.jpg/revision/latest/scale-to-width-down/1200?cb=20250730204225' },
      { key: 'Mario Party 3', image: 'https://static.wikia.nocookie.net/mario/images/3/38/Mario_Party_3_box_art.jpg/revision/latest?cb=20250824142934' }
    ]
  },
  {
    title: "GameCube",
    data: [
      { key: 'Mario Party 4', image: 'https://static.wikia.nocookie.net/mario/images/b/bd/Mario_Party_4_Cover.jpg/revision/latest?cb=20251001023221' },
      { key: 'Mario Party 5', image: 'https://mario.wiki.gallery/images/thumb/e/e8/Mario_Party_5_box_art.png/250px-Mario_Party_5_box_art.png' },
      { key: 'Mario Party 6', image: 'https://static.wikia.nocookie.net/mario/images/f/f1/MP6Boxart.jpg/revision/latest?cb=20230510191804' },
      { key: 'Mario Party 7', image: 'https://mario.wiki.gallery/images/thumb/9/9c/MP7_-_Box_NA.jpg/250px-MP7_-_Box_NA.jpg'}
    ]
  },
  {
    title: "Wii",
    data: [
      { key: 'Mario Party 8', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF9ChtzE2K1J2rxEFS11trDxS7xTu7Pl-DIg&s' },
      { key: 'Mario Party 9', image: 'https://static.wikia.nocookie.net/mario/images/5/53/Mario_party_9_european_box_art.jpg/revision/latest?cb=20180426114750' }
    ]
  }
];


const sectionIcons = { N64: 'gamepad', GameCube: 'cube', Wii: 'circle-play' };
const sectionIconColors = { N64: 'red', GameCube: '#A55EFF', Wii: 'white' };


const renderItem = ({ item }) => (
  <TouchableOpacity
    style={styles.itemCard}
    onPress={() => Alert.alert(item.key, 'You clicked this Mario Party!')}
    activeOpacity={0.85}
  >
    <Image source={{ uri: item.image }} style={styles.itemImage} />
    <Text style={styles.itemTitle}>{item.key}</Text>
  </TouchableOpacity>
);

export default function App() {
  return (
    <View style={styles.gradientBackground}>
      <StatusBar/>
      <View style={styles.headerBar}>
        <Text style={styles.appTitle}>Mario Party Games</Text>
        <TouchableOpacity style={styles.addButton}>
          <FontAwesome6 name="plus" size={18} color="#fff" />
          <Text style={styles.addButtonText}>Add Party</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionListContainer}>
        <SectionList
          sections={datasource}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          contentContainerStyle={styles.sectionContentStyle}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.sectionHeaderContainer}>
              <FontAwesome6
                name={sectionIcons[title]}
                size={28}
                color={sectionIconColors[title]}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionHeaderText}>{title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    backgroundColor: '#22223b',
    paddingTop: 48,
    paddingHorizontal: 0,
    justifyContent: 'flex-start'
  },

  headerBar: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 18,
    paddingTop: 8,
    borderWidth: 5,
    borderRadius: 12,
    padding: 10,
    backgroundColor:'lightblue'
  },
  appTitle: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1
  },

  addButton: {
    flexDirection: 'row',
    backgroundColor: '#7C3AED',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    alignItems: 'center'
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8
  },

  sectionListContainer: {
    flex: 1,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: 'lightblue',
    paddingVertical: 16,
    paddingHorizontal: 0,
    overflow: 'hidden',
    marginTop: 8,
    borderWidth: 5,
    borderColor: "grey"
  },

  sectionContentStyle: {
    paddingBottom: 32,
    paddingHorizontal: 20
  },

  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 14,
    backgroundColor: '#363062',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 20
  },
  sectionIcon: {
    marginRight: 14,
  },
  sectionHeaderText: {
    color: '#F7F7FF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  itemCard: {
    backgroundColor: '#594AE2',
    borderRadius: 20,
    marginBottom: 16,
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center'
  },
  itemImage: {
    width: 110,
    height: 110,
    borderRadius: 18,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: "red"
  },
  itemTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    textAlign: 'center',
    marginTop: 2,

  }
});

