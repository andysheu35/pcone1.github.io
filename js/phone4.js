$(() => {
    $('#main').on('mouseenter', () => {
        $('#man').empty();



        // $img = $('<img>').attr('src', './松果/分享.png').attr('style', `width: 100%;height: 100%;display: block;`)
        // $('#man').append($img)


    })
    $('#main').on('mouseleave', () => {

        $('#man').empty();


    })
    // $('#main').on('mouseenter', () => {

    //     $('#main').empty();


    //     $img = $('<img>').attr('src', './松果/松鼠汗顏.png')
    //     $('#main').append($img)


    // })
    // $('#main').on('mouseleave', () => {
    //     $('#main').empty();


    //     $img = $('<img>').attr('src', './松果/打掃.png')
    //     $('#main').append($img)

    // })
    $('#main').on('click', () => {
        // 隨機產生一個1到52的數字
        $('#data').empty();
        // 產生 img 的 jQuery 物件在變數 $img

        // 產生 div 的 jQuery 物件在變數 $div
        $div = $('<div>').addClass('img-triangle2').addClass('img-things2')
        // 將 $img 插入到 $div 內
        $a = $('<a>').attr('href', `phone5.html`).attr('style', `width: 100%;height: 100%;display: block;`)

        // 將 $div 插入到網頁 id=data 的html element 裡面
        $div.append($a)
        $('#data').append($div)

    })
    $('#main').on('click', () => {
        // 隨機產生一個1到52的數字
        $('#data1').empty();
        // 產生 img 的 jQuery 物件在變數 $img

        // 產生 div 的 jQuery 物件在變數 $div
        $div = $('<div>').addClass('img-triangle4').addClass('img-things4')
        // 將 $img 插入到 $div 內
        $a = $('<a>').attr('href', `phone4.html`).attr('style', `width: 100%;height: 100%;display: block;`)

        // 將 $div 插入到網頁 id=data 的html element 裡面
        $div.append($a)
        $('#data1').append($div)

    })


})