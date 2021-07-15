const seccionPagina = new fullpage("#fullpage", {
	//   :::::: Barra de navegación index
	// ──────────────────────────────────────────────────
	navigation: true, // Muesta la barra de navegación.
	menu: "#menu", // Menu de navegación.
	anchors: ["inicio", "trabajo", "contacto", "footer"], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
	navigationTooltips: ["Inicio", "¿Que hacemos?", "Pide una cita", "Información"], // Tooltips que mostrara por cada boton.
	showActiveTooltip: false, // Mostrar tooltip activa.

	//   :::::: Pie de página
	afterLoad: function (origin, destination) {
		if (destination.anchor == "contacto") {
			document.querySelector(".section .textoFinal").style.opacity = 1;
		}
	},
	// ──────────────────────────────────────────────────
});


window.addEventListener("load", function () {
	new Glider(document.querySelector(".carrusel__lista"), {
		slidesToShow: 1,
		slidestoScroll: 1,
		draggable: true,
		dots: ".carrusel__indicadores",
		arrows: {
			prev: ".carrusel__anterior",
			next: ".carrusel__posterior",
		},
		responsive: [ 
			{		
				// screens greater than >= 775px
				breakpoint: 350,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
					itemWidth: 150,
					duration: 0.25,
				},
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					itemWidth: 150,
					duration: 0.25,
				},
			},

			{
				// screens greater than >= 850
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					itemWidth: 150,
					duration: 0.25,
				},
			},
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					itemWidth: 150,
					duration: 0.25,
				},
			},
		],
	});
});
