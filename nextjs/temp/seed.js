"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("./prisma");
function seed() {
    return __awaiter(this, void 0, void 0, function () {
        var titleList, isbnList, authorList, editionList, yearList, categoryList, pagesList, languageList, sinopseList, thumbnailList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    titleList = [
                        "Princípios de Sistemas de Informação",
                        "Sistemas de Informação Gerenciais: Administrando a Empresa Digital",
                        "Cálculo: Volume 1",
                        "Álgebra Linear com Aplicações",
                        "Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos",
                        "Física I: Mecânica (Volume 1)",
                        "Código limpo: habilidades práticas do Agile software",
                    ];
                    isbnList = [
                        "655558405X",
                        "8582606028",
                        "6555584017",
                        "8540701693",
                        "8573076100",
                        "854300568X",
                        "8576082675",
                    ];
                    authorList = [
                        "George W. Reynolds",
                        "Kenneth C. Laudon",
                        "James Stewart",
                        "Howard Anton, Chris Rorres",
                        "Erich Gamma / Richard Helm / Ralph Johnson / John Vissides",
                        "Hugh D. Young / Roger A. Freedman",
                        "Robert C. Martin",
                    ];
                    editionList = [14, 17, 9, 10, 1, 14, 1];
                    yearList = [2021, 2022, 2021, 2012, 1994, 2015, 2009];
                    categoryList = "Engenharias e Tecnologia";
                    pagesList = [600, 648, 706, 786, 416, 448, 425];
                    languageList = [
                        "Português",
                        "Português",
                        "Português",
                        "Português",
                        "Português",
                        "Português",
                        "Português",
                    ];
                    sinopseList = [
                        "Esta edição de Princípios de sistemas de informação oferece a cobertura tradicional de conceitos de informática, mas coloca o material no contexto de atender às necessidades de empresas e organizações. Colocar os conceitos de sistemas de informação neste contexto e assumir uma perspectiva de gestão sempre diferenciou este livro de outros de informática, tornando-o atraente não apenas para os alunos com especialização em sistema de informação de gestão, mas também para estudantes de outras áreas de estudo. O texto não é excessivamente técnico, mas trata do papel desempenhado pelos sistemas de informação em uma organização e os princípios-chave que um gestor ou especialista em tecnologia precisa saber para ser bem-sucedido.",
                        "Esta nova edição de Sistemas de informação gerenciais foi completamente atualizada para refletir as mais recentes mudanças na indústria e na tecnologia da área. O livro conta com novos casos de abertura e de fechamento e com sessões interativas. Oferece ainda dados de pesquisas recentes sobre o assunto, incluindo uma abordagem atualizada sobre inteligência artificial, uma avaliação do impacto da pandemia do coronavírus sobre os sistemas de informação e uma perspectiva detalhada de big data, Internet das Coisas e computação em nuvem.",
                        "Nesta 9ª edição, assim como em todas as anteriores, os autores mantêm a tradição de escrever um livro que auxilie os estudantes a descobrir o cálculo – tanto por sua utilidade prática, como por sua surpreendente beleza. O intuito é transmitir ao leitor uma ideia da utilidade do cálculo, assim como promover o desenvolvimento de sua habilidade técnica. Ao mesmo tempo, os autores empenharam-se em valorizar a beleza intrínseca do assunto. Não há dúvida de que Newton experimentou uma sensação de triunfo quando fez suas grandes descobertas. O objetivo desta obra é fazer que os estudantes compartilhem um pouco desse entusiasmo.",
                        "Álgebra Linear com Aplicações, 10.ed., apresenta os fundamentos da álgebra linear. O texto foi escrito de forma que não é necessário conhecimento de Cálculo para usar e entender o conteúdo; quando esse requisito for desejável, isso está destacado (esses exercícios e exemplos podem ser omitidos sem prejuízo à continuidade do aprendizado). Também não é exigido o uso de recursos computacionais, mas para aqueles que gostam de MATLAB, Maple, Mathematica ou calculadoras com funcionalidade para álgebra linear estão incluídos exercícios no final dos capítulos que permitem um aprofundamento usando tais ferramentas. O último capítulo cobre vinte aplicações de álgebra linear das mais diversas áreas: administração, economia, física, ciência da computação, ecologia, genética e outras. As aplicações são independentes e cada uma inclui uma lista de pré-requisitos matemáticos.",
                        "Catálogo de soluções simples e sucintas para os problemas mais freqüentes na área de projeto, assinado por quatro profissionais com grande experiência em software orientado a objetos. Um best-seller mundial.",
                        "Desde sua primeira edição, esta tem sido uma obra de referência por causa de sua ênfase nos princípios fundamentais de física e em como aplicá-los. Sua clareza e didática minuciosa, assim como a extensa gama de exercícios e exemplos explicativos, desenvolvem nos alunos habilidades de identificação, estabelecimento, execução e avaliação de problemas.",
                        "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo: Habilidades Práticas do Agile Software. Martin se reuniu com seus colegas do Mentor Object para destilar suas melhores e mais ágeis práticas de limpar códigos “dinamicamente” em um livro que introduzirá gradualmente dentro de você os valores da habilidade de um profissional de softwares e lhe tornar um programador melhor –mas só se você praticar.Que tipo de trabalho você fará? Você lerá códigos aqui, muitos códigos. E você deverá descobrir o que está correto e errado nos códigos. E, o mais importante, você terá de reavaliar seus valores profissionais e seu comprometimento com o seu ofício.",
                    ];
                    thumbnailList = [
                        "https://m.media-amazon.com/images/I/71+Xl9bj1yL._SY466_.jpg",
                        "https://m.media-amazon.com/images/I/81ZQ2HJd5qL._SY466_.jpg",
                        "https://m.media-amazon.com/images/I/81SuEoiJXlL._SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/41yx7ymIxDL._SY445_SX342_.jpg",
                        "https://m.media-amazon.com/images/I/81RXMnEXrdL._SL1500_.jpg",
                        "https://m.media-amazon.com/images/I/413jco0ET5L._SY445_SX342_.jpg",
                        "https://m.media-amazon.com/images/I/41IRFCLk-kL._SY445_SX342_.jpg",
                    ];
                    return [4 /*yield*/, prisma_1.prisma.user.create({
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
                                image: "https://lh3.googleusercontent.com/a/ACg8ocIfPM3yLTHd18a0OrXct4XsPhGr1ZTD-Yu_78bRhm4NI4J7=s96-c",
                            },
                        })];
                case 1:
                    _a.sent();
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < isbnList.length)) return [3 /*break*/, 5];
                    return [4 /*yield*/, prisma_1.prisma.book.create({
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
                        })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    console.log("Seed completed successfully");
                    return [2 /*return*/];
            }
        });
    });
}
seed().catch(function (e) {
    console.error(e);
    process.exit(1);
});
