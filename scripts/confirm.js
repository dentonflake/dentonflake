const params = new URLSearchParams(window.location.search);
const textHeading = document.getElementById('heading');
const textMessage = document.getElementById('message');
const buttonReturn = document.getElementById('return');

const parseURLSearchParams = (params) => {

    const user = params.get('user');
    const message = params.get('message');

    if (!user || !message) {
        window.location.href = '../index.html'
        return {};
    }

    return { user, message };
}

const getMessageStats = (message) => {

    const characters = Array.from(message).map(char => char.toLowerCase());

    const vowels = characters.filter(char => ['a', 'e', 'i', 'o', 'u'].includes(
        char
    ));

    const characterTotals = characters.reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    const [mostUsedCharacter] = Object.entries(characterTotals).reduce(
        ([mostChar, maxCount], [char, count]) => {
            return count > maxCount ? [char, count] : [mostChar, maxCount];
        },
        ['', 0]
    );

    return {
        characters,
        vowels,
        mostUsedCharacter
    }
}

const loadMessagesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('messages')) || [];
}

const saveMessageToLocalStorage = (message) => {

    const messages = loadMessagesFromLocalStorage();

    messages.push(message);

    localStorage.setItem('messages', JSON.stringify(messages));
}

const { user, message } = parseURLSearchParams(params);
const { characters, vowels, mostUsedCharacter } = getMessageStats(message);

saveMessageToLocalStorage(message);

const messages = loadMessagesFromLocalStorage();

textHeading.innerHTML = `Thank you <span>${user}!</span>`;
textMessage.textContent = `You have submitted ${messages.length} messages in total. This message had ${characters.length} characters, ${vowels.length} vowels, and your most used character was a "${mostUsedCharacter}".`;

// Event handler
buttonReturn.addEventListener('click', () => {
    window.location.href = '../index.html'
});