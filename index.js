const Discord = require('discord.js')
const request = require('request')
const each = require('each')
const embed = new Discord.RichEmbed()
const bot   = new Discord.Client()

bot.on('ready', ()=>{

	console.log(`[ # ] Your Discord Bot is ready!`) 

})

bot.on('message', (message)=> {

	if ( message.content.startsWith("!monument") ) {

		let url = "https://My_Json_file.com/data.json" //Your JSON URL
	 
		request( {url: url, json: true}, (error, response, data)=> {

		    if ( !error && response.statusCode === 200 ) {

		        let keyword = message.content.toLowerCase().replace(/\s|!monument/g, "")
		        let results = Object.keys(data).find( key => key.includes(keyword))

		        if ( keyword.length >2 && results !== undefined ) {
		        
				    each( data[results] ).call( (element, index, next) => {

					   	if (message.author.id !== bot.user.id && message.content){ 

							console.log(` Data : ${element}`) // debugging data

							message.channel.send(`${element.name}, address: ${element.address}`)

							setImmediate(next)

						}

					}).next( (err) => {
						console.log(err ? err.message : 'success!');
					})
					
					message.channel.send(items)

				}else{console.log(`${keyword} -> not found!`)}
		        
		    }
		})

	}

})

bot.login('___Your_Private_key___')
