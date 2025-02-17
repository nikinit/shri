## Формат данных для шаблонов
В файле `data.json` представлен массив с данными для 11 слайдов, каждый рендерится при помощи одного из пяти шаблонов.

### Cлайд
* `alias` — алиас шаблона, возможные значения: `leaders`, `vote`, `activity`, `chart`, `diagram`
* `data` — данные слайда, которые должен отрендерить заданный шаблон

### Участник команды
* `name` — имя участника
* `avatar` — имя файла с аватаркой участника
* `valueText` — строка, содержит значение и единицы (необязательно), например строки и голоса

### Лидеры, алиас шаблона `leaders`
* `title` — заголовок
* `subtitle` — подзаголовок, в нашем случае название спринта
* `emoji` — используется для акцентов в интерфейсе
* `selectedUserId` — необязательное, содержит ID выбранного участника, отображение результатов голосования
* `users` — упорядоченный массив с участниками команды

### Голосование, алиас шаблона `vote`
* `title` — заголовок
* `subtitle` — подзаголовок, в нашем случае название спринта
* `emoji` — используется для акцентов в интерфейсе
* `selectedUserId` — необязательное, содержит ID выбранного ранее участника
* `offset` — необязательное, индекс пользователя в массиве, которого нужно отобразить первым
* `users` — упорядоченный массив с участниками голосования

### Статистика, алиас шаблона `chart`
* `title` — заголовок
* `subtitle` — подзаголовок, в нашем случае название спринта
* `users` — массив с участниками команды
* `values` — упорядоченный массив предыдущих, текущего и следующих периодов, элемент массива содержит: 
    * `title` — заголовок периода
    * `value` — число, значение для периода
    * `active` — булев признак, является ли элемент текущим

### Круговая диаграмма, алиас шаблона `diagram`
* `title` — заголовок
* `subtitle` — подзаголовок, в нашем случае название спринта
* `totalText` — строка, содержит значение и единицы
* `differenceText` — строка, содержит разницу со значением предыдущего периода (спринта) и единицы
* `categories` — категории, по которым выводится статистика, категория содержит:
    * `title` — заголовок категории
    * `valueText` — строка, содержит значение и единицы измерения
    * `differenceText` — строка, значение разницы с предыдущим периодом и единицы по категории

### Карта активности, алиас шаблона `activity`
* `title` — заголовок
* `subtitle` — подзаголовок, в нашем случае название спринта
* `data` — данные по дням недели, один день — упорядоченный массив из 24 элементов, соответствуют часам

