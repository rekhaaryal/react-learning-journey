
// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'
// import Card from './Card.jsx'
// import Button from './Button/Button.jsx'



//4. PROPS in react 

// import Student from './Student.jsx'
// function App() {
  
//   return(
//     <>
//       <Student name="Rekha Aryal" age={23} isStudent={true}/>
//       <Student name="Rama Aryal" age={25} isStudent={true}/>
//       <Student name="Roshan Aryal" age={20} isStudent={true}/>
//       <Student name="kalpana Aryal" age={47} isStudent={false }/>
//       <Student name="Tej prasad  Aryal" age={50} isStudent={false}/>
//       <Student/>
//     </>
//   );
// }

// export default App


//5. How to conditional reader in react
// import UserGreeting from './UserGreeting.jsx';

// function App(){

//   return(
//     <>
//       <UserGreeting isLoggedIn={false} username="Rekha Aryal" />
//     </>
//   );

// }
// export default App

//6. Render List in React
import List from './List.jsx'

function App(){

  // 
  //?6. making our list reusable
  const fruits = [{ id: 1 , name: "Mango" , calorie: 60 }, 
                     {id: 2 ,name: " apple" , calorie:52} , 
                      {id: 3 ,name: "orange" , calorie: 47 }, 
                      {id: 4 ,name: "banana" , calorie:89}];
  
  const vegetables = [{ id: 6 , name: "Carrots" , calorie: 41}, 
                     {id: 7 ,name: " Broccoli" , calorie:34} , 
                      {id: 8 ,name: "Spinach" , calorie: 23 }, 
                      {id: 9 ,name: "Bell Peppers" , calorie:31}];
  return(<>
            <List items={fruits} category="FRUITS"/>
            <List items={vegetables} category="VEGETABLES"/>
            </>
  );

        
 
}
export default App