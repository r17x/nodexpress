/**
 *
 * ExpressJS Tutorial - Komunitas Programmer Makassar
 *
 * Facebook Group : https://www.facebook.com/groups/ProgrammerMakassar/
 * 
 * ditulis oleh @ri7nz
 *
 */

/**
 * Deklarasi variable 
 *
 * var express diberi nilai dari lib expressJs
 * var app diberi nilai dari express constructor
 * var path diberi nilai dari lib path
 *
 */

var express = require('express');

var app     = express();

var path    = require('path');

const public_html = __dirname + '/public';

/**
 * 
 * deklarsi static folder/path
 *
 */

  app.use('/static', express.static( public_html +  '/static' ) );
  

/**
 *
 * Membuat route 
 *
 * app.get( uri, function(request,response) );
 *
 * app.get    =>  fungsi yang memiliki 2 parameter 
 *
 *                parameter pertama yakni uri dengan nilai string
 *
 *                parameter kedua dengan nilai function
 *
 *                yg dimana parameter kedua memiliki 2 parameter
 *
 *                didalamnya yaitu parameter pertama untuk mengambil
 *
 *                nilai request dari client dan parameter kedua 
 *
 *                memberikan response kepada client
 *
 */


/**
 * contoh pada fungsi ini kita akan mengambil nilai dan memberikan
 *
 * response dari root uri atau '/' 
 *
 * '/' ==> http://alamatweb.domain/
 *
 * jadi parameter pertama diberi nilai '/'
 *
 * parameter kedua mengerjakan fungsi atau logic
 *
 */

app.get('/', (req, res) => {

    /*
     * res => response
     *
     * res.sendFile => memberikan response kepada client berupa file/document
     *
     * path.join( __dirname + files )  => mengambungkan alamat/path directory
     *
     * __dirname => lokasi project app.js 
     *
     * files     => files/document yang diberikan kepada client
     *
     */

    return res.sendFile( path.join( public_html + '/index.html') );

});

/**
 * http://alamat/contact
 */

app.get('/contact', (req, res) => {
    return res.sendFile( path.join( public_html + '/contact.html') );
});

/**
 * http://alamat/about
 */

app.get('/about', (req, res) => {
    return res.sendFile( path.join( public_html + '/about.html') );
});

/**
 * http://alamat/render
 */

app.get('/render', (req, res) => {

    /**
     * res.send( nilai ) => hampir sama dengan fungsi res.sendFile hanya saja fungsi ini untuk
     *                      mengirim nilainya secara langsung kepada client
     */
    let html ='<html> <title>Lewat Var HTML</title> <body><p> Hello Daeng, di cetak di <i>let html</i> <br> Kembali <a href="/">Ke Halaman Utama</a> .</p> </body></html>';

    return res.send( html );

}); 

/**
 * http://alamat/react
 */

app.get('/react', (req, res) => {
    return res.sendFile( path.join( public_html + '/react.html') );
}); 

var port = 3000;

app.listen( port , ()=> {

    console.log('Applikasi Berjalan di http://localhost:' + port + '/' );

});
