const permaDataFile = DATA_DIR + 'permaban.json';

var fs = require('fs');

global.Permaban = {
	permaLock: {},
	permaBan: {}
};

if (!fs.existsSync(permaDataFile))
	fs.writeFileSync(permaDataFile, JSON.stringify(Permaban));

Permaban = JSON.parse(fs.readFileSync(permaDataFile).toString());

function writePermaBanData() {
	fs.writeFileSync(permaDataFile, JSON.stringify(Permaban));
}

exports.commands = {
	
	permaban: function (target, room, user) {
		if (!this.can('permaban')) return false;
		target = this.splitTarget(target);
		var userT = this.targetUser;
		if (!userT) return this.sendReply("User '" + this.targetUsername + "' no existe.");
		if (userT.can('staff')) return this.sendReply("User '" + this.targetUsername + "' es un miembro del personal. Degradar antes Permaban.");
		if (Permaban.permaBan[userT.userid]) return this.sendReply("User '" + this.targetUsername + "'ya Perma prohibido.");
		Permaban.permaBan[userT.userid] = 1;
		userT.popup("" + user.name + "que ha prohibido." + (target ? "\n\nReason: " + target : ""));
		userT.ban();
		this.addModCommand(this.targetUsername + " se prohibió permanentemente por " + user.name + (target ? ('. (' + target + ')') : '.'));
		writePermaBanData();
	},
	
	unpermaban: 'permaunban',
	permaunban: function (target, room, user) {
		if (!this.can('permaban')) return false;
		var userT = toId(target);
		if (!Permaban.permaBan[userT]) return this.sendReply("User '" + target + "' No está prohibido perma.");
		delete Permaban.permaBan[userT];
		this.addModCommand(target + " fue retirado de la lista negra por " + user.name);
		this.parse('/unban ' + target);
		writePermaBanData();
	},
	
	permalock: function (target, room, user) {
		if (!this.can('permaban')) return false;
		target = this.splitTarget(target);
		var userT = this.targetUser;
		if (!userT) return this.sendReply("User '" + this.targetUsername + "' no existet.");
		if (userT.can('staff')) return this.sendReply("User '" + this.targetUsername + "' es un miembro del personal. Degradar antes PermaLock.");
		if (Permaban.permaLock[userT.userid]) return this.sendReply("User '" + this.targetUsername + "'ya Perma bloqueado.");
		Permaban.permaLock[userT.userid] = 1;
		userT.popup("" + user.name + " te ha bloqueado de hablar en chats, batallas, y PMing usuarios habituales." + (target ? "\n\nRazón: " + target : ""));
		userT.lock();
		this.addModCommand(this.targetUsername + " fue bloqueado permanentemente por " + user.name + (target ? ('. (' + target + ')') : '.'));
		writePermaBanData();
	},
	
	unpermalock: 'permaunlock',
	permaunlock: function (target, room, user) {
		if (!this.can('permaban')) return false;
		var userT = toId(target);
		if (!Permaban.permaLock[userT]) return this.sendReply("User '" + target + "' No se Perma bloqueado.");
		delete Permaban.permaLock[userT];
		this.addModCommand(target + " fue retirado de la lista por PermaLock " + user.name);
		this.parse('/unlock ' + target);
		writePermaBanData();
	},
	
	permalist: function (target, room, user) {
		if (!this.can('permaban')) return false;
		var banstr = '<b>Banned Users:<b> ' + Object.keys(Permaban.permaBan).sort().join(", ");
		var lockstr = '<b>Locked Users:</b> ' + Object.keys(Permaban.permaLock).sort().join(", ");
		this.sendReplyBox(banstr + '<br /><br />' + lockstr);
		
	},
	
	permahelp: function (target, room, user) {
		if (!this.can('permaban')) return false;
		return this.sendReplyBox(
			'<b>Plista de comandos permaban</b><br /><br />' +
			'/permaban [target] - prohíbe permanentemente a un usuario.<br />' +
			'/permaunban [target] - elimina de la lista negra.<br />' +
			'/permalock [target] - bloquea permanentemente un usuario.<br />' +
			'/permaunlock [target] - elimina del locklist.<br />' +
			'/permalist [target] - enumera todas las prohibiciones perma y cerraduras.<br />'
		);
	}
	
}
