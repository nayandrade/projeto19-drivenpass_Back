# projeto19-drivenpass

# Observações gerais:

- Todas as informações sensíveis, como senha e informações de cartão de crédito serão criptografadas

- Todos os títulos de cada rota são únicos para aquele usuário, porém outros usuários também podem utilizar aquele mesmo título

- Toda a autenticação foi feita com [jwt](https://www.npmjs.com/package/jsonwebtoken)

# Rotas de criação e autenticação de usuários:

## Rota <span style="color:yellow"> **POST** </span>/signup

Essa é uma rota não autenticada. Sua função é criar novos usuários para a plataforma.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "email": "email para cadastro", //string
  "password": "senha de no mínimo 10 caracteres" //string
}
```

## Rota <span style="color:yellow"> **POST** </span>/signin

Essa é uma rota não autenticada. Sua função é autenticar novos usuários para o uso da plataforma.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "email": "email de cadastro do usuário", //string
  "password": "senha de cadastro do usuário" //string
}
```

# Rotas de credenciais:

## Rota <span style="color:yellow"> **POST** </span>/credentials

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é criar credenciais genéricas que se referem ao login de um site e/ou serviço.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "title": "título único de identificação da credencial", //string
  "url": "url de acesso ao site cadastrado", //string
  "username": "nome de uruário", //string
  "password": "senha" //string
}
```

## Rota <span style="color:yellow"> **GET** </span>/credentials

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é listar todas as credenciais cadastradas pelo usuário.

A resposta da requisição virá no seguinte formato:

```json
[
  {
    "id": "identificador da credencial",
    "userId": "identificador do usuário",
    "title": "título único da credencial",
    "url": "url de acesso",
    "username": "nome de usuário",
    "password": "senha descriptografada"
  }
]
```

## Rota <span style="color:yellow"> **GET** </span>/credentials/:id

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é listar apenas a credencial solicitada.

O "id" passado nesta rota é o id da credencial, criada na rota **POST** mencionada anteriormente.

A resposta da requisição virá no seguinte formato:

```json
{
  "id": "identificador da credencial",
  "userId": "identificador do usuário",
  "title": "título único da credencial",
  "url": "url de acesso",
  "username": "nome de usuário",
  "password": "senha descriptografada"
}
```

## Rota <span style="color:yellow"> **DELETE** </span>/credentials/:id

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é excluir a credencial solicitada.

O "id" passado nesta rota é o id da credencial, criada na rota **POST** mencionada anteriormente.

A resposta da requisição virá no seguinte formato:

```json
OK
```

# Rotas de notas seguras:

## Rota <span style="color:yellow"> **POST** </span>/notes

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é criar notas seguras, que são informações livres em formato de texto.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "title": "título único de identificação da nota com no máximo 50 caracteres", //string
  "text": "nota segura, com no máximo 1000 caracteres" //string
}
```

## Rota <span style="color:yellow"> **GET** </span>/notes

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é listar todas as notas seguras cadastradas pelo usuário.

A resposta da requisição virá no seguinte formato:

```json
[
  {
    "id": "identificador da nota",
    "userId": "identificador do usuário",
    "title": "título único da nota",
    "text": "texto da nota segura"
  }
]
```

## Rota <span style="color:yellow"> **GET** </span>/notes/:id

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é listar apenas a nota segura solicitada.

O "id" passado nesta rota é o id da nota segura, criada na rota **POST** mencionada anteriormente.

A resposta da requisição virá no seguinte formato:

```json
{
  "id": "identificador da nota",
  "userId": "identificador do usuário",
  "title": "título único da nota",
  "text": "texto da nota segura"
}
```

## Rota <span style="color:yellow"> **DELETE** </span>/notes/:id

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é excluir a nota segura solicitada.

O "id" passado nesta rota é o id da nota segura, criada na rota **POST** mencionada anteriormente.

A resposta da requisição virá no seguinte formato:

```json
OK
```

# Rotas de cartões de crédito:

## Rota <span style="color:yellow"> **POST** </span>/cards

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é criar cartões que representam cartões de crédito, débito ou ambos.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "number": "número impresso no cartão, com 16 caracteres numéricos", //string
  "password": "senha de acesso do cartão", //string
  "title": "título único do cartão", //string
  "cardName": "nome de acesso impresso no cartão", //string
  "cvv": "card verification value impresso no cartão, com 3 caracteres numéricos", //string
  "expirationDate": "data de expiração impresso no cartão no formato MM/AA ou MM-AA ou MM.AA", //string
  "isVirtual": "true caso o cartão seja virtual", //boolean
  "type": "tipo do cartão, sendo válido apenas 'credit', 'debt' ou 'both'" //string
}
```

## Rota <span style="color:yellow"> **GET** </span>/cards

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é listar todos os cartões cadastrados pelo usuário.

A resposta da requisição virá no seguinte formato:

```json
[
  {
    "id": "identificador do cartão",
    "userId": "identificador do usuário",
    "number": "número impresso no cartão, com 16 caracteres numéricos",
    "password": "senha de acesso do cartão descriptografada",
    "title": "título único do cartão",
    "cardName": "nome de acesso impresso no cartão",
    "cvv": "card verification value descriptografado",
    "expirationDate": "data de expiração impresso no cartão no formato MM/AA ou MM-AA ou MM.AA",
    "isVirtual": "true caso o cartão seja virtual",
    "type": "tipo do cartão, sendo válido apenas 'credit', 'debt' ou 'both'"
  }
]
```

## Rota <span style="color:yellow"> **GET** </span>/cards/:id

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é listar apenas o cartão solicitado.

O "id" passado nesta rota é o id da cartão, criado na rota **POST** mencionada anteriormente.

A resposta da requisição virá no seguinte formato:

```json
{
  "id": "identificador do cartão",
  "userId": "identificador do usuário",
  "number": "número impresso no cartão, com 16 caracteres numéricos",
  "password": "senha de acesso do cartão descriptografada",
  "title": "título único do cartão",
  "cardName": "nome de acesso impresso no cartão",
  "cvv": "card verification value descriptografado",
  "expirationDate": "data de expiração impresso no cartão no formato MM/AA ou MM-AA ou MM.AA",
  "isVirtual": "true caso o cartão seja virtual",
  "type": "tipo do cartão, sendo válido apenas 'credit', 'debt' ou 'both'"
}
```

## Rota <span style="color:yellow"> **DELETE** </span>/cards/:id

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é excluir o cartão solicitado.

O "id" passado nesta rota é o id da cartão, criado na rota **POST** mencionada anteriormente.

A resposta da requisição virá no seguinte formato:

```json
OK
```

# Rotas de wi-fi's:

## Rota <span style="color:yellow"> **POST** </span>/wifi

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é criar um novo wi-fi.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "title": "título único do wi-fi", //string
  "username": "nome de acesso para login no wi-fi", //string
  "password": "senha de acesso do wi-fi" //string
}
```

## Rota <span style="color:yellow"> **GET** </span>/wifi

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é listar todos os acessos de wi-fi's cadastrados pelo usuário.

A resposta da requisição virá no seguinte formato:

```json
[
  {
    "id": "identificador do cartão",
    "userId": "identificador do usuário",
    "title": "título único do wi-fi",
    "username": "nome de acesso para login no wi-fi",
    "password": "senha de acesso do wi-fi descriptografada"
  }
]
```

## Rota <span style="color:yellow"> **GET** </span>/wifi/:id

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é listar apenas o acesso de wi-fi solicitado.

O "id" passado nesta rota é o id do wi-fi, criado na rota **POST** mencionada anteriormente.

A resposta da requisição virá no seguinte formato:

```json
  {
    "id": "identificador do cartão",
    "userId": "identificador do usuário",
    "title": "título único do wi-fi",
    "username": "nome de acesso para login no wi-fi",
    "password": "senha de acesso do wi-fi descriptografada"
  }
```

## Rota <span style="color:yellow"> **DELETE** </span>/wifi/:id

Essa é uma rota autenticada com um header http do tipo "Authorization". Sua função é excluir o acesso de wifi solicitado.

O "id" passado nesta rota é o id do wi-fi, criado na rota **POST** mencionada anteriormente.

A resposta da requisição virá no seguinte formato:

```json
OK
```
