let carro = [
    {
        nombre: "Bugatti Chiron Super Sport 300+",
        potencia: "1500 caballos de fuerza",
        motor: "8.0 litres W16",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/FoS20162016_0624_132444AA_%2827785299372%29.jpg/1200px-FoS20162016_0624_132444AA_%2827785299372%29.jpg"
    },
    {
        nombre: "Koenigsegg Jesko",
        potencia: "1600 caballos de fuerza",
        motor: "V8 de 5.0 litres",
        foto: "https://static1.squarespace.com/static/6371cc49cda4fd302dde5ccd/6371cc6c3fdcf76aaffc9461/65822083d05b9e1ab33d7608/1703027936280/Jesko%2BOdin%2BFront.jpg?format=1500w"
    },
    {
        nombre: "Hennessey Venom F5",
        potencia: "1800 caballos de fuerza",
        motor: "V8 de 6.6 litres",
        foto: "https://images.ecestaticos.com/91QLDzGlpNkldBJ9job84aw6PXY=/285x228:2001x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F956%2F7b5%2F92d%2F9567b592d2b36f110ada98c8bc391896.jpg"
    },
    {
        nombre: "Rimac C_Two",
        potencia: "1900 caballos de fuerza",
        motor: "Elèctric",
        foto: "https://img.remediosdigitales.com/aeddf5/rimac-c_two-2019/1366_2000.jpg"
    },
    {
        nombre: "Lamborghini Sian",
        potencia: "800 caballos de fuerza",
        motor: "V12 híbrid",
        foto: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/lamborghini_sian.jpg?tf=3840x"
    }
];

for (i=0 ; i<5; i++){
    document.querySelector(`#imagenCarro${i}`).src = carro[i].foto
    document.querySelector(`#nombreCarro${i}`).innerHTML = carro[i].nombre
    document.querySelector(`#potenciaCarro${i}`).innerHTML =carro[i].potencia 
    document.querySelector(`#motorCarro${i}`).innerHTML = carro[i].motor
    



}
