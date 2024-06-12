TrocaTema = () => {
  //alert ("Mudei o tema e você não viu" )
  //const html = document.documentElement

  //document.querySelector("body").style.background = "Pink";


  document.documentElement.classList.toggle("light");

  const islight = document.documentElement.classList.contains("light")

  const imagem = islight ? "./img/perfil.jpeg" : "../img/backgroundDark.png";
  
  document.querySelector("perfil img").setAttribute("src", imagem);
};
