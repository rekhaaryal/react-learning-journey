

// function List(){
//?1. array method
    // const fruits = ["Mango", " apple" , "orange" , "banana"];
    // const listItems = fruits.map(fruit => <li>{fruit}</li>);

    // return(<ol>{listItems}</ol>);
//?2. Object

    // const fruits = [{ id: 1 , name: "Mango" , calorie: 60 }, 
    //                 {id: 2 ,name: " apple" , calorie:52} , 
    //                 {id: 3 ,name: "orange" , calorie: 47 }, 
    //                 {id: 4 ,name: "banana" , calorie:89}];
//?3. sorting object
    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //alphabetical     
    //fruits .sort((a,b) => b.name.localeCompare(a.name)) ; // reverse alphabetical 
    //fruits.sort((a,b) => a.calorie-b.calorie) ;// numerically sorting 
    //fruits.sort((a,b) => b.calorie-a.calorie) ; // reverse numerically sorting

//?4. filter object
   //?  const lowCalFruits = fruits.filter(fruit => fruit.calorie < 55);
     //?   const highCalFruits = fruits.filter(fruit => fruit.calorie >= 55)

   //? const listItems = highCalFruits.map(highCalFruit =><li key={highCalFruit.id}>
                                                            // {highCalFruit.name}: &nbsp; 
                                                            // <b>{highCalFruit.calorie}</b></li> );
    // const listItems = fruits.map(fruit =><li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calorie}</b></li> );

    // return(<ol>{listItems}</ol>);

//?5. Making our list reuseable
function List(props) {
const category = props.category;
const itemList = props.items;
const listItems = itemList.map(items =><li key={items.id}>{items.name}: &nbsp; <b>{items.calorie}</b></li> );
return(<>
          <h3 className="list-category">{category}</h3> 
          <ol className="list-item">{listItems}</ol> 

   </>);




}
export default List