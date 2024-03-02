type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNascimento?: string
}

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}

const info = {
    nome: 'vitor',
    email: 'vitorvarc@',
    cpf: '1234567879',
    rg: '321654987',
    dataNascimento: '13/45/12'
}
console.log(cadastrarUsuário(info))


// Com o Omit foi excluido do tipo Usuario o rg e criou um novo tipo UsuarioNovo.
type UsuarioSemRG = Omit<Usuario, 'rg'>
// Com o Required ele torna todos as propriedades do tipo obrigatórias.
type UsuarioNovo = Required<UsuarioSemRG>

// Aqui usando o tipo UsuarioNovo todos os campos são obrigatórios menos o rg, que se mesmo for passado não será usado na função.
const cadastroUsuarioAtualizado = (info: UsuarioNovo) => {
    return info.nome
}
const info1 = {
    nome: 'vitor',
    email: 'vitorvarc@',
    cpf: '1234567879',
    dataNascimento: '13/45/12'
}
console.log(cadastroUsuarioAtualizado(info1))