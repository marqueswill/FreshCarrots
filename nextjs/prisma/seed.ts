import { Book, prisma } from "./prisma";

async function seed() {
  const titleList = [
    "Princípios de Sistemas de Informação",
    "Sistemas de Informação Gerenciais: Administrando a Empresa Digital",
    "Cálculo: Volume 1",
    "Álgebra Linear com Aplicações",
    "Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos",
    "Física I: Mecânica (Volume 1)",
    "Código limpo: habilidades práticas do Agile software",
  ];
  const isbnList = [
    "655558405X",
    "8582606028",
    "6555584017",
    "8540701693",
    "8573076100",
    "854300568X",
    "8576082675",
  ];
  const authorList = [
    "George W. Reynolds",
    "Kenneth C. Laudon",
    "James Stewart",
    "Howard Anton, Chris Rorres",
    "Erich Gamma / Richard Helm / Ralph Johnson / John Vissides",
    "Hugh D. Young / Roger A. Freedman",
    "Robert C. Martin",
  ];
  const editionList = [14, 17, 9, 10, 1, 14, 1];
  const yearList = [2021, 2022, 2021, 2012, 1994, 2015, 2009];
  const categoryList = "Engenharias e Tecnologia";
  const pagesList = [600, 648, 706, 786, 416, 448, 425];
  const languageList = [
    "Português",
    "Português",
    "Português",
    "Português",
    "Português",
    "Português",
    "Português",
  ];
  const sinopseList = [
    "Esta edição de Princípios de sistemas de informação oferece a cobertura tradicional de conceitos de informática, mas coloca o material no contexto de atender às necessidades de empresas e organizações. Colocar os conceitos de sistemas de informação neste contexto e assumir uma perspectiva de gestão sempre diferenciou este livro de outros de informática, tornando-o atraente não apenas para os alunos com especialização em sistema de informação de gestão, mas também para estudantes de outras áreas de estudo. O texto não é excessivamente técnico, mas trata do papel desempenhado pelos sistemas de informação em uma organização e os princípios-chave que um gestor ou especialista em tecnologia precisa saber para ser bem-sucedido.",
    "Esta nova edição de Sistemas de informação gerenciais foi completamente atualizada para refletir as mais recentes mudanças na indústria e na tecnologia da área. O livro conta com novos casos de abertura e de fechamento e com sessões interativas. Oferece ainda dados de pesquisas recentes sobre o assunto, incluindo uma abordagem atualizada sobre inteligência artificial, uma avaliação do impacto da pandemia do coronavírus sobre os sistemas de informação e uma perspectiva detalhada de big data, Internet das Coisas e computação em nuvem.",
    "Nesta 9ª edição, assim como em todas as anteriores, os autores mantêm a tradição de escrever um livro que auxilie os estudantes a descobrir o cálculo – tanto por sua utilidade prática, como por sua surpreendente beleza. O intuito é transmitir ao leitor uma ideia da utilidade do cálculo, assim como promover o desenvolvimento de sua habilidade técnica. Ao mesmo tempo, os autores empenharam-se em valorizar a beleza intrínseca do assunto. Não há dúvida de que Newton experimentou uma sensação de triunfo quando fez suas grandes descobertas. O objetivo desta obra é fazer que os estudantes compartilhem um pouco desse entusiasmo.",
    "Álgebra Linear com Aplicações, 10.ed., apresenta os fundamentos da álgebra linear. O texto foi escrito de forma que não é necessário conhecimento de Cálculo para usar e entender o conteúdo; quando esse requisito for desejável, isso está destacado (esses exercícios e exemplos podem ser omitidos sem prejuízo à continuidade do aprendizado). Também não é exigido o uso de recursos computacionais, mas para aqueles que gostam de MATLAB, Maple, Mathematica ou calculadoras com funcionalidade para álgebra linear estão incluídos exercícios no final dos capítulos que permitem um aprofundamento usando tais ferramentas. O último capítulo cobre vinte aplicações de álgebra linear das mais diversas áreas: administração, economia, física, ciência da computação, ecologia, genética e outras. As aplicações são independentes e cada uma inclui uma lista de pré-requisitos matemáticos.",
    "Catálogo de soluções simples e sucintas para os problemas mais freqüentes na área de projeto, assinado por quatro profissionais com grande experiência em software orientado a objetos. Um best-seller mundial.",
    "Desde sua primeira edição, esta tem sido uma obra de referência por causa de sua ênfase nos princípios fundamentais de física e em como aplicá-los. Sua clareza e didática minuciosa, assim como a extensa gama de exercícios e exemplos explicativos, desenvolvem nos alunos habilidades de identificação, estabelecimento, execução e avaliação de problemas.",
    "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo: Habilidades Práticas do Agile Software. Martin se reuniu com seus colegas do Mentor Object para destilar suas melhores e mais ágeis práticas de limpar códigos “dinamicamente” em um livro que introduzirá gradualmente dentro de você os valores da habilidade de um profissional de softwares e lhe tornar um programador melhor –mas só se você praticar.Que tipo de trabalho você fará? Você lerá códigos aqui, muitos códigos. E você deverá descobrir o que está correto e errado nos códigos. E, o mais importante, você terá de reavaliar seus valores profissionais e seu comprometimento com o seu ofício.",
  ];
  const thumbnailList = [
    "https://m.media-amazon.com/images/I/71+Xl9bj1yL._SY466_.jpg",
    "https://m.media-amazon.com/images/I/81ZQ2HJd5qL._SY466_.jpg",
    "https://m.media-amazon.com/images/I/81SuEoiJXlL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/41yx7ymIxDL._SY445_SX342_.jpg",
    "https://m.media-amazon.com/images/I/81RXMnEXrdL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/413jco0ET5L._SY445_SX342_.jpg",
    "https://m.media-amazon.com/images/I/41IRFCLk-kL._SY445_SX342_.jpg",
  ];

  await prisma.user.create({
    data: {
      cpf: "08960522175",
      email: "willyanmarquesmelo@gmail.com",
      isAdmin: true,
      name: "Willyan",
      password: "123456",
      phoneNumber: "123456",
      username: "warmelw",
      college: "UnB",
      course: "Engenharia da Computação",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocIfPM3yLTHd18a0OrXct4XsPhGr1ZTD-Yu_78bRhm4NI4J7=s96-c",
    },
  });

  for (let i = 0; i < isbnList.length; i++) {
    await prisma.book.create({
      data: {
        isbn: isbnList[i],
        title: titleList[i],
        author: authorList[i],
        edition: editionList[i],
        year: yearList[i],
        category: categoryList,
        pages: pagesList[i],
        language: languageList[i],
        sinopse: sinopseList[i],
        thumbnail: thumbnailList[i],
      },
    });
  }

  await prisma.userBook.create({
    data: {
      condition: "Novo",
      forLoan: true,
      forTrade: true,
      avaliable: true,
      solicitations: 0,
      maxPeriod: 14,
      email: "willyanmarquesmelo@gmail.com",
      isbn: "655558405X",
    },
  });

  console.log("Seed completed successfully");
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
