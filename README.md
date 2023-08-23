# Instalação do projeto na máquina:
 - Instalar o nodejs, pode ser a versão 16.14.0 ou superior ou a versão 18.10.0 ou superior, download feito aqui https://nodejs.org/en.
 - O package manager utilizado nesse projeto foi o npm.
 - Foi utilizado a versão mais recente do Angular a 16.2.0, para rodar o projeto será necessário instalar essa versão rodar comando npm i -g @angular/cli@latest.
 - Feito os passos anteriores abrir o cmd/powershell na pasta do projeto e rodar o comando npm install.
 *obs: o comando npm install já instala todas as dependências do projeto que estão no package.json, caso queira instalar manualmente o projeto tem apenas 2
 npm install primeng e npm install primeicons
 
# Rodando o projeto
 - Para rodar o projeto local abra o console no visual studio code e rode o comando "ng serve".
 - Caso queira gerar uma versão de deploy utilize o comando "ng build".

# Definição das libs
 - Acabei utilizando a última versão do Angular porque estava testando ela no mês passado, e como eu só tive praticamente ontem a noite pra fazer o projeto decidi utilizar ela mesmo.
 - Decidi usar o primeng porque foi a lib que eu mais utilizei desde que comecei a usar Angular, quase não utilizei os componentes e acabei utilizando mais os ícones mesmo.
 - Utilizei uma estrutura de lazy loading(apanhei um pouco da versão 16 por causa de algumas mudanças) e utilizei um módulo shared que compartilha componentes e serviços
 que são utilizados em diversas páginas.
 - Essa estrutura não é ideal para um projeto desse porte mais queria mostrar que eu tinha experiência com lazy loading.
 - Uma coisa que eu não tive tempo de implementar foi adicionar os dados do usuário no localstorage, então acabei implementando um teste para redirecionar para a home page.


# Versão deploy online
 - Adicionei uma versão de deploy online caso não queira atualizar para a última versão do Angular, segue o link: https://ng-search-ptodf2vex-erikyuri.vercel.app/home
