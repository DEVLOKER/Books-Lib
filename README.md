# Books Lib
Web application for buying books, created using Spring Boot and React.


## Run the project
## Database
- create SQL schema : `bookslib`
- change the username and the password for you SQL database, in the file `backend/src/main/resources/application.properties`, lines `4` & `5`.
### Backend
- `cd backend`
- `mvn spring-boot:run`
- after the server is running, all the tables will create automatically in `bookslib` schema.
if you want to use tested data, use the script `database/testData.sql`
this script will create:
- three users:

| username | password | type  |
| :--- | :---: | ---: |
| `admin@gmail.com` | `admin` | admin |
| `user01@gmail.com` | `1111` | normal user |
| `user02@gmail.com` | `2222` | normal user |

- two categories: `SPRING BOOT`, `Reactjs`.

### Frontend
- `cd frontend && npm install`
- `npm start`

## Screenshots

### Seller
![login page](https://github.com/DEVLOKER/Books-Lib/blob/main/screenshots/login.jpg?raw=true "login page")
![signup page](https://github.com/DEVLOKER/Books-Lib/blob/main/screenshots/signup.jpg?raw=true "signup page")
![publish a book](https://github.com/DEVLOKER/Books-Lib/blob/main/screenshots/publish_book.jpg?raw=true "publish a book")
![seller books](https://github.com/DEVLOKER/Books-Lib/blob/main/screenshots/seller_books.jpg?raw=true "seller books")

### Buyer
![available books list](https://github.com/DEVLOKER/Books-Lib/blob/main/screenshots/books_list.jpg?raw=true "available books list")
![book detail](https://github.com/DEVLOKER/Books-Lib/blob/main/screenshots/book_detail.jpg?raw=true "book detail")
![rate a book ](https://github.com/DEVLOKER/Books-Lib/blob/main/screenshots/rate_book.jpg?raw=true "rate a book")
![report a book](https://github.com/DEVLOKER/Books-Lib/blob/main/screenshots/report_book.jpg?raw=true "report a book")
![whishlist books](https://github.com/DEVLOKER/Books-Lib/blob/main/screenshots/whishlist.jpg?raw=true "whishlist books")
![book price negotiation](https://github.com/DEVLOKER/Books-Lib/blob/main/screenshots/messages.jpg?raw=true "book price negotiation")

### Admin
![manage categories](https://github.com/DEVLOKER/Books-Lib/blob/main/screenshots/manage_categories.jpg?raw=true "manage categories")
![reports list](https://github.com/DEVLOKER/Books-Lib/blob/main/screenshots/manage_reports.jpg?raw=true "reports list")
![manage reports](https://github.com/DEVLOKER/Books-Lib/blob/main/screenshots/manage_reports_2.jpg?raw=true "manage reports")
