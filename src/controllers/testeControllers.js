const testeControllers = {

    create: (request, response) => {

        console.log(request.body);

        response.render('index', {
            title: 'express'
        })
    }
}


// aqui esta quebrado