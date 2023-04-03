class Produto{
	constructor(){
		this.id = 1;
		this.arrayProdutos =[];
	}

	adicionarProduto(){
		let prod = this.lerDados()
		if (this.validar(prod) == true){
			this.salvar(prod)
		}
		this.listar()
	}

	lerDados(){
		let prod ={}

		prod.id = this.id;
		prod.nomeProduto = document.getElementById("pdNome").value;
		prod.valorProduto = document.getElementById("pdValor").value;

		return prod;
	}


	validar(prod){
		let msg = "";

		if (prod.nomeProduto == ""){
			msg += "Por favor, insira corretamente o nome do produto \n"
		}
		if (prod.valorProduto == ""){
			msg += "Por favor, insira corretamente o preço do produto \n"
		}

		if (msg != ""){
			alert(msg)
			return false //false caso tenha algum campo vazio
		}
		return true     //true para todos os campos preenchidos
	}

	salvar(prod){
		this.arrayProdutos.push(prod)
		this.id++
	}

	listar(){
		let tbody = document.getElementById("tbody")
		tbody.innerText = ""

		for( let i=0; i < this.arrayProdutos.length; i++){
			let tr = tbody.insertRow();

			let td_id = tr.insertCell();
			let td_nome = tr.insertCell();
			let td_valor = tr.insertCell();
			let td_del = tr.insertCell();
			
			td_id.innerText = this.arrayProdutos[i].id;
			td_nome.innerText = this.arrayProdutos[i].nomeProduto;
			td_valor.innerText = this.arrayProdutos[i].valorProduto;
			let imagem = document.createElement("img")
			imagem.src = "del.png"
			imagem.setAttribute("onclick", `prod.deletar(${this.arrayProdutos[i].id})`)
			td_del.appendChild(imagem)

		}

		this.limparCampos();
	}

	limparCampos(){
		document.getElementById("pdNome").value = "";
		document.getElementById("pdValor").value = "";
	}

	deletar(id){
		let tbody = document.getElementById("tbody")
		for(let i=0; i < this.arrayProdutos.length; i++){
			if(this.arrayProdutos[i].id == id){
				this.arrayProdutos.splice(i, 1)
				tbody.deleteRow(i)
			}
		}
		alert("O item foi apagado com Sucesso!")
	}
}


var prod = new Produto();