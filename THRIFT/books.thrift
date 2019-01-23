namespace js books

#DATA OBJECTS
typedef string BookId
typedef string AuthorId
typedef string Timestamp

struct Author{
    1: optional AuthorId authorId, 
    2: optional string name,
    3: optional Timestamp dateOfBirth,
}

struct BookRequest{
    1: optional BookId bookId,
    2: optional string title,
    3: optional string description,
    4: optional Timestamp publishedOn,
    5: optional string type,
    6: optional Author author,
}

#-----REQUESTS-----
struct AddBookRequest{
    1: optional string title,
    2: optional string description,
    3: optional Timestamp publishedOn,
    4: optional string type,
    5: optional AuthorId authorId,
}

struct GetBooksRequest{
    1: optional BookId bookId,
    2: optional string title,
    3: optional string description,
    4: optional Timestamp publishedOn,
    5: optional string type,
    6: optional Author author,
}

struct UpdateBookRequest{
    1: optional string title,
    2: optional string description,
    3: optional Timestamp publishedOn,
    4: optional string type,
}

struct DeleteBookRequest{
    1: optional BookId bookId,
}

#----RESPONSES-----
struct ResponseStatus {
  1: required bool success,
  2: optional string message,
}

struct AddBookResponse{
    1: required ResponseStatus responseStatus,
    2: optional BookRequest bookRequest,
}

struct GetBooksResponse{
    1: required ResponseStatus responseStatus,
    2: optional BookRequest bookRequest,
}

#-----EXCEPTIONS------
exception Exception {
  1: required bool success,
  2: optional string message,
}

service BookAuthorInformation {
    AddBookResponse addBook(1:required AddBookRequest request) throws (1: Exception ex1),
    GetBooksResponse getBooks(1:required GetBooksRequest request) throws (1: Exception ex1),
    ResponseStatus updateBooks(1:required UpdateBookRequest request) throws (1:Exception ex1),
    ResponseStatus deleteBooks(1:required DeleteBookRequest request) throws (1:Exception ex1)
}
