# ToDo List
## frontend
```
$ cd frontend
$ npm i
$ npm start
```
Перейти на http://localhost:3000/

## backend
```
$ cd backend
$ python3 -m venv venv
```
On Windows:
```
> venv\Scripts\activate.bat
```
On Unix or MacOS:
```
$ source venv/bin/activate
```

```
$ pip install -r requirements.txt
$ cd project
$ python manage.py migrate
$ python manage.py runserver
```
Редактировать БД: http://127.0.0.1:8000/admin

Создать пользователя:
```
python manage.py createsuperuser
```