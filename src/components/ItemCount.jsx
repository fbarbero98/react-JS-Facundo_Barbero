import React, { useState } from "react";

export default function ItemCount({ inicial, stock, onAdd }) {
  //Estos son los parametros que le pasamos a la funcion (los recibe desestructurados)

  const [count, setCount] = useState(inicial);

  const suma = () => {
    //"Suma" se le asigna al boton "+" con onClick, entonces cuando se clickea, se suma 1 al "count" que es el contador que luego deberia añadirse al carrito
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("No hay mas stock disponible");
    }
  };

  const resta = () => {
    if (count > inicial) {
      setCount(count - 1)
    } else {
      alert("Tiene que haber al menos 1 producto");
    }
  };
  const reset = () => {
    setCount(inicial);
  };
  return (
    <div>
      <button type="button" className="js-cart-quantity-btn cart-item-btn btn" onClick={resta}>-</button>
      <span>{count}</span>
      <button type="button" className="js-cart-quantity-btn cart-item-btn btn" onClick={suma}>+</button>
      <br />
      <button onClick={() => {onAdd(count);reset();}}>Agregar al carrito</button>
    </div>
  );
}
//En suma y resta las funciones se pasan sin() xq sino se ejecutarian sin hacer el boton.
//En onAdd si se pasan con () xq tenemos que pasarle un parametro. Entonces primero hacemos un callback () => (...) y ahi pasamos onAdd

/*<span class="pull-left">
      <button type="button" class="js-cart-quantity-btn cart-item-btn btn" onclick="LS.minusQuantity({{ item.id }}{% if not cart_page %}, true{% endif %})">
        {% include "snipplets/svg/minus.tpl" with {svg_custom_class: "icon-inline svg-icon-text"} %}
      </button>
      <span>
        <input type="number" name="quantity[{{ item.id }}]" data-item-id="{{ item.id }}" value="{{ item.quantity }}" class="js-cart-quantity-input cart-item-input form-control"/>
      </span>
      <span class="js-cart-input-spinner cart-item-spinner" style="display: none;">
        {% include "snipplets/svg/sync-alt.tpl" with {svg_custom_class: "icon-inline icon-spin svg-icon-text"} %}
      </span>
      <button type="button" class="js-cart-quantity-btn cart-item-btn btn" onclick="LS.plusQuantity({{ item.id }}{% if not cart_page %}, true{% endif %})">
        {% include "snipplets/svg/plus.tpl" with {svg_custom_class: "icon-inline svg-icon-text"} %}
      </button> </span>*/