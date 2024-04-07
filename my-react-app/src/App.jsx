
// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'
// import Card from './Card.jsx'
// import Button from './Button/Button.jsx'
import Student from './Student.jsx'
function App() {
  
  return(
    <>
      <Student name="Rekha Aryal" age={23} isStudent={true}/>
      <Student name="Rama Aryal" age={25} isStudent={true}/>
      <Student name="Roshan Aryal" age={20} isStudent={true}/>
      <Student name="kalpana Aryal" age={47} isStudent={false }/>
      <Student name="Tej prasad  Aryal" age={50} isStudent={false}/>
      <Student/>
    </>
  );
}

export default App
