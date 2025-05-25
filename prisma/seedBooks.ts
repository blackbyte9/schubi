import axios from 'axios';


export const initialBooks = [
    { isbn: '9783464311066', name: 'Go Ahead 5' },
    { isbn: '9783141150452', name: 'Diercke Geographie 5' },
    { isbn: '9783507811607', name: 'Mathematik heute 5' },
    { isbn: '9783126953283', name: 'Leben leben 5' },
    { isbn: '9783507777705', name: 'Erlebnis Biologie 5' },
    { isbn: '9783060673445', name: 'Deutschbuch 5' },
    { isbn: '9783532701409', name: 'Herausforderungen 5' },
    { isbn: '9783060655458', name: 'Religion verstehen 5' },
    { isbn: '9783464311073', name: 'Go Ahead 6' },
    { isbn: '9783507811706', name: 'Mathematik heute' },
    { isbn: '9783060673452', name: 'Deutschbuch 6' },
    { isbn: '9783060649068', name: 'Geschichte 6' },
    { isbn: '9783141150513', name: 'Erdkunde 6' },
    { isbn: '9783507777781', name: 'Biologie 6' },
    { isbn: '9783060655472', name: 'kath. Religion 6' },
    { isbn: '9783126953290', name: 'Ethik 6' },
    { isbn: '9783532701416', name: 'Herausforderungen 6, Evangelische Religion' },
    { isbn: '9783120071884', name: 'EG- Starke Seiten 7' },
    { isbn: '9783661670072', name: 'Physik 7 I' },
    { isbn: '9783141236231', name: 'Mathematik 7 I' },
    { isbn: '9783507777866', name: 'Erlebnis Biologie 7' },
    { isbn: '9783141121292', name: 'Horizonte 7' },
    { isbn: '9783126953306', name: 'Leben leben 7' },
    { isbn: '9783126239011', name: 'Tous ensemble 1' },
    { isbn: '9783464311172', name: 'Go Ahead 7' },
    { isbn: '9783141150575', name: 'Diercke Geographie 7' },
    { isbn: '9783060673469', name: 'Deutschbuch 7' },
    { isbn: '9783532701423', name: 'Herausforderungen 7' },
    { isbn: '9783896504678', name: 'Alles Klar 7II' },
    { isbn: '9783896504692', name: 'Alles Klar 7 IIIa' },
    { isbn: '9783141236323', name: 'Mathematik 7 II/III' },
    { isbn: '9783896504821', name: 'Alles Klar 8II' },
    { isbn: '9783661822112', name: 'startup.WR 8II' },
    { isbn: '9783661200682', name: 'Abenteuer Ethik 8' },
    { isbn: '9783896504852', name: 'Alles Klar 8 IIIa' },
    { isbn: '9783661055084', name: 'Chemie 8I' },
    { isbn: '9783661670287', name: 'Physik 8 II/III' },
    { isbn: '9783464311189', name: 'Go Ahead 8' },
    { isbn: '9783126239110', name: 'Tous ensemble 2' },
    { isbn: '9783507777941', name: 'Erlebnis Biologie 8' },
    { isbn: '9783661670089', name: 'Physik 8 I' },
    { isbn: '9783141150636', name: 'Geographie 8' },
    { isbn: '9783060655496', name: 'Religion verstehen 7' },
    { isbn: '9783141121308', name: 'Horizonte 8' },
    { isbn: '9783141236392', name: 'Mathematik 8 I' },
    { isbn: '9783141236484', name: 'Mathematik 8 II/III' },
    { isbn: '9783060673476', name: 'Deutschbuch 8' },
    { isbn: '9783464311202', name: 'Go Ahead 9' },
    { isbn: '9783141121315', name: 'Geschichte  9' },
    { isbn: '9783141229066', name: 'Deutsch 9' },
    { isbn: '9783661055091', name: 'Chemie 9 I' },
    { isbn: '9783661822129', name: 'WR 9 II' },
    { isbn: '9783661822136', name: 'WR 9 I/III' },
    { isbn: '9783896504883', name: 'BwR II' },
    { isbn: '9783532701430', name: 'Herausforderungen 8 EvR' },
    { isbn: '9783532701447', name: 'Herausforderungen 9 EvR' },
    { isbn: '9783141236644', name: 'Mathe 9 II/III' },
    { isbn: '9783126239110', name: 'Tous Ensemble 2' },
    { isbn: '9783126239219', name: 'Tous ensemble 3' },
    { isbn: '9783661200699', name: 'Ethik 9' },
    { isbn: '9783141150698', name: 'Geographie 9' },
    { isbn: '9783141236552', name: 'Mathe 9 I' },
    { isbn: '9783661670096', name: 'Physik 9 I' },
    { isbn: '9783060655519', name: 'Religion verstehen 8' },
    { isbn: '9783661670294', name: 'Physik 9 II/III' },
    { isbn: '9783661055114', name: 'Chemie 9 II/III' },
    { isbn: '9783126239318', name: 'Tous ensemble 4' },
    { isbn: '9783141229660', name: 'Praxis Sprache 10' },
    { isbn: '9783507778108', name: 'Erlebnis Biologie 10' },
    { isbn: '9783141121322', name: 'Horizonte 10' },
    { isbn: '9783464311219', name: 'Go Ahead 10' },
    { isbn: '9783661055107', name: 'Chemie 10 I' },
    { isbn: '9783661055121', name: 'Chemie 10 II' },
    { isbn: '9783532701454', name: 'Herausforderungen 10' },
    { isbn: '9783896504913', name: 'BwR 10 II' },
    { isbn: '9783661200705', name: 'Ethik 10' },
    { isbn: '9783661670300', name: 'Physik 10 II/III' },
    { isbn: '9783141236712', name: 'Mathe 10 I' },
    { isbn: '9783637001220', name: 'Newton PLUS Physik 10' },
    { isbn: '9783141236804', name: 'Mathematik 10/2' },
    { isbn: '9783141236057', name: 'Mathematik 5' },
    { isbn: '9783141236149', name: 'Mathematik 6' },
    { isbn: '9783060655533', name: 'Religion verstehen 9' },
];

async function fetchBookTitle(isbn: string): Promise<string | null> {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
        const bookInfo = response.data.items?.[0]?.volumeInfo;
        return bookInfo?.title || null;
    } catch (error) {
        console.error(`Error fetching title for ISBN ${isbn}:`, error);
        return null;
    }
}

export async function updateBookTitles(books: { isbn: string; name: string }[]) {
    for (const book of books) {
        const officialTitle = await fetchBookTitle(book.isbn);
        if (officialTitle) {
            book.name = officialTitle;
        }
    }
}

export const uniqueBooks = [...new Map(initialBooks.map(book => [book.isbn, book])).values()];
