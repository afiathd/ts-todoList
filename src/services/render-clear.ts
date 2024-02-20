import { TodoItem } from "../models/todoItem";

export function listRender(array: Array<TodoItem<string>>, renderto: HTMLElement) {

    listClear(renderto);

    array.forEach(element => {

        const formattedDate = element.date ? element.date.toLocaleDateString() : 'N/A';

        const itemTpl = `
            <div class="item">
                <div class="title-id">${element.id}</div>
                <div class="title">${element.content}</div>
                <div class="title">${element.title}</div>
                <div class="title">${formattedDate}</div>
                <div class="button" id="edit" data-list="${element.content}" data-id="${element.id}">edit</div>
                <div class="button" id="delete" data-list="${element.content}" data-id="${element.id}">delete</div>
            </div>
        `;

        if (renderto)
            renderto.insertAdjacentHTML('beforeend', itemTpl);



    });

}

export function listClear(renderto: HTMLElement) {

    if (renderto)
        renderto.innerHTML = "";
}


export function selectRender(arr: string[], renderto: HTMLElement) {

    listClear(renderto);

    const opt0Tpl: string = '<option value="all" selected>Összes</option>';

    if (renderto) {

        renderto.insertAdjacentHTML('afterbegin', opt0Tpl);

        arr.forEach(element => {

            let optTpl = `
            <option value="${element}">${element}</option>
            `;

            renderto.insertAdjacentHTML('beforeend', optTpl);
        });
    };
}


