// import PropTypes from 'prop-types';


// si las funciones o variables no tienen dependencia con lo utilizado dentro de FirstApp
//mejor dejarlo por fuera para que no ocupe espacio en la memoria el repintado
const newMessage = { 
    user: 'Lu',
    saludo: 'Saludar en H1'
};

const getMessage = () => {
    return newMessage.saludo
}

//-------------------------------------
// hay que desestructurar las props y extraer lo que vayamos a usar {}
                            // valores por defecto, ej abajo: defaultProps
const FirstApp = ( { title, subTitle}: { title: string, subTitle: string}) => {

    
    // if ( !title ) {
    //     throw new Error('No existe');
    // }

  return (
    <>
    {/* en vez de props.title con la desestructuracion: */}
        <h1 data-testid="test-title">{ title }</h1>
        <p>{ subTitle }</p>
        <p>{ subTitle }</p>


        <h2>{ getMessage() }</h2>

        <h2>{ newMessage.user}</h2>

        {/* Si necesito enviar el objeto entero:
      <code>{ JSON.stringify(newMessage) }</code> */}

    </>
  );
};

// FirstApp.propTypes = {
//     //la propiedad debe ser string y debe ser proporcionado
//     title: PropTypes.string.isRequired,
//     subTitle: PropTypes.string.isRequired,
// }

// FirstApp.defaultProps = {
//     subTitle: 'subTitle por default'
// }

export { FirstApp} ;
