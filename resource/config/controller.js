class controller{
    constructor(url_config){
        this.mysql = require("mysql2");
        this.config = require(url_config);
        this.connection = this.mysql.createConnection({
            user : this.config.database.username ,
            password : this.config.database.password ,
            database : this.config.database.database ,
            host : this.config.database.host
        });
        this.connection.connect((err) => {
            if(err) throw err;
            console.log("berhasil connect to database");
        });
    }

    post_login(req,res){
        let data = req.body;
        this.connection.query("select case when exists( select * from  user where email = ? and password = ? ) then true else false end as exits",[data.email,data.password] ,(err,result)=> {
            res.json(result);
        })
    }

    get_login(req,res){
        res.render("login.ejs");
    }
}

module.exports = controller;

