const autos = require('./autos')
let concesionaria = {
   autos: autos,
   buscarAuto: function (patente) {
      let resultado = autos.find((auto) =>
         auto.patente === patente);
      if (resultado) {
         return resultado
      } else {
         return null
      }
   },
   venderAuto: function (patente) {
      let resultado = this.buscarAuto(patente);
      if (resultado !== null) {
         resultado.vendido = true;
      }
   },
   autosParaLaVenta: function (){
      return autos.filter((auto)=>auto.vendido === false )
   },
   autosNuevos: function(){
    let resultado = this.autosParaLaVenta();
 return  resultado.filter((auto) =>auto.km < 100)
   },
   listaDeVentas: function(){
   let autosVendidos = autos.filter((auto)=> auto.vendido === true);
   return autosVendidos.map((auto)=> auto.precio)
   }, 
   totalDeVentas:function(){
      let totalVentas = this.listaDeVentas();
      return totalVentas.reduce(          (acumulador , precio)=> acumulador + precio, 0)
   },
 puedeComprar: function (auto, persona) {
return ((persona.capacidadDePagoTotal > auto.precio) && (persona.capacidadDePagoEnCuotas >(auto.precio / auto.cuotas)) )
  },
 autosQuePuedeComprar: function(persona){
    return this.autosParaLaVenta().filter((auto) => this.puedeComprar( auto, persona))
    }
  
}
