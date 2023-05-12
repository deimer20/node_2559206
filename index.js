const express =require('express')

const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8081

//servidor de contenido estatico
app.use(express.static('public'))

//configracion del directorio que guardara las vistas hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

//configuracion del directorio qe guardara los archivos parciales hbs
hbs.registerPartials(__dirname+'/public/views/partials');


app.get('/', (req, res) =>{
    // res.write('Home')
    // res.end()
    res.render('Home',
    {
        titulo: 'Home',
        nombre: 'Deimer ibarguen'
    }
)
})
app.get('/productos', (req, res) =>{
    res.render('productos',
    {
        titulo: 'Lista de productos',
        nombre: 'Deimer ibarguen',
        rol: 'Admin'
    }
)
})

app.listen(puerto,() => {
    console.log(`Escuchando por el puerto ${puerto}`)
})