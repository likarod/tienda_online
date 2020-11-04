// Agradecimiento al video de Jhon Ahn y a su explicación sobre cómo hacer un filtrado de elementos con Hooks :-)

import React, {useState}from 'react'
import {Checkbox, Collapse} from 'antd';

const {Panel} = Collapse

function CheckBox(props) {

    //Utilización de hooks para cambiar el estado inicial de los box en la lista de los filtros. 
    const [cambio, setCambio] = useState([])
    
    //Función para manejar el evento del click en cada casilla del Ckechbox
    const manejoClick = (value) => {
        //Aquí le decimos que el valor actual tiene que tener el índice apagado. Se le asigna el valor del checkbox
        const indiceActual = cambio.indexOf(value);

        // Se genera un nuevo operador del estado inicial de cambio. Este generará un spread operator del array de cambio.
        const newCambio = [...cambio]

        // Se realiza la condición para verificar si algun valor ha sido presionado dentro de cada casilla. Para ello se pone un -1 como índice. 
        if(indiceActual === -1){
            // Si se cumple la condición se agrega un nuevo valor dentro del nuevo operador. 
            newCambio.push(value)
        } else{
            //Cambiamos el array generado
            newCambio.splice(indiceActual, 1)
        }

        // Con los cambios generado tras la condición y se genera el nuevo cambio. 
        setCambio(newCambio)

        //Función del componente padre que cambia el estado desde su hijo. 
        props.manejoFiltros(newCambio) 
    }

    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
            <Panel header key='1'>
                <p>Categorias</p>
                {props.datos.map((value, index) => (
                    <React.Fragment key={index}>
                        <Checkbox
                            onChange={()=> manejoClick(value.ProductID)}
                            type='checkbox'
                            // Si el checked está en false, ninguno de los elementos se de la lista de filtros se activa. A través del hooks de cambio verificaremos que se active o no y se modifique el estado de "cambio".
                            checked={cambio.indexOf(value.ProductID) === -1 ? false : true }
                        />
                        <span>{value.NameCategory}</span>
                    </React.Fragment>
        
                    ))}
              </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox
