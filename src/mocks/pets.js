import dunga from '../assets/Dunga.png';
import felicia from '../assets/Felicia.png';
import sirius from '../assets/Sirius.png';
import fiona from '../assets/Fiona.png';

import dunga1 from '../assets/Dunga1.png';
import dunga2 from '../assets/Dunga2.png';

import felicia1 from '../assets/Felicia1.png';
import felicia2 from '../assets/Felicia2.png';

import sirius1 from '../assets/Sirius1.png';
import sirius2 from '../assets/Sirius2.png';

import fiona1 from '../assets/Fiona1.png';
import fiona2 from '../assets/Fiona2.png';

const pets = [
    {
        nome: 'Dunga',
        idade: '2 anos',
        porte: 'Porte pequeno',
        imagem: dunga,
        caracteristicas: 'Calmo e educado',
        localidade: 'Rio de Janeiro (RJ)',
        descricao: {
            informacoes: ['Se dá bem com outros animais', 'Se dá bem com crianças mais velhas mas se assusta com bebes', 'Gosta de brincar e passear'],
            resumo: 'Dunga é encantador, conquista a todos com sua serenidade. Tem pelo macio e olhos expressivos que revelam a doçura de sua personalidade. Adora passar o tempo relaxando ao lado de seus humanos ou em um cantinho ensolarado. Este companheiro leal e afetuoso vai trazer uma atmosfera alegre para qualquer lar que tenha a sorte de tê-lo como parte da família!',
            fotos: [dunga1, dunga2],
        }
    },
    {
        nome: 'Felicia',
        idade: '3 meses',
        porte: 'Porte pequeno',
        imagem: felicia,
        caracteristicas: 'Ativa e carinhosa',
        localidade: 'Nova Iguaçu (RJ)',
        descricao: {
            informacoes: ['Se dá bem com outros gatos', 'Gosta de dormir e brincar'],
            resumo: 'Felicia é uma gatinha muito carinhosa e brincalhona. Ela adora brincar com bolinhas e com os outros gatos. Ela é muito esperta e aprende rápido. Ela é muito curiosa e adora explorar a casa. Ela é muito carinhosa e adora dormir no colo. Ela é muito companheira e vai fazer muita companhia para a família que adotá-la.',
            fotos: [felicia1, felicia2],
        }
    },
    {
        nome: 'Sirius',
        idade: '6 meses',
        porte: 'Porte grande',
        imagem: sirius,
        caracteristicas: 'Ativo e educado',
        localidade: 'Duque de Caxias (RJ)',
        descricao: {
            informacoes: ['Se dá bem com outros gatos', 'Gosta de dormir e brincar'],
            resumo: 'Sirius é um cachorro muito carinhoso e brincalhão. Ele é muito companheiro e vai fazer muita companhia para a família que adotá-la.',
            fotos: [sirius1, sirius2],
        }
    },
    {
        nome: 'Fiona',
        idade: '3 anos',
        porte: 'Porte pequeno',
        imagem: fiona,
        caracteristicas: 'Calma e carinhosa',
        localidade: 'São Gonçalo (RJ)',
        descricao: {
            informacoes: ['Se dá bem com outros gatos', 'Gosta de dormir e brincar'],
            resumo: 'Fiona é uma cachorra muito carinhosa e brincalhona. Ela é muito companheira e vai fazer muita companhia para a família que adotá-la.',
            fotos: [fiona1, fiona2],
        }
    }
];

export default pets;