exports.commands = {
	rk: 'kick',
	roomkick: 'kick',
	kick: function (target, room, user) {
		if (!target) return;
		target = this.splitTarget(target);
		var targetUser = this.targetUser;
		if (!targetUser || !targetUser.connected) {
			return this.sendReply("User " + this.targetUsername + " extraviado.");
		}
		if (!room.users[targetUser.userid]) {
			return this.sendReply("User " + this.targetUsername + "no está en la Sala " + room.id + ".");
		}
		if (!this.can('kick', targetUser, room)) return false;
		var msg = " expulsado de la sala" + room.id + " por " + user.name + (target ? " (" + target + ")" : "") + ".";
		this.addModCommand("" + targetUser.name + " era " + msg);
		targetUser.popup("Usted ha sido " + msg);
		targetUser.leaveRoom(room);
	}
};
