import { useState, useEffect } from 'react'; 
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/Header';
import trad from './Traduction.js';

export default function App() {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AminaTine/pfi/main/liste.json')
      .then((response) => response.json())
      .then((data) => setStudents(data));

  }, []);




  const handleSelectStudent = () => {
    const student = students.find((s) => s.id_etudiant === studentId);
    setSelectedStudent(student || students[0]);

  };

  return (

    <View style={{ backgroundColor: '#ffa07a' }}>

      <Header titre="INSCRIPTION AUX COURS" couleurFond="blue" />

      <Text style={{ marginTop: 30, fontSize: 30, fontWeight: 'bold', marginLeft: 15 }}>Id:</Text>

      <View style={{ margin: 20 }}>

        <TextInput

               style={{ borderWidth: 1 }}

          onChangeText={(text) => {

            setStudentId(text);

            handleSelectStudent();

          }}

          value={studentId}

        />

        <Text>{selectedStudent ? selectedStudent.nom : 'Aucun étudiant sélectionné'}</Text>

        <Pressable

          style={({ pressed }) => [

            styles.button,

            {

              backgroundColor: '#007bff',

              textAlign: 'center',

              marginTop: 30,

              margin: 20,

            },

          ]}

          delayLongPress={500}

          onPress={handleSelectStudent}

        >

          <Text style={styles.buttonText}>SÉLECTIONNER UN ÉTUDIANT</Text>

        </Pressable>

        <Text style={{ marginTop: 20, color: selectedStudent ? 'green' : 'red', fontSize: 20 }}>

          {selectedStudent ? 'Élève sélectionné' : 'Confirmer votre sélection'}

        </Text>

      </View>

      <View>

        <Text style={{ marginTop: 30, fontWeight: 'bold', textAlign: 'center' }}>Session:</Text>

        <TextInput style={{ borderWidth: 1, margin: 5 }} onchangeText={''} />

        <Text style={{ marginTop: 30, fontWeight: 'bold', textAlign: 'center' }}>

          Enregistrer élève au cours:

        </Text>

        <TextInput style={{ borderWidth: 1, margin: 5 }} onchangeText={''} />

        <Pressable

          style={({ pressed }) => [

            styles.button,

            { backgroundColor: '#007bff', textAlign: 'center', marginTop: 30, margin: 20 },

          ]}

          delayLongPress={500}

        >

          <Text style={styles.buttonText}>Enregistrer</Text>

        </Pressable>




        <Pressable

         style={({ pressed }) => [

          styles.button,

          {backgroundColor: '#007bff', textAlign: "center", marginTop:30, margin:20}

        ]}

      delayLongPress={500}>

<Text style={styles.buttonText}>Afficher</Text>

      </Pressable>

       </View>

        </View>

       

       

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: '',

    paddingTop: Constants.statusBarHeight,

    backgroundColor: '#ecf0f1',

    padding: 8,

  },

  paragraph: {

    margin: 24,

    fontSize: 18,

    fontWeight: 'bold',

    textAlign: 'center',

  },

 buttonText: {

    color: '#fff',

    fontWeight: 'bold',

    textAlign: 'center',

   

 

  },

});