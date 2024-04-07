
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
import UserGreeting from './UserGreeting.jsx';

function App(){

  return(
    <>
      <UserGreeting isLoggedIn={false} username="Rekha Aryal" />
    </>
  );

}
export default App