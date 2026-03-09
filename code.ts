figma.showUI(__html__);
figma.ui.resize(256, 304);

const initTextNodes = figma.currentPage.selection.filter(n => n.type === 'TEXT');
figma.ui.postMessage({ type: 'selectionchange', hasValidSelection: initTextNodes.length > 0, selectionCount: initTextNodes.length });


// ─── DATASET ────────────────────────────────────────────
const femaleNames: string[] = ["Maria", "Ana", "Francisca", "Júlia", "Antônia", "Juliana", "Adriana", "Fernanda", "Márcia", "Patrícia", "Amanda", "Alice", "Letícia", "Aline", "Laura", "Bruna", "Mariana", "Jéssica", "Sandra", "Beatriz", "Vitória", "Camila", "Larissa", "Gabriela", "Luciana", "Vanessa", "Helena", "Luana", "Isabela", "Vera", "Cláudia", "Renata", "Sônia", "Simone", "Eliane", "Débora", "Rafaela", "Rita", "Cristiane", "Sara", "Carla", "Rosângela", "Natália", "Luiza", "Jaqueline", "Sofia", "Daniela", "Raquel", "Andréia", "Lara", "Bianca", "Fabiana", "Josefa", "Lívia", "Ângela", "Marlene", "Lorena", "Rosa", "Lúcia", "Aparecida", "Elaine", "Raimunda", "Joana", "Alessandra", "Terezinha", "Yasmin", "Flávia", "Daniele", "Thaís", "Priscila", "Marina", "Regina", "Viviane", "Luzia", "Isabel", "Paula", "Silvana", "Sophia", "Isadora", "Sueli", "Daiane", "Érica", "Milena", "Caroline", "Tatiane", "Janaína", "Andressa", "Valentina", "Mônica", "Marta", "Michele", "Sabrina", "Solange", "Geovana", "Edna", "Marli", "Bárbara", "Eduarda", "Sílvia", "Manuela", "Rosana", "Ester", "Carolina", "Valéria", "Eliana", "Cecília", "Heloísa", "Nicole", "Laís", "Anna", "Cristina", "Célia", "Tereza", "Rebeca", "Andréa", "Kátia", "Tânia", "Denise", "Elisângela", "Roseli", "Marilene", "Yasmim", "Brenda", "Gisele", "Fátima", "Eva", "Marcela", "Roberta", "Emily", "Pâmela", "Raissa", "Luciene", "Giovana", "Josiane", "Ingrid", "Tatiana", "Gabriele", "Clara", "Isabella", "Talita", "Emilly", "Vânia", "Vilma", "Melissa", "Alana", "Eloá", "Taís", "Karina", "Tamires", "Kelly", "Cíntia", "Mirian", "Angélica", "Ivone", "Verônica", "Samara", "Elza", "Rosilene", "Elisa", "Irene", "Franciele", "Lilian", "Eloísa", "Taína", "Luísa", "Isabele", "Sarah", "Neuza", "Joice", "Cícera", "Ágatha", "Lavínia", "Mayara", "Janete", "Neide", "Elizabete", "Selma", "Cleide", "Leila", "Neusa", "Ísis", "Sebastiana", "Benedita", "Regiane", "Alexandra", "Joelma", "Iara", "Marília", "Margarida", "Giovanna", "Nathália", "Marinalva", "Marisa", "Alícia", "Maiara", "Érika", "Mariane", "Clarice", "Paloma", "Luciane"];

const maleNames: string[] = ["José", "João", "Antônio", "Francisco", "Pedro", "Carlos", "Lucas", "Luiz", "Paulo", "Gabriel", "Marcos", "Davi", "Rafael", "Luis", "Daniel", "Miguel", "Gustavo", "Felipe", "Guilherme", "Eduardo", "Matheus", "Bruno", "Marcelo", "Arthur", "Leonardo", "Rodrigo", "André", "Samuel", "Fernando", "Fábio", "Raimundo", "Vitor", "Manoel", "Mateus", "Leandro", "Thiago", "Anderson", "Márcio", "Ricardo", "Alexandre", "Jorge", "Diego", "Enzo", "Edson", "Vinícius", "Roberto", "Victor", "Tiago", "Sérgio", "Sebastião", "Júlio", "Cláudio", "Nicolas", "Luciano", "Adriano", "Henrique", "Heitor", "Alex", "Renato", "Caio", "Igor", "Geraldo", "Rogério", "Douglas", "Flávio", "Luan", "Ronaldo", "Joaquim", "Danilo", "David", "Bernardo", "Mário", "Robson", "Jeferson", "Cícero", "Maurício", "Wesley", "Alan", "Reginaldo", "Murilo", "Artur", "Marco", "Renan", "Elias", "Gilberto", "Cristiano", "Emerson", "Manuel", "Jean", "Fabrício", "Diogo", "Wilson", "Nelson", "Willian", "Jonas", "Ruan", "Kauan", "Valdir", "Benedito", "Pablo", "Breno", "Emanuel", "Everton", "Lorenzo", "Gilmar", "Mauro", "Alessandro", "Fabiano", "Moisés", "Yuri", "Erick", "Pietro", "Adilson", "Ítalo", "Gilson", "Otávio", "Joel", "Jair", "Severino", "Wagner", "Vicente", "Theo", "Ivan", "Sílvio", "Alisson", "Maicon", "Hélio", "Cleiton", "Reinaldo", "Hugo", "Kauã", "Sandro", "Celso", "Edilson", "Augusto", "Josué", "Juliano", "Vagner", "Gael", "César", "Osvaldo", "Evandro", "Ademir", "Milton", "Vanderlei", "Israel", "Domingos", "Valmir", "Edvaldo", "Valter", "Ryan", "Rian", "Ailton", "Adão", "Wellington", "William", "Ângelo", "Cleber", "Cauã", "Alberto", "Nilton", "Nilson", "Rubens", "Edmilson", "Levi", "Júnior", "Cristian", "Isaac", "Osmar", "Isaque", "Ezequiel", "Jefferson", "Antony", "Ismael", "Jonathan", "Orlando", "Iago", "Kaique", "Michel", "Ícaro", "Isaías", "Gerson", "Aparecido", "Marlon", "Wanderson", "Kaio", "Alexandro", "Jackson", "Natan", "Bryan", "Edivaldo", "Jairo", "Jailson", "Charles", "Natanael", "Álvaro", "Denilson", "Éder", "Juan", "Damião"];

const lastNames: string[] = ["Silva", "Santos", "Oliveira", "Souza", "Pereira", "Ferreira", "Lima", "Alves", "Rodrigues", "Costa", "Sousa", "Gomes", "Nascimento", "Araujo", "Ribeiro", "Almeida", "Jesus", "Barbosa", "Soares", "Carvalho", "Martins", "Lopes", "Vieira", "Rocha", "Dias", "Gonçalves", "Fernandes", "Santana", "Andrade", "Batista", "Nunes", "Freitas", "Conceição", "Melo", "Moreira", "Cardoso", "Reis", "Cruz", "Ramos", "Mendes", "Marques", "Machado", "Rosa", "Brito", "Moraes", "Júnior", "Moura", "Teixeira", "Barros", "Castro", "Borges", "Filho", "Maria", "Aparecida", "Campos", "Miranda", "Bezerra", "Monteiro", "Pinheiro", "Paula", "Cunha", "Pinto", "Leite", "Neto", "Matos", "Farias", "Neves", "Correia", "Duarte", "Viana", "Silveira", "Nogueira", "Morais", "Medeiros", "Tavares", "Coelho", "Azevedo", "Fonseca", "José", "Garcia", "Guimarães", "Pires", "Corrêa", "Macedo", "França", "Amaral", "Xavier", "Assis", "Mota", "Henrique", "Carmo", "Siqueira", "Menezes", "Queiroz", "Aguiar", "Sales", "Braga", "Amorim", "Cavalcante", "Cordeiro", "Dantas", "Abreu", "Carneiro", "Cristina", "Paiva", "Magalhães", "Anjos", "Maciel", "Maia", "Félix", "Camargo", "Faria", "Chaves", "Barreto", "Francisco", "Antônio", "Luz", "Leal", "Carlos", "Sá", "Mendonça", "Sampaio", "Torres", "Cabral", "Vasconcelos", "Bispo", "Chagas", "Sena", "Antunes", "Marinho", "Lemos", "Guedes", "Feitosa", "Pereira", "Freire", "Cândido", "Luiz", "Bastos", "Fátima", "Bueno", "Vitória", "Prado", "Santiago", "Albuquerque", "Figueiredo", "Gabriel", "Trindade", "Brandão", "Arruda", "Diniz", "Pacheco", "Franco", "Passos", "Lira", "Dutra", "Caetano", "Paixão", "Alencar", "Aparecido", "Gonçalves", "Mesquita", "Vicente", "Lourenço", "Augusto", "Coutinho", "Matias", "Lacerda", "Aquino", "Muniz", "Evangelista", "Felipe", "Lucas", "Pontes", "Bento", "Paz", "Gama", "Rezende", "Miguel", "Mello", "Alexandre", "Teles", "Mariano", "Simões", "Peixoto", "Pimentel", "Paulo", "César", "Roberto", "Domingos", "Domingues", "Fagundes", "Galvão", "Vaz", "Pessoa", "Teixeira", "Ferraz", "Vargas", "Furtado", "Paulino", "Inácio"];
// ─── LOGIC ──────────────────────────────────────────────
function generateName(gender: 'random' | 'female' | 'male', includeSurname: boolean): string {
    const resolvedGender = gender === 'random' ? (Math.random() < 0.5 ? 'female' : 'male') : gender;
    const pool = resolvedGender === 'female' ? femaleNames : maleNames;
    const firstName = pool[Math.floor(Math.random() * pool.length)];
    if (!includeSurname) return firstName;
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}

figma.on('selectionchange', () => {
    const textNodes = figma.currentPage.selection.filter(n => n.type === 'TEXT');
    const hasValidSelection = textNodes.length > 0;
    figma.ui.postMessage({ type: 'selectionchange', hasValidSelection, selectionCount: textNodes.length });
});


figma.ui.on('message', async (msg) => {
    if (msg.type !== 'generate') return;
    const { gender, includeSurname, newLayersCount } = msg;
    const selection = figma.currentPage.selection;
    const textNodes = selection.filter(n => n.type === 'TEXT') as TextNode[];
    for (const node of textNodes) {
        if (node.fontName === figma.mixed) continue;
        await figma.loadFontAsync(node.fontName as FontName);
        node.characters = generateName(gender, includeSurname);
    }
    if (newLayersCount > 0) {
        const font: FontName = { family: 'Inter', style: 'Regular' };
        await figma.loadFontAsync(font);
        for (let i = 0; i < newLayersCount; i++) {
            const textNode = figma.createText();
            textNode.fontName = font;
            textNode.characters = generateName(gender, includeSurname);
            textNode.x = figma.viewport.center.x;
            textNode.y = figma.viewport.center.y + (i * 40);
            figma.currentPage.appendChild(textNode);
        }
    }
    figma.notify('Names generated, friend!');
});