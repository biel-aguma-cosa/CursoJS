var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var res = document.getElementById("res")
var img = document.getElementById('imagem')
var body = document.getElementById('bodynho')
res.innerHTML = `<p>Agora São exatamente ${hora}:${min} horas</p>`
var fo = document.getElementById("fo")
var he = document.getElementById("he")
if (hora > 0 && hora < 12){
	res.innerHTML += `<p>Bom dia!</p>`
	img.innerHTML = '<img src="https://image.freepik.com/fotos-gratis/campo-colorido-relvas-outdoor-fresco_1088-695.jpg">'
	body.style.background = "rgb(255, 252, 224)"
	fo.style.color = "rgb(150,150,150)"
	he.style.color = "rgb(150,150,150)"
}else if (hora < 18){
	res.innerHTML += `<p id="p2">Boa tarde!</p>`
	img.innerHTML = '<img src="https://image.freepik.com/fotos-gratis/fundo-do-ceu-azul-com-nuvens_1017-21758.jpg">'
	body.style.background = "rgb(255, 233, 0)"
} else {
	res.innerHTML += `<p id="p2">Boa noite!</p>`
	img.innerHTML = '<img src="https://image.freepik.com/vetores-gratis/lua-cheia-no-ceu-noturno-com-cena-de-estrelas-e-nuvens_33099-2076.jpg">'
	body.style.background = "rgb(0, 0, 35)"
}