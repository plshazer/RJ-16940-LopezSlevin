import React from 'react'
import Cards from './Cards.js';
import {StylesSheet} from './css/cards.css';

const Productos = [{Id:0, Nombre:"Coca", Descripcion:"500ml en lata", Precio:"250", src:"https://alemaxikiosco.com.ar/wp-content/uploads/2020/09/cocalata.jpg",stock: 5,},
{Id:1, Nombre:"Pepsi", Descripcion:"500ml en lata", Precio:"200", src:"data:image/jpeg;base64,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", stock:10,},
{Id:3, Nombre:"7up", Descripcion:"500ml en lata", Precio:"100", src:"https://elsuperweb.com/wp-content/uploads/2020/11/Diseno-sin-titulo-39.jpg", stock:0,},];






function ProductViewer() {       
    const runCallback = (result) => {return result();};
    return (
   
            <div className="Card">
                
                {
                    runCallback(() => {
                        let result = [];
                        for (let index = 0; index < Productos.length; index++) {
                            if(Productos[index].stock !=0){
                                result.push(<Cards productos={Productos[index]}/>);
                            }
                        }
                        return result
                    })
                }
            </div>
    )
}

export default ProductViewer
