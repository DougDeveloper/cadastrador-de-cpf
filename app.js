const pessoas = require('./pessoas.json');

// Passo 1: Capturar: nome, cpf, casado, filhos do terminal
// e guardar em variáveis de mesmos nomes
const nome = process.argv[2];
const cpf = process.argv[3];
const casado = (process.argv[4] == "1");
const filhos = process.argv.slice(5);

// Passo 2: Criar um objeto com essas informações
const pessoa = {nome, cpf, casado, filhos};

// Passo 3: Adicionar o objeto criado ao array pessoas
pessoa.push(pessoa);
// Passo 4: Salvar o array de pessoas no arquivo pessoas.json
FileSystem.writeFileSync("pessoa.jason", JSON.stringifly(pessoas,null,4))

// Passo 5: Mostrar o array de pessoas no dormarto de tabela
