
import { Models, TodoItem } from './models/todoItem';
import { TodoList } from './services/todoList';
import { LogAddition } from './decorators/logAddition';
import { isString } from './utils/typeGuards';
import { listRender, listClear } from './services/render-clear';
import { selectRender } from './services/render-clear';

const todoList = new TodoList<string>();

class TodoApp {
    @LogAddition
    static addItem<T>(list: TodoList<T>, item: TodoItem<T>): void {
        list.addTodoItem(item);
    }

    static deleteItem(list: TodoList<string>, id: number) :void {
        list.deleteTodoItem(id);
    }

    static addTodoItem(text: string, title:string, date?: Date): void {
        if (isString(text)) {
            const item = new TodoItem<string>(text, title, date);
            this.addItem(todoList, item);
        } else {
            console.error('Invalid text format');
        }
    }


    static listAllItems(): TodoItem<string>[] {

        return todoList.listAllTodoItems()
    }

    static listItemsByContent(content: string): TodoItem<string>[] {
         
        return todoList.getItemsByContent(content);
    }

    static getContentNames(): string[] {
        const contentItems: Set<string> = new Set<string>();
    
        todoList.listAllTodoItems().forEach(item => {
            contentItems.add(item.content);
        });

        return Array.from(contentItems);
    }
}

// Példa adatok:
TodoApp.addTodoItem('bevásárlás', 'tej, cukor', new Date('2022-02-16'),);
TodoApp.addTodoItem('otthon', 'levágni a füvet');
TodoApp.addTodoItem('bevásárlás', 'mosószer', new Date(2022, 1, 16));
TodoApp.addTodoItem('bevásárlás', 'kávé');
TodoApp.addTodoItem('otthon', 'áramot diktálni', new Date('2022-02-16'));







const todos: HTMLElement | null = document.querySelector('#todos');

if(todos){
    listRender(TodoApp.listAllItems(), todos);
    
}
    


const mySelect: HTMLElement | null = document.querySelector("#myselect");

if(mySelect){
    selectRender(TodoApp.getContentNames(), mySelect);
    
}
    

const submit: HTMLElement | null = document.querySelector('#submit');

submit?.addEventListener('click', () => {

    const contentElement: HTMLInputElement| null = document.querySelector('#content');
    const titleElement: HTMLInputElement | null = document.querySelector('#title');
    const dateElement: HTMLInputElement | null = document.querySelector('#date');

    if (contentElement && titleElement && dateElement) {
        const content: string = contentElement.value;
        const title: string = titleElement.value;
        const dateValue: string = dateElement.value;

        const dateObject: Date = new Date(dateValue);

        TodoApp.addTodoItem(content, title, dateObject);

        
        if(todos && mySelect){
            listRender(TodoApp.listAllItems(), todos);
            selectRender(TodoApp.getContentNames(), mySelect);
            listEvent('delete');
        }


    } else {
        console.error('One or more input fields not found.');
    }
    
});


mySelect?.addEventListener('change', () => {

    if((mySelect as HTMLSelectElement).value === 'all'){
        if(todos && mySelect){

            listRender(TodoApp.listAllItems(), todos);
            listEvent('delete');
        }
    } else if(todos){

        const selectedContent = (mySelect as HTMLSelectElement).value;
        listRender(TodoApp.listItemsByContent(selectedContent), todos);
        listEvent('delete');
    }
    
});




listEvent('delete');


function listEvent(method: string) {

    let list: NodeList = document.querySelectorAll(`#${method}`);

    for (const element of Array.from(list)) {
               
        if (element instanceof HTMLElement) {
            const idStr: string | undefined = element.dataset.id;
            const id: number | undefined = idStr ? parseInt(idStr, 10) : undefined;
            if (typeof id === 'number') {
                element.addEventListener('click', () => deleteClick(id));
            } else {
                console.error('Id is not a number.');
            }
        }
    }
}

function deleteClick(id: number) {

        TodoApp.deleteItem(todoList, id);
        if (todos && mySelect) {
            listRender(TodoApp.listAllItems(), todos);
            selectRender(TodoApp.getContentNames(), mySelect);
            listEvent('delete');
        }
    
};










