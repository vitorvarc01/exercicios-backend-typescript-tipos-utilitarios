type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

type Conexao = {
    driver: string,
    url: string
}

// Desse modo o retorno da função que é passado antes da => é usado apenas para leitura com o  Readonly<>
const conexao = (dados: Conn): Readonly<Conexao> => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}