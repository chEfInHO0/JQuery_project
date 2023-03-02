$(document).ready(() => {
    $('form').on('submit', (e) => {
        e.preventDefault()
        const list = $('ul')
        const item = $('<li></li>')
        const val = $('input[type="text"]').val()
        const elem = $(`
        <div>
            <span class="task"> ${val} </span><button id="strike" class="list-btn">Feito</button>
            <button id="del" class="list-btn">Deletar</button>
        </div>
        `)
        elem.appendTo(item)
        item.appendTo(list)
        $('input[type="text"]').val('')
        $('button').on('click', ($this) => {
            if ($this.target.id == 'strike') {
                const target = $($this.target)[0]
                $(target).siblings('span')[0].classList.add('striked')
            } else if ($this.target.id == 'del') {
                const delTarget = $($this.target)[0]
                $(delTarget).parents('li').remove(); 
            } else {
            }
        })
    })
})