var color = require('../config/color');

exports.parseEmoticons = parseEmoticons;

var emotes = {
	':(': 'http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0101-sadsmile.gif',
	':)': 'http://emoticoner.com/files/emoticons/skype_smileys/happy-skype-smiley.gif?1301953194',
	';(': 'http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0106-crying.gif',
	';)': 'http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0105-wink.gif',
	':$': 'http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0111-blush.gif',
	':D': 'http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0102-bigsmile.gif',
	':h:': 'http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0152-heart.gif',
	':punch:': 'http://emoticoner.com/files/emoticons/smileys/boxing-smiley.gif?1292867560',
	':hola:': 'http://k40.kn3.net/9788B4B8D.gif',
	':bye:': 'http://emoticoner.com/files/emoticons/rice_ball/rice-ball-smiley-05.gif?1302020563',
	':shut:': 'http://emoticoner.com/files/emoticons/smileys/cheerleader1-smiley.gif?1292867567',
	'O_O':'http://emoticoner.com/files/emoticons/pink-cat/surprised-pink-cat-emoticon.gif?1292538525',
	':b:': 'http://emoticoner.com/files/emoticons/pink-cat/smile-pink-cat-emoticon.gif?1292538525',
	':felicidades:': 'http://emoticoner.com/files/emoticons/smileys/congratualtions-smiley.gif?1292867575',
	':um:': 'http://emoticoner.com/files/emoticons/text_line/text-line-smiley-006.gif?1302022356',
	':lengua:' :'http://emoticoner.com/files/emoticons/rice_ball/rice-ball-smiley-10.gif?1302020563',
	':punch2:': 'http://emoticoner.com/files/emoticons/smileys/fight2-smiley.gif?1292867593',
	':sama:': 'http://emoticoner.com/files/emoticons/pink-cat/cute-pink-cat-emoticon.gif?1292538522',
	':Love:': 'http://emoticoner.com/files/category_pictures/crazy-monkey-emoticon-003.gif',
	':banned:': 'http://emoticoner.com/files/emoticons/smiley_faces/banned-smiley-face.gif?1302011310',
	':ban2:': 'http://emoticoner.com/files/emoticons/smiley_faces/banned2-smiley-face.gif?1302011310',
	'zzZZ': 'http://www.messentools.com/images/emoticones/anime/www.MessenTools.com-Pokemon-pok090.gif',
	':chikorita:': 'http://www.emoticones-avenue.com/emoticones/nintendo_pokemon_04.gif',
	'comer': 'http://emoticoner.com/files/emoticons/red-fox/red-fox-emoticon-12.gif?1292871603',
	':creeper:': 'http://static-cdn.jtvnw.net/jtv_user_pictures/chansub-global-emoticon-5d019b356bd38360-24x24.png',
	':sayan:': 'http://emoticoner.com/files/emoticons/blacko/blacko-emoticon-17.gif?1292951356',
	':arceus:': 'http://cbc.pokecommunity.com/config/emoticons/arceus.png',
	'cepilarme': 'http://emoticoner.com/files/emoticons/mouse-girl/mouse-girl-emoticon-52.gif?1292795478',
	'bañar': 'http://emoticoner.com/files/emoticons/mouse-girl/mouse-girl-emoticon-50.gif?1292795477',
	':buizel:': 'http://orig11.deviantart.net/079c/f/2008/244/6/a/caramel__buizel_by_raidragonair.gif',
	':rap:': 'http://emoticoner.com/files/emoticons/crazy-monkey/crazy-monkey-emoticon-008.gif?1292792379',
	':bye:': 'http://cbc.pokecommunity.com/config/emoticons/bye.gif',
	'perdon': 'http://emoticoner.com/files/emoticons/yellow_onion_head/yellow-onion-head-emoticon-21.gif?1301920888',
	':catflip:': 'http://cbc.pokecommunity.com/config/emoticons/catflip.png',
	':charizard:': 'http://cbc.pokecommunity.com/config/emoticons/charizard.png',
	':rayquazaMG:': 'http://www.serebii.net/shuffle/pokemon/384-m.png',
	':cookie:': 'http://cbc.pokecommunity.com/config/emoticons/cookie.png',
	':KOLO:': 'http://emoticoner.com/files/emoticons/soldier-baby/shooting-soldier-baby-emoticon.gif?1292864934',
	':Jodes:': 'http://emoticoner.com/files/emoticons/yellow_onion_head/yellow-onion-head-emoticon-13.gif?1301920886',
	':espurr:': 'http://cbc.pokecommunity.com/config/emoticons/espurr.png',
	':flirt:': 'http://cbc.pokecommunity.com/config/emoticons/flirt.png',
	'U_U': 'http://emoticoner.com/files/emoticons/pink-cat/worry-pink-cat-emoticon.gif?1292538526',
	':gloom:': 'http://cbc.pokecommunity.com/config/emoticons/gloom.png',
	':growlithe:': 'http://cbc.pokecommunity.com/config/emoticons/growlithe.png',
	':hamster:': 'http://cbc.pokecommunity.com/config/emoticons/hamster.png',
	':calor:': 'http://emoticoner.com/files/emoticons/yellow_onion_head/yellow-onion-head-emoticon-26.gif?1301920889',
	':houndoom:': 'http://cbc.pokecommunity.com/config/emoticons/houndoom.png',
	':jigglypuff:': 'http://cbc.pokecommunity.com/config/emoticons/jigglypuff.png',
	':jynx:': 'http://cbc.pokecommunity.com/config/emoticons/jynx.png',
	':kappa:': 'http://cbc.pokecommunity.com/config/emoticons/kappa.png',
	':kermit:': 'http://cbc.pokecommunity.com/config/emoticons/kermit.png',
	':lapras:': 'http://cbc.pokecommunity.com/config/emoticons/lapras.png',
	':lileep:': 'http://cbc.pokecommunity.com/config/emoticons/lileep.png',
	':ludicolo:': 'http://cbc.pokecommunity.com/config/emoticons/ludicolo.png',
	':luvdisc:': 'http://cbc.pokecommunity.com/config/emoticons/luvdisc.png',
	':magikarp:': 'http://cbc.pokecommunity.com/config/emoticons/magikarp.png',
	':meganium:': 'http://cbc.pokecommunity.com/config/emoticons/meganium.png',
	':meowstic:': 'http://cbc.pokecommunity.com/config/emoticons/meowstic.png',
	':meowsticf:': 'http://cbc.pokecommunity.com/config/emoticons/meowsticf.png',
	':metagross:': 'http://cbc.pokecommunity.com/config/emoticons/metagross.png',
	':moo:': 'http://cbc.pokecommunity.com/config/emoticons/moo.gif',
	':nw:': 'http://cbc.pokecommunity.com/config/emoticons/nw.gif',
	':oddish:': 'http://cbc.pokecommunity.com/config/emoticons/oddish.png',
	':pear:': 'http://cbc.pokecommunity.com/config/emoticons/pear.png',
	':psyduck:': 'http://cbc.pokecommunity.com/config/emoticons/psyduck.png',
	':seduce:': 'http://cbc.pokecommunity.com/config/emoticons/seduce.png',
	':senpai:': 'http://cbc.pokecommunity.com/config/emoticons/senpai.png',
	':sims:': 'http://cbc.pokecommunity.com/config/emoticons/sims.png',
	':slowpoke:': 'http://cbc.pokecommunity.com/config/emoticons/slowpoke.png',
	':snorlax:': 'http://cbc.pokecommunity.com/config/emoticons/snorlax.png',
	':spheal:': 'http://cbc.pokecommunity.com/config/emoticons/spheal.png',
	':strut:': 'http://cbc.pokecommunity.com/config/emoticons/strut.png',
	':suicune:': 'http://cbc.pokecommunity.com/config/emoticons/suicune.png',
	':superman:': 'http://cbc.pokecommunity.com/config/emoticons/superman.png',
	':sweep:': 'http://cbc.pokecommunity.com/config/emoticons/sweep.gif',
	':taco:': 'http://cbc.pokecommunity.com/config/emoticons/taco.png',
	':vulpix:': 'http://cbc.pokecommunity.com/config/emoticons/vulpix.png',
	':weezing:': 'http://cbc.pokecommunity.com/config/emoticons/weezing.png',
	':eevee:': 'http://cbc.pokecommunity.com/config/emoticons/eevee.png',
	':wobbuffet:': 'http://cbc.pokecommunity.com/config/emoticons/wobbuffet.png',
	':pikachu:': 'http://cbc.pokecommunity.com/config/emoticons/pikachu.png',
	':wynaut:': 'http://cbc.pokecommunity.com/config/emoticons/wynaut.png',
	':sonji:': 'http://emoticoner.com/files/emoticons/raccoon/feel-love-raccoon-emoticon.gif?1302774071',		
	':mudkip:': 'http://vignette2.wikia.nocookie.net/epicrapbattlesofhistory/images/4/46/Awesome_Face_Mudkip.png/revision/latest?cb=20140626034323'
};

var emotesKeys = Object.keys(emotes);
var patterns = [];
var metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

for (var i in emotes) {
	if (emotes.hasOwnProperty(i)) {
		patterns.push('(' + i.replace(metachars, '\\$&') + ')');
	}
}
var patternRegex = new RegExp(patterns.join('|'), 'g');

/**
 * Parse emoticons in message.
 *
 * @param {String} message
 * @param {Object} room
 * @param {Object} user
 * @param {Boolean} pm - returns a string if it is in private messages
 * @returns {Boolean|String}
 */
function parseEmoticons(message, room, user, pm) {
	if (typeof message !== 'string' || (!pm && room.disableEmoticons)) return false;

	var match = false;
	var len = emotesKeys.length;


	while (len--) {
		if (message && message.indexOf(emotesKeys[len]) >= 0) {
			match = true;
			break;
		}
	}

	if (!match) return false;

	// escape HTML
	message = Tools.escapeHTML(message);

	// add emotes
	message = message.replace(patternRegex, function (match) {
		var emote = emotes[match];
		return typeof emote === 'string' ? '<img src="' + emote + '" title="' + match + '/>' : match;
	});

	// __italics__
	message = message.replace(/\_\_([^< ](?:[^<]*?[^< ])?)\_\_(?![^<]*?<\/a)/g, '<i>$1</i>');

	// **bold**
	message = message.replace(/\*\*([^< ](?:[^<]*?[^< ])?)\*\*/g, '<b>$1</b>');

	var group = user.getIdentity().charAt(0);
	if (room.auth) group = room.auth[user.userid] || group;

	var style = "background:none;border:0;padding:0 5px 0 0;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:9pt;cursor:pointer";

	message = "<div class='chat'>" + "<small>" + group + "</small>" + "<button name='parseCommand' value='/user " + user.name + "' style='" + style + "'>" + "<b><font color='" + color(user.userid) + "'>" + user.name + ":</font></b>" + "</button><em class='mine'>" + message + "</em></div>";
	if (pm) return message;

	room.addRaw(message);

	return true;
}

/**
 * Create a two column table listing emoticons.
 *
 * @return {String} emotes table
 */
function create_table() {
	var emotes_name = Object.keys(emotes);
	var emotes_list = [];
	var emotes_group_list = [];
	var len = emotes_name.length;

	for (var i = 0; i < len; i++) {
		emotes_list.push("<td>" +
			"<img src='" + emotes[emotes_name[i]] + "'' title='" + emotes_name[i] + "' height='50' width='50' />" +
			emotes_name[i] + "</td>");
	}

	var emotes_list_right = emotes_list.splice(len / 2, len / 2);

	for (var i = 0; i < len / 2; i++) {
		var emote1 = emotes_list[i],
			emote2 = emotes_list_right[i];
		if (emote2) {
			emotes_group_list.push("<tr>" + emote1 + emote2 + "</tr>");
		} else {
			emotes_group_list.push("<tr>" + emote1 + "</tr>");
		}
	}

	return "<div class='infobox'><center><b><u>Lista de Emoticones</u></b></center>" + "<div class='infobox-limited'><table border='1' cellspacing='0' cellpadding='5' width='100%'>" + "<tbody>" + emotes_group_list.join("") + "</tbody>" + "</table></div></div>";
}

var emotes_table = create_table();

exports.commands = {
	blockemote: 'blockemoticons',
	blockemotes: 'blockemoticons',
	blockemoticon: 'blockemoticons',
	blockemoticons: function (target, room, user) {
		if (user.blockEmoticons === (target || true)) return this.sendReply("You are already blocking emoticons in private messages! To unblock, use /unblockemoticons");
		user.blockEmoticons = true;
		return this.sendReply("You are now blocking emoticons in private messages.");
	},
	blockemoticonshelp: ["/blockemoticons - Blocks emoticons in private messages. Unblock them with /unblockemoticons."],

	unblockemote: 'unblockemoticons',
	unblockemotes: 'unblockemoticons',
	unblockemoticon: 'unblockemoticons',
	unblockemoticons: function (target, room, user) {
		if (!user.blockEmoticons) return this.sendReply("You are not blocking emoticons in private messages! To block, use /blockemoticons");
		user.blockEmoticons = false;
		return this.sendReply("You are no longer blocking emoticons in private messages.");
	},
	unblockemoticonshelp: ["/unblockemoticons - Unblocks emoticons in private messages. Block them with /blockemoticons."],

    caritas: 'emoticons',
	emotes: 'emoticons',
	emoticons: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReply("|raw|" + emotes_table);
	},
	emoticonshelp: ["/emoticons - Get a list of emoticons."],

	toggleemote: 'toggleemoticons',
	toggleemotes: 'toggleemoticons',
	toggleemoticons: function (target, room, user) {
		if (!this.can('declare', null, room)) return false;
		room.disableEmoticons = !room.disableEmoticons;
		this.sendReply("Disallowing emoticons is set to " + room.disableEmoticons + " in this room.");
		if (room.disableEmoticons) {
			this.add("|raw|<div class=\"broadcast-red\"><b>Emoticons are disabled!</b><br />Emoticons will not work.</div>");
		} else {
			this.add("|raw|<div class=\"broadcast-blue\"><b>Emoticons are enabled!</b><br />Emoticons will work now.</div>");
		}
	},
	toggleemoticonshelp: ["/toggleemoticons - Toggle emoticons on or off."],

	rande: 'randemote',
	randemote: function (target, room, user) {
		if (!this.canBroadcast()) return;
		var rng = Math.floor(Math.random() * emotesKeys.length);
		var randomEmote = emotesKeys[rng];
		this.sendReplyBox("<img src='" + emotes[randomEmote] + "' title='" + randomEmote + "' height='50' width='50' />");
	},
	randemotehelp: ["/randemote - Get a random emote."]
};
