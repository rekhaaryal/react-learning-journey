
function Food(){

  const food1 = "Ema Datshi " ;
  const food2 = "Butter Chicken";
    return(
        <ul>
            <li>Dal Bhat</li>
            <li>Momos</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>

    );
}

export default Food