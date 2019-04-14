# DISCORD.JS-search-engine

If you are using Discord.js and you want to integrate a search engine for your website in Discord, this can inspire you. One of my clients who have a large community on Discord had asked about that. I choosed to do it in two stapes:

	1- The first is to generate A JSON file from his host using Cron and PHP.
	2- The second is to get the results from the JSON file matching with the users key words.

The JSON File is generated each hour, I did it like that juste for limit the number of users queries, but you can edit the code and do it as you want, you can use Ajax for exemple . But the goal of this article is to get the results from a Json file.

Dependencies:

	1– https://www.npmjs.com/package/each
	2– https://www.npmjs.com/package/request
	
JSON file architecture:

	{
		"Moscow":[
			{
				"name":"Zamoskvorechie",
				"address":"Zamoskvorechie area, Moscou 115054"
			},
			{
				"name":"Red square",
				"address":"Krasnaya ploshchad, Moscou 109012"
			}
		],
		"Saint_petersburg":[
			{
				"name":"Isaac’s Cathedral",
				"address":"Isaakiyevskaya Sq., 4 Saint-Petersbourg"
			},
			{
				"name":"Ermitage",
				"address":"Palace Square, 2 Saint-Petersbourg"
			}
		]
	}
