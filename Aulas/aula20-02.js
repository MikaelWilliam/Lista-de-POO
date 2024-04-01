class Livro {
    constructor(titulo, ano_publicacao) {
        this.titulo = titulo;
        this.ano_publicacao = ano_publicacao;
        this.autores = []
    }

    set isbn(isbn){
        this.isbn = isbn
    }


    adicionar_autor(autor){
        this.autores.push(autor);
    }
}


const livro = new Livro("x", 2023);
livro.isbn = "123";
