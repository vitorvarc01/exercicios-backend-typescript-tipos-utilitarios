type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}


type Endereco = {
    cep: string
    rua: string
    bairro: string
    cidade: string
    estado: string
}

// Usamo o Omit para retirar uma propriedade de um objeto tipo e usando mos & {(Aqui passamos a propriedade e seu valor)} para adicionar a um objeto type.
type Carrinhomini = Omit<Carrinho, 'tipoTransacao'> & { tipoTransacao: Lowercase<'credito' | 'Debito'> }
// Estendendo o tipo Pessoa com uma nova propriedade
type CarrinhoAtualizado = Carrinhomini & { endereco: Endereco };

const compras = (info: CarrinhoAtualizado) => {

}

const vendas: CarrinhoAtualizado = {
    item: { nome: 'string', descricao: 'string', valor: 11 },
    qtd: 12,
    desconto: 12,
    frete: 12,
    tipoTransacao: 'debito',
    cartao: { numero: 12, validade: 'string', nome: 'string', cvv: 123 },
    endereco: { cep: 'string', rua: ' string', bairro: 'string', cidade: 'string', estado: 'string' }

}