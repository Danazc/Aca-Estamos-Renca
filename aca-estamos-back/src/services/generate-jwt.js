const jwt = require('jsonwebtoken'); 

// 	Se crea una nueva promesa para poder gestionar la creación del token

const generarJWT = (idUser = "") => {  
    return new Promise((resolve, reject) => {
        
        const payload = {idUser};

        //nos permite firmar el token
        jwt.sign( 
            payload, 
            process.env.SECRET_KEY_STRING, 
            { 
                expiresIn: "4h" 
            },
            
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject("No se pudo generar el token");
                } else {
                    resolve(token);
                }
            }
        )
    }
    )
}

module.exports = generarJWT;