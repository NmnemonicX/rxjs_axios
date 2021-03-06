# Домашнее задание к занятию «2.5 Валидация и обработка ошибок. Interceptors, pipes»

**Правила выполнения домашней работы:**
* Выполняйте домашнее задание в отдельной ветке проекта на гитхабе.
* В поле для сдачи работы прикрепите ссылку на ваш проект в Git.
* Присылать на проверку можно каждую задачу по отдельности или все задачи вместе.
* Во время проверки по частям ваша домашняя работа будет со статусом «На доработке».
* Любые вопросы по решению задач задавайте в чате учебной группы.

**Задание 1**

Создать Interceptor и подключить его в локальной или глобальной области видимости для перехвата и обработки исключений.
Interceptor должен оборачивать результат при успешном запросе в следующую структуру:
````
{
    status: "success",
    data: ... // данные из контроллера
}
````
При запросе с ошибкой в следующую структуру:
````
{
    status: "fail",
    data: ... // сведения об ошибке
}
````
**Задание 2**

Создать Pipe и подключить его в локальной или глобальной области видимости для валидации данных в body, params или query запроса, используя соответствующие декораторы (@Body, @Query, @Params).

**Задание 3**

Создать метод валидации данных входящего запроса в Pipe с использованием библиотеки Joi или Class-validator и DTO.

**Задание 4**

Создать Exception Filter и подключить его в локальной или глобальной области видимости для перехвата и формирования унифицированных сообщений об исключениях.
Сообщение должно иметь следующий формат:
````
{
    timestamp: ..., // дата и время
    status: "fail",
    data: ..., // сведения об ошибке
    code: ..., // код ошибки при наличии в объекте ошибки. В случае отсутствия, по умолчанию code = 500
}
````
