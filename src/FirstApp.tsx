import PropTypes from 'prop-types';



// si las funciones o variables no tienen dependencia con lo utilizado dentro de FirstApp
//mejor dejarlo por fuera para que no ocupe espacio en la memoria el repintado
const newMessage = { 
    user: 'Luciana',
    saludo: 'Hola'
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
        <h3>{ title }</h3>
        <p>{ subTitle }</p>

        <h1>{ getMessage() }</h1>

        <h1>{ newMessage.user}</h1>

        {/* Si necesito enviar el objeto entero:
      <code>{ JSON.stringify(newMessage) }</code> */}

    </>
  );
};

FirstApp.prototype = {
    //la propiedad debe ser string y debe ser proporcionado
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    subTitle: 'subTitle por default'
}

export { FirstApp} ;
