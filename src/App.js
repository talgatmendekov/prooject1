import React, { useState } from "react";
import Button from './components/ui/Button'
import StudentList from './components/StudentList'
import Card from "./components/ui/Card";

function App() {



const studentList = [
  {id: '1', name: 'Berment'},
  {id: '2', name: 'Aidana'},
  {id: '3', name: 'Syrttan'},
  {id: '4', name: 'Meerim'},
]




return (
    <Card>
      <input style={{backgroundColor: 'red'}} type="password"/>
    <StudentList students={studentList} />

      {/* StudentList(students) */}
       <Button>Show Users</Button>
       <Button>Add Todo</Button>
       <Button>Check Todo</Button>
       <Button>Delete</Button>
       <input type="text"/>
    </Card>
  );
}

export default App;
