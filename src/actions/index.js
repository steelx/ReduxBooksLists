export function selectBook(book) {
    //selectBook is an Action creator
    //it needs to return an Action
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}