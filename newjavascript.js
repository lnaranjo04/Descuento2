var cantidad = prompt ("Ingrese el monto del articulo ");
var importe = prompt ("Ingrese la cantida a descontar ");                                                                                                                                                                                           
var descu = cantidad - importe;
var descuento = (descu / cantidad ) * 100;
document.write("El porcentaje de descuento es de " , descuento , "%");
