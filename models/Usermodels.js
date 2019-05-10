var db= require('../configs/databaseconfig');

const User=db.sequelize.define('user',{

id:{
	type: db.Sequelize.INTEGER,
	allowNull: false,
	autoIncrement: true,
	primaryKey:true
},

username: {
	type: db.Sequelize.STRING,
	allowNull:false
},

lastname: {
	type: db.Sequelize.STRING,
	allowNull: false
}

},

//OPTIONS
{

	freezeTableName:true,
	tableName:'user'	 
}
);

User.sync({force:true})
.then(function(result){
   console.log(result);

})

.catch(function(err){
console.log(err); 
})
